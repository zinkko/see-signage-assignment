import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { Page } from "../PageEnum";

interface HomePageProps {
    setPage: React.Dispatch<React.SetStateAction<Page>>;
}

export const Home = ({ setPage }: HomePageProps) => {
    return (
        <Box p='5%'>
            <Heading>Create new list:</Heading>
            <Center>
                <Button onClick={() => setPage(Page.Create)}>Create!</Button>
            </Center>
        </Box>
    );
}