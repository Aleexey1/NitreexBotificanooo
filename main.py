import discord
from discord.ext.comands bot
from discord.ext import commands
import asyncio
import time
import os

client = discord.clent ()
client = commands.bot(command_prefix = "/")
@client.event
async  def on_ready():
    print("Obrigado por assistir video do bot.")
    await client.change_presence(game=discord.game(name"video"))
    
@client.event
async def on_message(message):
    if message.content.startaqith('/ola'):
        msg = 'Olá (0.authoy.mention) How are you today'.format(message)
        await client.send_message(message.channel,msg)
        
client.run(os.getenv('TOKEN'))
