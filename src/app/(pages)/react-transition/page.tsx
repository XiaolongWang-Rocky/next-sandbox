'use client'
import React, { useState } from 'react';
import { Card, CardContent, IconButton, Typography, Collapse, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionGroup } from 'react-transition-group';

const UserCard = ({ user, onDelete }) => {
    return (
        <Card style={{
            width: '150px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            flexShrink: 0
        }}>
            <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" noWrap>{user.name}</Typography>
                <IconButton onClick={() => onDelete(user.id)} aria-label="delete">
                    <CloseIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

const UserList = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'aaa jjj' },
        { id: 5, name: 'bbb kkk' },
        { id: 6, name: 'ccc lll' },
        { id: 7, name: 'ddd mmm' },
        { id: 8, name: 'eee nnn' },
        { id: 9, name: 'fff uuu' },
    ]);

    const handleDeleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <div style={{ width: '500px', overflowX: 'auto' }}>
            <Grid container spacing={2} wrap="nowrap">
                <TransitionGroup component={null}>
                    {users.map(user => (
                        <Grid item key={user.id}>
                            <Collapse orientation="horizontal">
                                <UserCard user={user} onDelete={handleDeleteUser} />
                            </Collapse>
                        </Grid>
                    ))}
                </TransitionGroup>
            </Grid>
        </div>
    );
};

export default UserList;
