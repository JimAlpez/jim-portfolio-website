import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderName: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderName,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black/50 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                {senderName} send a message
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Email: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
