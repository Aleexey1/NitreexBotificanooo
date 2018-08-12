import discord
from discord.ext.comands bot
from discord.ext import command
import asyncio
import time

client = discord.client()

@client.event
async def on_ready ():
    print('BOT ONLINE - Olá Mundo!')
    print(client.user.name)
    print(client.user.id)
    print('--------PR----------')

// THIS  MUST  BE  THIS  WAY
client.run(os.getenv('TOKEN'))
