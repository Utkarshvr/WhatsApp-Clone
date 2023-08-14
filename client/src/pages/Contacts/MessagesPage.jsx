import { Container } from "@mui/material";
import Messages from "../../components/Messages/Messages";
import ChatsHeader from "../../components/Header/ChatsHeader";

export default function MessagesPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 3, px: 0 }}>
      <ChatsHeader />
      <Messages />
    </Container>
  );
}
