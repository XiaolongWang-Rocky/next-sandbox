'use client'
import React, { useRef, useState } from 'react'
import {EditorState, Modifier, RichUtils, CompositeDecorator} from 'draft-js'
import dynamic from 'next/dynamic'
import 'draft-js/dist/Draft.css'

const Editor = dynamic(() => import('draft-js').then((mod) => mod.Editor), {
    ssr: false,
})

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
    const editor = useRef(null)
    const focus = () => editor.current?.focus()
    const onChange = (editorState) => setEditorState(editorState)
    const logState = () => setDisplayedText(editorState.getCurrentContent().getPlainText())

    const HANDLE_REGEX = /@[\w]+/g;
    const HASHTAG_REGEX = /#[\w\u0590-\u05ff]+/g;

    function handleStrategy(contentBlock, callback, contentState) {
        findWithRegex(HANDLE_REGEX, contentBlock, callback);
    }

    function hashtagStrategy(contentBlock, callback, contentState) {
        findWithRegex(HASHTAG_REGEX, contentBlock, callback);
    }

    function findWithRegex(regex, contentBlock, callback) {
        const text = contentBlock.getText();
        let matchArr, start;
        while ((matchArr = regex.exec(text)) !== null) {
            start = matchArr.index;
            callback(start, start + matchArr[0].length);
        }
    }

    function addLink() {
        const contentState = editorState.getCurrentContent()
        const selectionState = editorState.getSelection()
        const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {url: 'http://www.facebook.com'})
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
        const contentStateWithLink = Modifier.applyEntity(contentStateWithEntity, selectionState, entityKey)
        const newEditorState = EditorState.set(editorState, {
            currentContent: contentStateWithLink
        })
        setEditorState(newEditorState)
    }

    // render() {
    return (
        <div style={styles.root}>
            <div style={styles.editor} onClick={focus}>
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
            <input
                onClick={addLink}
                style={styles.button}
                type="button"
                value="Add the link"
            />
            <p style={{backgroundColor: 'pink'}} dangerouslySetInnerHTML={{__html: displayedText?.replace(/\n/g, '<br>')}}></p>
        </div>
    );
    // }
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
        width: 600,
    },
    editor: {
        border: '1px solid #ddd',
        cursor: 'text',
        fontSize: 16,
        minHeight: 40,
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