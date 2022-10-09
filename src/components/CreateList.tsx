import { Box, Button, Center, Flex, Heading, IconButton, Input, Text } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { useState } from "react";

export const CreateList = () => {
    const [listName, setListName] = useState('');
    const [items, setItems] = useState<string[]>([]);
    const [nextItem, setNextItem] = useState('');

    const addItem = () => {
        setItems([...items, nextItem]);
        setNextItem('');
    }

    const createList = () => {

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
                <Button onClick={createList}>Create</Button>
            </Center>
        </Box>
    );
}