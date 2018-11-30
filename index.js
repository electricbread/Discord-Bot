const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed, Attachment } = require('discord.js');
prefix = ("!")

// Bread Bot!
// Coded by Electric Bread!
// Will prob be a open source soon :)
// Sub to my youtube channel https://www.youtube.com/channel/UCFuITqL_LUODqQgTzcHMfFQ?view_as=subscriber

// Prints that the bot is ready in cmd
client.on('ready', () => {
  console.log(`Your Logged in as ${client.user.tag}!`);
});

// The bot responds to these messages
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.on('message', msg => {
  if (msg.content === 'Gay') {
    msg.reply('NO U');
  }
});

// Links

client.on('message', msg => {
  if (msg.content === '!youtube') {
    msg.reply('https://www.youtube.com/channel/UCFuITqL_LUODqQgTzcHMfFQ?view_as=subscriber');
  }
})

client.on('message', msg => {
  if (msg.content === '!website') {
    msg.reply('https://electricbread.000webhostapp.com/');
  }
})

// Avatar command

client.on('message', message => {
    if (message.content === 'What is my avatar') {
      message.reply(message.author.avatarURL);
    }
  });

// Embled messages


client.on('message', message => {
  if (message.content === '!Bread') {
    const embed = new RichEmbed()
      .setTitle('Bread')
      .setColor(0xff0000)
      .setDescription('This will be changed but i hope you enjoy my bot');
    message.channel.send(embed);
  }
});

  // help command

  client.on('message', message => {
    if (message.content === '!help') {
      const embed = new RichEmbed()
        .setTitle('Help!')
        .setColor(0xff0000)
        .setDescription('Commands: !ban @user#1111 !kick @user#1111, What is my avatar (shows your avatar). **Still a W.I.P so i will be adding more and more as i go!** ');
      message.channel.send(embed);
    }
  });

  client.on('message', message => {
    if (message.content === '!info') {
      const embed = new RichEmbed()
        .setTitle('bot information')
        .setColor(0xff00e1)
        .setDescription('This bot was made in october 2018 by Electric Bread. I abandoned this bot after a week of coding it, But im going to code it some more :)');
      message.channel.send(embed);
    }
  });

// Admin stuff

  client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('!kick')) {
    
      const user = message.mentions.users.first();

      if (user) {
        const member = message.guild.member(user);
        if (member) {

          member.kick('Optional reason that will display in the audit logs').then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          }).catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
    }
  });
  
  client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('!ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          }).catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {ed
        message.reply('You didn\'t mention the user to ban!');
      }
    }
  });

  // Welcome message

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome-channel');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });

  // Attachments

  client.on('message', message => {
    if (message.content === '!rip') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
});



// voice stuff (Still a W.I.P)

client.on('message', message => {
  if (!message.guild) return;

  if (message.content === '!join') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
  }
  }
});

client.login('NTEyNzMxMzgxMTg5NTc0NjU3.DtF_VQ.nNuLQH0CCBpYH6rXhzMVrJNdLqs');