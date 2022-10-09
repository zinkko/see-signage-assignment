import { Box, Button, Center, Flex, Heading, IconButton, Input, Text } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { useState } from "react";
import { Page } from "../PageEnum";
import { PageData } from "../App";

interface CreatePageProps {
    setPage: React.Dispatch<React.SetStateAction<PageData>>;
}

export const CreateList = ({ setPage }: CreatePageProps) => {
    const [listName, setListName] = useState('');
    const [items, setItems] = useState<string[]>([]);
    const [nextItem, setNextItem] = useState('');

    const addItem = () => {
        setItems([...items, nextItem]);
        setNextItem('');
    }

    const createList = async () => {
        await fetch('http://localhost:8080/admin/playlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: listName,
                items,
            }),
        });
    }

    return (
        <Box p='5%'>
            <Heading>Create New Playlist</Heading>
            <Input
                value={listName}
                onChange={evt => setListName(evt.target.value)}
                placeholder='Playlist name...'
                margin='8px 0'
            />
            <Heading>Items</Heading>
            <Flex direction='column'>
                {items.map(item => {
                    return (<Text key={item}>{item}</Text>)
                })}
            </Flex>
            <Flex>
                <Button onClick={addItem} leftIcon={<AddIcon />} marginRight={2}>Add item</Button>
                <Input
                    value={nextItem}
                    onChange={evt => setNextItem(evt.target.value)}
                    placeholder='link to image'
                />
            </Flex>
            <Center marginTop={16}>
                <Button onClick={() => {
                    createList();
                    setPage({
                        page: Page.Edit,
                        props: { name: listName }
                    });
                }}>Create</Button>
            </Center>
        </Box>
    );
}