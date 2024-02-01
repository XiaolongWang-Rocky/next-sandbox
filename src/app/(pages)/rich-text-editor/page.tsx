'use client'
import React, { useRef, useState } from 'react'
import {EditorState, Modifier, CompositeDecorator, ContentBlock } from 'draft-js'
import dynamic from 'next/dynamic'
import 'draft-js/dist/Draft.css'
import { List, ListItem } from '@mui/material'

const Editor = dynamic(() => import('draft-js').then((mod) => mod.Editor), {
    ssr: false,
})

const suggestedList = ['AAAA', 'BBBB', 'CCCC', 'DDDD', 'EEEE']


export default function Page() {
    const compositeDecorator = new CompositeDecorator([
        {
            strategy: handleStrategy,
            component: HandleSpan,
        },
        {
            strategy: hashtagStrategy,
            component: HashtagSpan,
        },
    ]);
    const [editorState, setEditorState] = useState(EditorState.createEmpty(compositeDecorator))
    const [displayedText, setDisplayedText] = useState('')
    const [listPosition, setListPosition] = useState(null)
    const [showSuggestion, setShowSuggestion] = useState(false)
    const matchedTexts = useRef([])
    const editor = useRef(null)
    const focus = () => editor.current?.focus()
    const logState = () => setDisplayedText(editorState.getCurrentContent().getPlainText())

    const HANDLE_REGEX = /@[\w]+/g;
    const HASHTAG_REGEX = /#[\w\u0590-\u05ff]+/g;

    function getCursorCoordinates() {
        var selection = window.getSelection()
        // console.log(selection)
    
        if (selection.rangeCount > 0) {
            var range = selection.getRangeAt(0)
            var rect = range.getBoundingClientRect()
    
            // 获取相对于视口的坐标
            var relativeX = rect.left
            var relativeY = rect.top
    
            setListPosition({x: relativeX, y: relativeY})
        }
    }

    const onChange = (newEditorState: EditorState) => {
        setShowSuggestion(false)
        const textContent = editorState.getCurrentContent().getPlainText()
        const newTextContent = newEditorState.getCurrentContent().getPlainText()
        if(textContent !== newTextContent) {
            const selectionState = newEditorState.getSelection()
            const currentContent = newEditorState.getCurrentContent()
            const focusKey = selectionState.getFocusKey()
            const focusOffset = selectionState.getFocusOffset()
            const blockMapArray = currentContent.getBlocksAsArray()
            const tempArr = []
            blockMapArray.forEach((contentBlock: ContentBlock) => {
                const blockText = contentBlock.getText()
                const blockKey = contentBlock.getKey()
                let matchArr
                while((matchArr = HANDLE_REGEX.exec(blockText)) !== null) {
                    const matchedText = matchArr[0]
                    const startIndex = matchArr.index
                    const endIndex = startIndex + matchedText.length
                    tempArr.push({
                        text: matchedText,
                        start: startIndex,
                        end: endIndex,
                        blockKey
                    })
                }
                matchedTexts.current = tempArr
            })
            matchedTexts.current.forEach(item => {
                if(item.blockKey === focusKey && focusOffset >= item.start+1 && focusOffset <= item.end) {
                    console.log(item)
                    setShowSuggestion(true)
                    getCursorCoordinates()
                }
            })
        }
        setEditorState(newEditorState)
    }

    function handleStrategy(contentBlock, callback, contentState) {
        findWithRegex(HANDLE_REGEX, contentBlock, callback)
    }

    function hashtagStrategy(contentBlock, callback, contentState) {
        findWithRegex(HASHTAG_REGEX, contentBlock, callback)
    }

    function findWithRegex(regex, contentBlock, callback) {
        const text = contentBlock.getText()
        let matchArr, start
        while ((matchArr = regex.exec(text)) !== null) {
            start = matchArr.index
            callback(start, start + matchArr[0].length)
        }
    }

    function replaceTarget(item) {
        const selectionState = editorState.getSelection()
        const currentContent = editorState.getCurrentContent()
        const focusKey = selectionState.getFocusKey()
        const focusOffset = selectionState.getFocusOffset()
        const targetText = matchedTexts.current.find(textItem => textItem.blockKey === focusKey && focusOffset >= textItem.start+1 && focusOffset <= textItem.end)
        const currentBlock = currentContent.getBlockForKey(targetText.blockKey)
        if(currentBlock && targetText) {
            const newContentState = Modifier.replaceText(
                currentContent,
                selectionState.merge({
                    anchorOffset: targetText.start+1,
                    focusOffset: targetText.end
                }),
                item + ' '
            )

            const newEditorState = EditorState.push(editorState, newContentState, 'replace-text')
            setEditorState(newEditorState)
        }
        setShowSuggestion(false)
    }

    return (
        <div style={styles.root} onClick={focus}>
            <div style={styles.editor}>
                {listPosition && showSuggestion && <List sx={{
                    position: 'absolute',
                    top: listPosition.y,
                    left: listPosition.x,
                    backgroundColor: 'green'
                }}>
                    {suggestedList.map(item => <ListItem sx={{'&:hover': {backgroundColor: 'aqua', cursor: 'pointer'}}} key={item} onMouseDown={() => replaceTarget(item)}>{item}</ListItem>)}
                </List>}
                <Editor
                editorState={editorState}
                onChange={onChange}
                placeholder="Write a tweet..."
                ref={editor}
                spellCheck={true}
                />
            </div>
            <input
                onClick={logState}
                style={styles.button}
                type="button"
                value="Log State"
            />
            <p style={{backgroundColor: 'pink'}} dangerouslySetInnerHTML={{__html: displayedText?.replace(/\n/g, '<br>')}}></p>
        </div>
    )
}

/**
 * Super simple decorators for handles and hashtags, for demonstration
 * purposes only. Don't reuse these regexes.
 */

const HandleSpan = (props) => {
    return (
        <span
        style={styles.handle}
        data-offset-key={props.offsetKey}
        >
            {props.children}
        </span>
    );
};

const HashtagSpan = (props) => {
    return (
        <span
        style={styles.hashtag}
        data-offset-key={props.offsetKey}
        >
            {props.children}
        </span>
    );
};

const styles = {
    root: {
        fontFamily: '\'Helvetica\', sans-serif',
        padding: 20,
        width: '30vw',
    },
    editor: {
        color: 'blue',
        border: '1px solid #ddd',
        position: 'relative',
        cursor: 'text',
        fontSize: 16,
        minHeight: 400,
        padding: 10,
    },
    button: {
        margin: 10,
        padding: 5,
        borderRadius: 3,
        textAlign: 'center',
        backgroundColor: 'yellow'
    },
    handle: {
        color: 'rgba(98, 177, 254, 1.0)',
        direction: 'ltr',
        unicodeBidi: 'bidi-override',
    },
    hashtag: {
        color: 'rgba(95, 184, 138, 1.0)',
    },
};