import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, IconButton, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PageData } from "../App";
import { Page } from "../PageEnum";

interface EditListProps {
    name: string;
    setPage: React.Dispatch<React.SetStateAction<PageData>>;
}

export const EditList = ({ name, setPage }: EditListProps) => {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState('');

    const fetchData = async () => {
        const data = await fetch(`http://localhost:8080/playlist/${name}`);
        const list = await data.json();
        setItems(list);
    }

    useEffect(() => {
        void fetchData();
    }, []);

    const addItem = () => {
        console.log('add: ', newItem);
        fetch(`http://localhost:8080/admin/playlist/${name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newItem,
            }),
        });
        setItems([...items, newItem]);
        setNewItem('');
    }

    const removeItem = async (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1);

        await fetch(`http://localhost:8080/admin/playlist/${name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItems),
        });
        setItems(newItems);
    }

    return (
        <Box p='5%'>
            <Button onClick={() => setPage({ page: Page.Home })} marginBottom={8}>Home</Button>
            <Heading>List {name}</Heading>
            {items.length === 0 && 'Loading...'}
            <Flex direction='column'>
                {items.map((item, idx) => {
                    return (
                        <Flex key={`${item}-${idx}`} justifyContent='space-between'>
                            <Text>{item}</Text>
                            <IconButton
                                onClick={() => removeItem(idx)}
                                aria-label='Remove item' icon={<CloseIcon/>}
                            />
                        </Flex>
                    );
                })}
            </Flex>
            <Heading marginTop={16} marginBottom={4} size='l'>Add new item to {name}</Heading>
            <Flex>
                <Button onClick={addItem} leftIcon={<AddIcon />} marginRight={2}>Add item</Button>
                <Input
                    value={newItem}
                    onChange={evt => setNewItem(evt.target.value)}
                    placeholder='link to image'
                />
            </Flex>
        </Box>
    );
}