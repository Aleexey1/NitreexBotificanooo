import discord
import asyncio

client = discord.client()

@client.event
async  def on_ready():
    print("BOT ONLINE - Olá Mundo!")
    print(client.user.name)
    print(client.user.id)
    print('--------BR-------')


@client.event
async def on_message(message):
    if message.content.lowet().startswith('/test'):
        await client.send_message(message.channel, "Olá Mundo, estou vivo!")


client.run('TOKEN')
