import discord
from discord.ext.comands bot
from discord.ext import commands
import asyncio
import os

client = discord.client()
client = commands.bot(command_prefix = "/")
async def on_ready():
    print("Thankyou For Using Video Bot")
    await client.change_presence(game=discord.game(name="videos"))

@client.event
async def on_message(message):
    if message.content.startswith('/loja'):
        msg = 'Olá (0.author.mention) How are you today'.format(message)
        await client.send_message(message.channel, msg)

client.run(os.getenv('TOKEN'))
