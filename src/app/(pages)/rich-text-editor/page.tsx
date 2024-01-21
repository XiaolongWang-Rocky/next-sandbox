'use client'
import React from 'react'
import {EditorState, Modifier, RichUtils} from 'draft-js'
import dynamic from 'next/dynamic'
import 'draft-js/dist/Draft.css'
import { Box, Button } from '@mui/material';

const Editor = dynamic(() => import('draft-js').then((mod) => mod.Editor), {
    ssr: false,
})

export default function Page() {
    const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty()
    );

    // const contentState = editorState.getCurrentContent()
    // const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {
    //     url: 'http://www.zombo.com'
    // })
    // const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    // const contentStateWithLink = Modifier.applyEntity(
    //     contentStateWithEntity,
    //     selectionState,
    //     entityKey
    // )
    // const newEditorState = EditorState.set(editorState, {
    //     currentContent: contentStateWithLink,
    // })

    function handleKeyCommand(command, editorState) {
        console.log(command)
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if(newState) {
            setEditorState(newState)
            return 'handled'
        }
        return 'not-handled'
    }

    function handleClick() {
        console.log(editorState)
        const contentState = editorState.getCurrentContent()
        console.log(contentState)
        const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {
            url: 'http://www.zombo.com'
        })
        console.log(contentStateWithEntity)
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
        console.log(entityKey)
        const selection = editorState.getSelection()
        console.log(selection)
        console.log(selection.getStartKey())
        console.log(selection.getEndOffset())
    }

    return <Box
    sx={{
        textAlign: 'center',
        '&>div': {
            border: '1px solid black',
            backgroundColor: '#f0f0f0',
            margin: '200px auto',
            padding: '5px 10px',
            height: '300px',
            width: '500px',
            overflow: 'auto'
        }
    }}
    >
        <Editor editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand}/>
        <Button onClick={handleClick}>Show Content</Button>
    </Box>
}