"use server"

import { ChatAnthropic } from "@langchain/anthropic";
import { mapStoredMessagesToChatMessages, mapChatMessagesToStoredMessages, StoredMessage } from "@langchain/core/messages";
import { createReactAgent } from "@langchain/langgraph/prebuilt";

export async function message(messages: StoredMessage[]) {
    const deserialized = mapStoredMessagesToChatMessages(messages);

    const agent = createReactAgent(
        {
            llm: new ChatAnthropic({
                model: "claude-sonnet-4-20250514",
                apiKey: process.env.ANTHROPIC_API_KEY
            }),
            tools: []
        }
    )

    const response = await agent.invoke({
        messages: deserialized
    })

    // Serialize messages so they can be passed back to client
    return mapChatMessagesToStoredMessages(response.messages)
}