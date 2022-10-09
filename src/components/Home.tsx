import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PageData } from "../App";
import { Page } from "../PageEnum";

interface HomePageProps {
    setPage: React.Dispatch<React.SetStateAction<PageData>>;
}

export const Home = ({ setPage }: HomePageProps) => {
    const [myLists, setMyLists] = useState<string[]>([]);

    useEffect(() => {
        const fetchLists = async () => {
            const lists = await (await fetch('http://localhost:8080/admin/playlist')).json();
            setMyLists(Object.keys(lists));
        }
        void fetchLists();
    }, []);

    return (
        <Box p='5%'>
            <Heading marginBottom={4}>Your lists:</Heading>
            {myLists.map(listName => (
                <Text cursor='pointer' textDecoration='underline' onClick={() => setPage({
                    page: Page.Edit,
                    props: { name: listName },
                })}>{listName}</Text>
            ))}
            <Heading marginTop={8}>Create new list:</Heading>
            <Center>
                <Button w='200px' onClick={() => setPage({ page: Page.Create })}>Create!</Button>
            </Center>
        </Box>
    );
}