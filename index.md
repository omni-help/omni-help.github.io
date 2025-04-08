# Omni Setup
Walkthrough of how to setup your new Omni app on Apple TV. If you have not purchased the app, please purchase from the [Apple app store](https://apple.co/42eawJ9).

#### _**T.O.C**_
1. [How to Install](#how-to-install)
2. [How to Setup](#how-to-setup)
3. [Video Players](#video-players)
4. [Catalogs](#catalogs)

### **Getting Started**
Let's get started and walkthrough the first steps to take.<br>
TODO somewhere we should talk about the sidebar<br>
TODO somewhere we should talk about the settings tab and what's in it <br>

#### How to Install

Installing the app should be very easy. Once you make the purchase on the app store, you install it like any other app from the app store. However, without addons, Omni does not offer much functionality. To unleash the power of the app you need to configure addons that dictate how you want to display and organize media. Go onto the [next section](#how-to-setup) for a basic setup.

#### How to Setup

TODO basic user setup with public domain media?<br>
TODO link to advanced section at the end to go over (1) advanced setup and (2) advanced configuration?<br>

#### Video Players

This list is a ranking of the preferred player and its features
1. [Infuse](https://firecore.com/infuse)
    - Pro version supports: Dolby Vision, Atmos and HD quality audio
    - Non-pro supports: 4k HDR and HDR10+
    - Supports full Trakt scrobbling
    - External app
2. VidHub
    - VLC based player
    - Limited Trakt scrobbling
    - Limited HDR support 
    - External app
    - Free and Pro version
3. SenPlayer
    - KSPlayer based player
    - Supports DV and HDR10+
    - External app
    - Free and Pro version
4. [KSPlayer](https://github.com/kingslay/KSPlayer)
    - Built-in player for Omni
    - Supports 4k HDR
    - Great support for video files
5. AVPlayer
    - Built-in player for Omni
    - Very limited support for video files
    - Works well with addons that provide live tv

#### Catalogs

Provides a list of watchable content within Omni. There are 4 ways to display this content in the Omni App.
1. **Star** a catalog for it to appear in the hero section of the Omni app.
2. **Pin** a catalog for it to appear in the sidebar.
3. **Enable** the catalog to appear on the home screen (separate from the hero section).
4. **Create** a ["group"](#groups) that will add multiple catalogs to a shelf on the home screen.

TODO screenshots of each way catalogs appear<br>
TODO screenshots of how to do each state<br>
TODO list of addons that provide catalog information<br>

### **Advanced**

Advanced setup features for power users.<br>
TODO list out all the "advanced" features

<details markdown="1" id="groups">
<summary><b>Groups</b></summary>

There are 3 key things to understand with the "Groups" feature. (1) There are "Main Catalog Groups" and "Catalog Groups". Main Catalog Groups consist of Catalog Groups. Catalog Groups consist of catalogs. Catalogs are lists of content provided from addons. (2) When you create a main catalog group, it will add a "Shelf" to the Omni home screen. For every main catalog group, there will be a shelf with that title. (3) Ultimately, catalog groups are catalogs provided from addons so you must have addons that provide catalogs to use the feature.

When you add catalog groups to the main catalog group, you can control which order the catalog groups appear in. When you create main catalog groups, you can control the order of the main catalog group shelves on the home screen of Omni. Shelves are rows on the home screen. Main catalog groups are the shelves and catalog groups are the entries inside the shelf on the home screen.

When you create your first group, you want to start by creating a sub group. When you create a sub group, you can add as many catalogs as you want to the sub group - the entries in the catalog will be combined. Your sub group should consist of a name, optionally a group logo, and the catalog(s) for that sub group. Once you have a sub group configured, you can create a main group that makes use of the sub group. When you create the main group, you can select as many sub groups as you have defined. You will want to give your main group a name, and define how the sub group logo(s) should appear - block, poster, landscape. 

Here is an example of a shelf that consist of streaming services. Let's create our "Netflix" catalog group. We can use an addon like Streaming Catalogs, which will provide a Netflix catalog for both movies and tv shows - the addon will have 2 catalogs available for the Netflix content. Once you have added the addon, we can go to the Groups tab in the settings. Go down to "Catalog Groups" section and in the input field, type the name "Netflix", click the plus button next to the input field. Now we have this basic catalog group added, let's give it a logo. You can find a custom logo or just simply type Netflix and search for a logo to add. Once you have your logo move onto the next field and select the 2 new Netflix catalogs that came from the Streaming Catalogs addon. Once you have your catalogs selected, hit the Create button. Now we have our Netflix catalog group - to add it to the home screen we need to go up to the "Main Catalog Groups" section. In that input field type something like Streaming Services and hit the plus button. For now, let's keep the default "Poster Type" and "Poster Size". In the "Select Subgroups" section, click the Netflix group we just created. After hit the create button again. Now you can go back to the home screen and you should see a shelf titled Streaming Services with 1 entry, Netflix. You can now click the Netflix group and you will be presented will all the entries in that group catalog. Feel free to repeat for all the streaming services you configured in the Streaming Catalogs addon.

</details>

<details markdown="1">
<summary><b>Regex</b></summary>

TODO describe how this is useful<br>
TODO examples of regex filters<br>
TODO screenshots

</details>

### **Communities**

Communities you can join to discuss the app.

#### **Discord**

Need assistance? Join the [Omni Discord](https://discord.gg/YeWQuQSg8k) for discussion and conversation. Use bot command tags to get help. Go to #bot-cmds and type the command, e.g. `!t addons` for the bot to give a list of recommended addons.

<details markdown="1">
<summary><i>Discord Bot Command Tags</i></summary>

- addons (`!t addons`)
  - suggested addons to install
- infuse (`!t infuse`)
  - features of the Infuse video player
- rpdb (`!t rpdb`)
  - free RPDB API key to use with addons that can take this API key
- support (`!t support`)
  - how to submit bugs and suggestions
- xp (`!t xp`)
</details>

#### **Reddit**

Ask questions on Reddit. Share your setups on Reddit. Discuss anything about Omni -- Content Hub on Reddit here: https://www.reddit.com/r/OmniContentHub/