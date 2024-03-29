import { ChatInputApplicationCommandData, ChatInputCommandInteraction } from "discord.js";
import Bot from "../classes/Bot";

export interface Command {
	data: ChatInputApplicationCommandData;
	run: ExecuteCommand;
	staffPerms?: boolean;
	discordPerms?: boolean;
	multiPerms?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExecuteCommand = (bot: Bot, interaction: ChatInputCommandInteraction, args: any[]) => Promise<void>;
