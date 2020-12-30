# fulptronjs2
A slightly less stinky discord.js bot.

FulpTron is 100% free to use or copy, as long as you follow the AGPL-3.0 or later.

# COMMANDS
The prefix is `fulp` so an example command would be `fulpPlaying` with no spaces like that. Also the commands are not case sensitive, so you could do something like `FUlpPiNG` if you're some weirdo

parameters will be indicated in <> these brackets when required. If there's multiple they should be seperated by a single space (NOTE: the brackets do not need to be included in the message! Those are just to show when to seperate parameters)

- `fulpHelp` will drop a link to this page!
- `fulpPing` pings the host and returns the time in milliseconds
- `fulpShame` just shouts SHAAAME
- `fulpServer` sends some info about the server, like amount of memebers
- `fulpUptime` sends uptime in seconds lol
- `fulpRoles` lists the roles on the current server
- `fulpRemoveRole <role>` removes one of your roles. Again the role parameter is case sensitive
- `fulpASL <age> <sex> <location>` fulp is a fukken creep
- `fulpPlaying <anything lol>` sets FulpTron's discord playing status to whatever you input
- `fulpWatching <also anything lol>` sets FulpTron's watching status to what you input
- `fulpSay <anything>` make fulptron say funny things ahah epic
- `fulpRoll <max number>` pretty much the same shit as every other bot with a dice command lol. If you dont input any number it rolls a D20
- `fulpPic` gets a random Tom Fulp pic from my collection
- `fulpDogl` gets a random [Dogl](https://doggenhausen.newgrounds.com) pic from my collection (using `fulpPic dogl` also works)
- `fulpQuiz` Asks a multiple choice question (shoutout to BrenBot for the inspiration lololol)
- `fulpSHOOM` **SHOOOOOOOOOOOOOOOOOOOOOOOOOOOM**
- `fulpNGFollow <newgrounds user>` gives a shoutout to whatever Newgrounds user you input!
- `fulpStats <Newgrounds user>` sends you some info about whatever Newgrounds user you input, into a nifty little Rich Embed (fulpNGScrape, and fulpScrape also work).
- `fulpSource` drops a link to the sourcecode on Github
- `fulpEval` command to execute any piece of javascript, only the owner can use it.
- `fulpScreenshare` generates a link to screenshare in current voice channel.

### Moderation
- 'fulpblacklist <banned word>' blacklists the banned word
- 'fulpcurblacklist' displays current blacklist of words

### VARIOUS MUSIC COMMANDS!!
You need to be in a voice channel to use these.

- `fulpPlay <youtube link/playlist or search terms>` The bot allows you to search for music through discord! Or you can drop a link to an individual song or playlist
- `fulpSkip` Skips the current song and goes to the next one in the queue
- `fulpStop` Stops all the music and empties the queue
- `fulpVolume <volume from 0-100>` Changes the volume for all users. 100 usually sounds yucky and distorted if you have the defauilt discord user audio set at 100% as well. Usually 25-50 sounds alright
- `fulpnp` aka `fulpNowPlaying` as the command suggests, it shows what song is currently playing.
- `fulpQueue` Displays the list of songs to be played, or as some schmoes call it, a *queue*
- `fulpPause` Pauses the current song
- `fulpResume` If paused, resumes the music


# ADDING FULPPICS
FulpPics can be easily added by simply adding an image to the pics/fulp/ folder. If you have pic suggestions, you can submit a pull request to this repository yourself.

# LICENSING
All code and changes previous to the fork (2020-12-23) are MIT licensed, included with this repository in [LICENSE.old](LICENSE.old).

All future changes are AGPL-3.0, included with this repository in [LICENSE](LICENSE). If you did not receive a copy of the AGPL-3.0, you can [here](https://www.gnu.org/licenses/agpl-3.0.html).

## CREDS
Future Fixes and current maintainer of AGPL-3.0 fork: [Daemon+](https://github.com/DaemonPlus)

Original MIT code: [ninjamuffin99](https://github.com/ninjamuffin99)

Additional MIT code by: [BrandyBuizel](https://github.com/BrandyBuizel)

Music Bot code: https://github.com/DevYukine/Music-Bot/ (Original Repo appears to be missing)
