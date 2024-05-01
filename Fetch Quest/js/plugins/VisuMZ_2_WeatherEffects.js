//=============================================================================
// VisuStella MZ - Weather Effects
// VisuMZ_2_WeatherEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_WeatherEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeatherEffects = VisuMZ.WeatherEffects || {};
VisuMZ.WeatherEffects.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.04] [WeatherEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weather_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ didn't come with too many weather effects. Only three: rain,
 * storm, and snow. This plugin will ramp that number up a considerable amount
 * and revise the way the original three weathers look, too. These new weather
 * patterns will help breathe life into your game for various scenarios and/or
 * cutscenes. The added control and customization options mean you can alter
 * their behaviors to your liking.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assign multiple weathers up to a max of 20. For maps, there are 10 layers
 *   on top of the map and another 10 layers behind the tilemap (but above the
 *   parallax layer).
 * * Set certain maps to not show any weather through notetags. This allows you
 *   to avoid having to turn on and off your weather settings.
 * * The basic RPG Maker MZ weather patterns (Rain, Storm, and Snow) have been
 *   recreated to look better than before.
 * * Plugin Commands allow for game devs to place the newly added weather types
 *   with intricate levels of customization.
 * * Customization options available for weather patterns include spawn numbers
 *   control, spawn location control, opacity easing, trajectory properties,
 *   coloring options, overlay dimmer control, and more!
 * * There are 10 weather patterns for each of the 8-themed elements, alongside
 *   lots of preset icon-related weather patterns for over 80+ weather pattern
 *   types to choose from.
 * * More basic and easier to use directional flying icon weather patterns of
 *   varying speeds can be used to ease yourself into how weather patterns can
 *   be customized.
 * * Newly added weather patterns come with their own generated sprites.
 *   There's no need to use custom images or such unless you want to. Custom
 *   images can come in the form of icons or pictures. Some generated sprites
 *   include many variances (such as Snowflakes).
 * * Weather layers can now be placed on top of the map or below the map, aka
 *   between the tilemap and parallax layer.
 * * Plugin Commands allow the player to clear multiple weather layers, adjust
 *   the power of multiple weather layers, memorize, and even replay multiple
 *   weather layer patterns in a go.
 * * Up to 20 layers can be used for weather, all of each having different
 *   settings. 10 layers for above the map. 10 layers for below the map. This
 *   can be utilized to create more detailed weather effects than ever before.
 * * Common Events can be linked up with weather patterns, launching parallel
 *   whenever a weather particular respawns, allowing for special effects like
 *   screen flashes and/or playing sounds. This allows devs to match up certain
 *   weather patterns like thunder sounds and flashes with thunder bolts.
 * * A new option "Weather Density" has been added. The amount of weather
 *   sprites on screen can be tuned downward in order to reduce frame drops for
 *   players with weaker computers.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_0_CoreEngine
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them. Other things listed here are also worthy of
 * mentioning.
 *
 * ---
 *
 * Weather System Overwrite
 * 
 * As one would expect out of a plugin focused around changing weather effects,
 * the whole RPG Maker MZ weather system has been revamped. This means that a
 * lot of the default functions related to weather have been overwritten in
 * order to fulfill the demands of the plugin. Such demands include having more
 * control over the individual weather particles to the way the sprites are
 * handled and how the data persists for their behaviors.
 *
 * ---
 * 
 * Weather Layers
 * 
 * There are now multiple weather layers, allowing you to have multiple weather
 * patterns on simultaneously. Amongst the layers, there are upper and lower
 * layer types, too.
 * 
 * Upper layers are what RPG Maker MZ has, they exist above the tilemap. The
 * lower layers are new and exist below the tilemap but above the parallax
 * layer.
 * 
 * As such, weather effects below the tilemap won't be visible unless you are
 * using transparent tiles. This can be applied to windows or cliff tiles (for
 * some of these, you'll have to modify the tiles yourself). This effect can be
 * used to give a sense of depth, such as transparent windows observing a large
 * blizzard happening outside.
 * 
 * ---
 * 
 * Generated Weather Sprite Graphics
 * 
 * The default generated weather sprite graphics have been overwritten in favor
 * of better looking ones that we've made. Due to a technique that we've
 * created for this plugin, the generated weather sprites will also appear more
 * plentiful while keeping raw sprite counts low.
 * 
 * For those wondering, the "Rain", "Storm", and "Snow" weather types are the
 * default RPG Maker MZ weathers that we have changed. They can be accessed
 * through the usual event commands, or they can be accessed through Plugin
 * Commands.
 * 
 * Accessing these weather patterns through Plugin Commands gives you, the game
 * dev, more control over how they behave compared to the minimal control that
 * the default RPG Maker MZ event commands have.
 * 
 * ---
 * 
 * Custom Icons and Custom Pictures
 * 
 * If you plan on using custom icons or custom pictures, you might find it odd
 * that there is less volume of the weather sprite on the screen compared to
 * the generated graphics. This is due to a custering replication technique we
 * use for the sprite textures that make them appear more plentiful. To remedy
 * this, adjust the weight values for the icon variations and picture
 * variations to be higher than that of the generated sprites.
 * 
 * When designing custom icons and/or custom pictures for weather sprite
 * purposes, design them facing right at "0 degrees". This way, the angle will
 * align better and you can avoid using the "Visual Angle Offset" if you are
 * unfamiliar or troubled by offsets.
 * 
 * ---
 * 
 * RPG Maker MZ Tints
 * 
 * Weather patterns placed on the below tileset layer will be covered by RPG
 * Maker MZ's default tint layer, thus, affected by it. However, there's
 * nothing we can do about that one unlike the darkness overlay provided by the
 * Lighting Effects plugin where there's a workaround. Either you use the
 * Lighting Effects darkness overlay or you play work around tint usage in
 * regards to below tileset layer.
 * 
 * Weather patterns placed above the tileset layer will NOT be affected by RPG
 * Maker MZ's default tint layer nor will it be affected by the darkness
 * overlay from the Lighting Effects plugin. This is because not all effects
 * should be affected by it. If you do want to apply a tint to you, you can do
 * so via the custom settings and apply the tint manually. It's not applied
 * from the getgo because it's more efficient to make the upper weather sprites
 * unaffected first and applied later than the opposite.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * Battle Core
 *
 * Those with the Battle Core can have weather effects show up in battle, too.
 * This does not happen without it. This is because the Battle Core has
 * provided the code infrastructure to support battle weather and this plugin
 * ties in with that code infrastructure better.
 *
 * ---
 *
 * ============================================================================
 * Keeping FPS Stable
 * ============================================================================
 * 
 * As this is a plugin that adds special effects to your game, you do have to
 * be mindful about how you use the various Weather Effects features or else
 * your game will face FPS drops.
 *
 * ---
 * 
 * Here are a few things to keep in mind:
 * 
 * 1. Hues and tones are expensive to process graphically. Using a lot of hue
 *    and/or tone variations on lots of weather sprites at the same time can
 *    eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *    tone variations, keep the sprite count low by either using lower power
 *    settings or less sprites on the screen.
 * 
 * 2. Yes, this plugin provides 20 layers (10 for upper and 10 for lower), but
 *    that doesn't mean you should use all 20 at the same time at max power. Be
 *    moderate in how many weather layers you use at a time. Just because there
 *    is an option for the player to adjust the weather density doesn't mean it
 *    should be okay to go wild with weather layers.
 * 
 * 3. The majority of the default settings should be safe to use on their own,
 *    but that also suggests that they're used by themselves. You can usually
 *    combine three or four default weather patterns together across different
 *    layers, but do exercise restraint when customizing the settings from
 *    their default values and using more layers at a time.
 * 
 * 4. Avoid having too many sprites on the screen at once. Each weather sprite
 *    adds to the number of processes the game has to keep track of and update
 *    each individual frame. Especially weather patterns with sprites that
 *    alter light or affect it. While the plugin is optimized to allow handling
 *    of a decently large number of sprites within the hundreds, do not go
 *    overboard and use them with modesty.
 * 
 * 5. If you choose to not pre-render generated sprites at the start of the
 *    game, some weather patterns may take a bit of processing power to render
 *    generated sprites on the spot especially if there are a lot of sprites to
 *    work with. The pre-render option is the most ideal to use if you plan on
 *    using generated sprites. If you intend to use mostly icons or custom
 *    pictures, pre-rendering at the start of the game can be turned off.
 * 
 * ---
 * 
 * We are NOT responsible for irresponsible usage of this plugin that pushes
 * graphical processing to absolute limitations.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_LightingEffects
 * 
 * Weather patterns placed on the lower layer will be affected by the darkness
 * overlay that the VisuStella MZ Lighting Effects plugin utilizes. This means
 * that even the supposively "brighter" weather patterns will be dimmed out
 * (such as the Flame Wall or Aurora to name a few). To deal with this, use the
 * Lighting Effects plugin's "Auto-Light Regions" and mark the parallax visible
 * tiles with those said regions.
 * 
 * Weather patterns placed on the upper layer will not be affected by the
 * darkness overlay in order to allow the weather have better contrast in
 * addition to following RPG Maker MZ's decision to not have weather affected
 * by tints either. If you want to tint the upper layer weather, you can add
 * the tint manually through the weather pattern's custom Image Settings and
 * apply a hue.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Convenience-Related Notetags ===
 * 
 * ---
 *
 * <No Weather>
 *
 * - Used for: Map Notetags
 * - Sets the map to not show any weather effects regardless of what's actually
 *   being set currently. Weather effects will resume once the player leaves
 *   the map and enters one that does not forbid weather effects.
 * - This is useful for indoor maps when you don't want to turn weather effects
 *   on and off constantly.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Basic Plugin Commands ===
 * 
 * ---
 * 
 * BASIC: Adjust Weather Power
 * - Adjusts the power of the target weather layer(s).
 * 
 *   Layer(s):
 *   - Which weather layer(s) do you wish to adjust?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Adjust weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 *   Power:
 *   - Adjust power by how much?
 *   - Caps at 1 and 9.
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How many frames to fully adjust the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 * 
 * ---
 *
 * BASIC: Clear Weather
 * - Clears out target weather layer(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to clear?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Clear weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 *
 *   Duration:
 *   - How many frames to fully clear the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 *
 * ---
 * 
 * BASIC: Memorize Weather
 * - Memorizes the settings for target weather pattern(s) so that you can
 *   reuse it later.
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to save?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Save weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 * ---
 * 
 * BASIC: Pre-Render Generated Weather
 * - Selects target weather type to pre-render the generated graphics for it.
 * - This is to help reduce future lag spikes on mobile devices.
 * 
 *   Weather Type:
 *   - Which weather type do you wish to pre-render?
 *   - This is to help reduce lag spikes when calling weathers.
 * 
 * ---
 * 
 * BASIC: Replay Memorized Weather
 * - Replays target memorized weather pattern(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to replay?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Replay weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 *   Duration:
 *   - How many frames to fully replay the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?:
 *   - Wait for weather to completely replay before moving on with the next
 *     event command?
 * 
 * ---
 * 
 * === Weather Pattern-Related Plugin Commands ===
 * 
 * ---
 *
 * Weather Pattern
 * - All weather patterns provided by this plugin use the following format.
 * Yes, all of them. This is to ensure that there is familiarity when modifying
 * one weather pattern and then moving to another and reducing the amount of
 * time needed to fiddle around with each of them. As such, the parameters will
 * affect each weather pattern the same exact way.
 * 
 *   ---
 *
 *   Main Settings:
 *
 *     Power:
 *     - What weather power do you wish to apply?
 *     - Use values between 1 and 9.
 *     - You may use JavaScript code.
 *
 *     Duration:
 *     - How many frames to fully change the weather?
 *     - You may use JavaScript code.
 *
 *     Wait For Completion?:
 *     - Wait for weather to completely change before moving on with the next
 *       event command?
 * 
 *   ---
 * 
 *   Layer Settings
 *
 *     Layer(s):
 *     - Which weather layer(s) do you wish to apply changes?
 *     - Use values between 1 and 10.
 *     - You may use JavaScript code.
 *
 *     Upper/Lower?:
 *     - Play the weather pattern above the tileset or below it?
 *     - You can select "both" to affect both.
 * 
 *   ---
 * 
 *   Customization
 *
 *     Custom Settings:
 *     - Adjust the custom settings involving this weather.
 *     - More information below:
 *
 * ---
 *
 * Custom Settings
 * - Each weather pattern's "Custom Settings" will have each of the following
 * options available to it.
 *
 *   Sprite Settings:
 *   - The general settings involving the weather sprites.
 *
 *   Dimmer Overlay:
 *   - Settings involving the dimmer overlay cast over the screen.
 *
 *   Image Settings:
 *   - Settings for the images used for the weather sprites.
 *   - Weathers with multiple images will be picked at random.
 *
 *   Special Effects:
 *   - Specialized effects that are turned on for specific weather types can
 *     be found here.
 *
 *   Trajectory Settings:
 *   - Settings used to determine the trajectory a weather sprite will take
 *     and how they behave on it.
 *
 * ---
 *
 * Sprite Settings
 * - The general settings involving the weather sprites.
 *
 *   Lifespan:
 *   - Lifespan of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each lifespan value?
 *
 *     Spawn Location X:
 *     - What x location should the weather sprites appear?
 *
 *       Offset X:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: left. Positive: right.
 *
 *     Spawn Location Y:
 *     - What y location should the weather sprites appear?
 *
 *       Offset Y:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: up. Positive: down.
 *
 *     Map Bound?:
 *     - Do the weather sprites move with the map scrolling?
 *
 *   Starting Opacity:
 *   - Starting opacity of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each starting opacity value?
 *
 *     Easing Type:
 *     - Select which easing type you wish to apply for opacity.
 *
 *     Fade In Time:
 *     - How many frames does it take for the sprite to fade in?
 *     - Use 0 to start immediately at full opacity.
 *
 *   Scale:
 *   - What is the scale of the sprite?
 *   - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *     Variance:
 *     - What variance is there to the main scale value?
 *
 *     Ratio X:
 *     Ratio Y:
 *     - What is the ratio of this sprite's scale X/Y?
 *     - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *   Total Sprite Minimum:
 *   - What is the minimum number of sprites on the screen?
 *
 *     Total Per Power:
 *     - Increase the total number of sprites per power by this.
 *     - Lowest power is 1.
 *     - Highest power is 9.
 *
 * ---
 *
 * Dimmer Overlay
 * - Settings involving the dimmer overlay cast over the screen.
 *
 *   Color:
 *   - Dimmer color. This uses #rrggbb format.
 *   - Check your color here: https://htmlcolorcodes.com/
 *
 *   Opacity Minimum:
 *   - What is the minimum opacity value for the dimmer?
 *
 *     Opacity Per Power:
 *     - What is the total opacity value per power for the dimmer?
 *
 * ---
 *
 * Image Settings
 * - Settings for the images used for the weather sprites.
 * - Weathers with multiple images will be picked at random.
 *
 *   Generated Image?:
 *   - Include the plugin-generated image for this weather type?
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Icon(s):
 *   - Which icons do you wish to include for the images to appear as?
 *   - When using icons, icons are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Picture(s):
 *   - Which pictures do you wish to include for the images to appear as?
 *   - When using pictures, pictures are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the weather sprite?
 *
 *   Hue Variations:
 *   - What hue variations will be randomly selected from?
 *   - Use a value between 0 and 360.
 *
 *   Tone Variations:
 *   - What tone variations will be randomly selected from?
 *   - Format for each: [Red, Green, Blue, Gray]
 * 
 *   *NOTE*
 * 
 *   Hues and tones are expensive to process graphically. Using a lot of hue
 *   and/or tone variations on lots of weather sprites at the same time can
 *   eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *   tone variations, keep the sprite count low by either using lower power
 *   settings or less sprites on the screen.
 *
 * ---
 *
 * Special Effects
 * - Specialized effects that are turned on for specific weather types can
 * be found here.
 *
 *   Allow Visible Player?:
 *   - Make the player more visible by reducing the opacity of nearby weather
 *     sprites?
 *
 *   Flat Fluttering?:
 *   - Is the object flat and flutters in the wind?
 *   - Or does the object have volume and doesn't?
 *
 *   Longevity:
 *   - Weather effects with longevity don't expire until the weather pattern
 *     type is changed.
 *
 *   Hue Sway Range:
 *   - How much should the hue sway back and forth?
 *   - JavaScript code can be used.
 *
 *     Hue Sway Speed:
 *     - What speed does the angle sway?
 *     - Lower is slower.
 *     - Higher is faster.
 *     - JavaScript code can be used.
 *
 *   Respawn Common Event:
 *   - Play a specific Common Event when this event respawns?
 *   - The Common Event will run as a Once Parallel.
 *
 *   Respawn Delay Minimum:
 *   - Is there a delay to the respawn?
 *   - This is how many frames the sprite must wait before respawning.
 *
 *     RNG Delay Per Power:
 *     - How many randomized frames of delay per power must be waited?
 *
 *   Scale In:
 *   - What scale ratio should the sprite spawn in at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale in effect take?
 *     - Scale in will always head towards 1.0.
 *
 *   Scale Out:
 *   - What scale ratio should the sprite despawn out at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale out effect take?
 *     - Scale in will usually head from 1.0.
 *
 *   Custom Finish:
 *
 *     Fireworks Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fireworks explosion?
 *
 *     Sparkle Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fabulous spinning sparkle effect?
 *
 * ---
 *
 * Trajectory Settings
 * - Settings used to determine the trajectory a weather sprite will take
 *   and how they behave on it.
 *
 *   Trajectory Type:
 *   - What trajectory type is used?
 *     - Both Map and Battle
 *       - Straight
 *       - Frozen
 *     - Map Only
 *       - Player-Locked
 *       - Follower-Locked
 *       - Event-Locked
 *     - Battle Only
 *       - Actor-Locked
 *       - Enemy-Locked
 *       - User-Locked
 *       - Target-Locked
 * 
 *     Locked ID/Index:
 *     - For locked trajectories only. Input the follower index.
 *     - Or ID of event, actor, enemy.
 *
 *     Offset X (Locked):
 *     - For locked trajectories only.
 *     - Negative: left. Positive: right.
 *
 *     Offset Y (Locked):
 *     - For locked trajectories only.
 *     - Negative: up. Positive: down.
 *
 *   Speed:
 *   - What speed is the sprite moving at? Lower is slower.
 *   - Higher is faster.
 *   - JavaScript code can be used.
 *
 *     Speed Variance:
 *     - What variance is there to the speed value?
 *
 *   Angle:
 *   - What angle (0 to 360) is the sprite moving toward?
 *   - JavaScript code can be used.
 *
 *     Align Angle?:
 *     - Should the sprite rotate itself according to the angle it is moving at
 *       across the screen?
 *
 *     Angle Variance:
 *     - What variance is there to the base angle?
 *
 *     Visual Angle Offset:
 *     - Offset the visual by this many degrees. Used for images that aren't
 *       made aligned with 0 degrees facing left.
 *
 *     Angle Arc:
 *     - How should the trajectory arc when the sprite moves?
 *     - JavaScript code can be used.
 *
 *     Angle Sway Range:
 *     - How much should the angle sway as the sprite moves?
 *     - JavaScript code can be used.
 *
 *       Angle Sway Speed:
 *       - What speed does the angle sway? Lower is slower.
 *       - Higher is faster.
 *       - JavaScript code can be used.
 *
 *   Spin Speed:
 *   - What speed do the sprites spin?
 *   - JavaScript code can be used.
 *   - Some generated weather pattern sprites use the clustering replication
 *     technique. This allows the weather pattern to appear more full and have
 *     higher volume while keeping sprite counts low. As such, not all weather
 *     patterns will spin the way you expect. This is not a bug.
 *
 *     Spin Speed Variance:
 *     - What variance is there to the spin speed?
 *
 *     Reverse Spin?:
 *     - Can the spin go in the reverse direction?
 *
 *   X Sway Range:
 *   Y Sway Range:
 *   - How much should the X/Y value sway as the sprite moves?
 *   - JavaScript code can be used.
 *
 *     Sway Speed:
 *     - What speed does the sway move? Lower is slower.
 *     - Higher is faster. JavaScript code can be used.
 *
 * ---
 * 
 * === Weather Pattern-Type Plugin Commands ===
 * 
 * Each of the weather patterns below all use the same plugin command structure
 * as listed in the section above. They are separated in various themes to help
 * better organize them and quickly find them. Each weather pattern has their
 * own generated image type that they use.
 * 
 * ---
 * 
 * Fire-Themed
 * 
 *   FIRE: Embers:
 *   - Oh, Ember, you will remember. So warm and tender.
 *   - Embers rise off from the ground upward.
 *
 *   FIRE: Fireflies:
 *   - Take my love, take my land, take me where I cannot stand.
 *   - Fireflies will spawn and float around.
 *
 *   FIRE: Firestorm:
 *   - This is fine.
 *   - Rain fiery bolts of flames from the heavens!
 *
 *   FIRE: Fireworks:
 *   - You just gotta ignite the light and let it shine!
 *   - A shot of fire flies up and blows up into a flower.
 *
 *   FIRE: Flame Haze:
 *   - Flaming Hair Blazing Eyes!
 *   - A fiery smoke clouds the screen!
 *
 *   FIRE: Flame Wall:
 *   - Is it me, or is it hot in here? Oh, it's me.
 *   - A wall of flames appears on the bottom part of the screen.
 *
 *   FIRE: Heat Clouds:
 *   - Fiery conglomerations of clouds.
 *   - Heat clouds scorch the top of the screen.
 *
 *   FIRE: Meteor Shower:
 *   - Clustering wishes will become a new shining star!
 *   - A nonstop swarm of meteors fall in the night sky.
 *
 *   FIRE: Shooting Stars:
 *   - Make a wish! A wholesome one, please.
 *   - Shooting stars appear over the horizon of the night sky.
 *
 *   FIRE: Sunlight Beams:
 *   - Aka crepuscular rays. Makes any day brighter!
 *   - Sun beams shine down from the heavens.
 * 
 * ---
 *
 * Ice-Themed
 *
 *   ICE: Arctic Gleam:
 *   - Oh, erie bluish glow of the arctic.
 *   - Illuminate the frozen land below!
 *
 *   ICE: Aurora Borealis:
 *   - Also known as the Northern Lights.
 *   - Auroras dance across the top of the screen.
 *
 *   ICE: Blizzard:
 *   - Let it go, let it go! Can't hold it back anymore!
 *   - Concentrated snowfall covers the screen.
 *
 *   ICE: Diamond Dust:
 *   - Diamond dust falls from the skies.
 *   - Slightly illuminated ice particles descend from above.
 *
 *   ICE: Glistening Ice:
 *   - Walkin' on thin ice!
 *   - Ice particles sparkle from all around.
 *
 *   ICE: Ice Fog:
 *   - Yo! VIP! Let's Kick it!
 *   - Frozen fog covers the whole screen.
 *
 *   ICE: Sleet:
 *   - Slightly heavier and more solid than snow!
 *   - Frozen ice crystals snow down from above.
 *
 *   ICE: Snow:
 *   - Brace yourselves! Winter is coming!
 *   - Snow falls from the sky and flutters downward.
 *
 *   ICE: Snow Clouds:
 *   - Icy gatherings of clouds ready to deliver snow.
 *   - Snow clouds blanket the top of the screen.
 *
 *   ICE: Snowflakes:
 *   - Snowflake! Snowflake! Little snowflake!
 *   - Generated snowflakes will have random patterns.
 *
 * ---
 *
 * Thunder-Themed
 *
 *   THUNDER: Discharge:
 *   - Danger! Danger! High voltage!
 *   - Electricity discharges from the sides of the screen.
 *
 *   THUNDER: Plasma Bolt:
 *   - A horizontal bolt of electricity! From left to right!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Plasma Surge:
 *   - The windows are becoming stained with a nostalgic color.
 *   - Nonstop plasma bolts flood the screen.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Purple Haze:
 *   - Purple haze all around. Don't know if I'm coming up or down.
 *   - A purple fog blankets the whole screen.
 *
 *   THUNDER: Spider Lightning:
 *   - Nothing to do with spiders.
 *   - Bolts expand outwards from a target.
 *
 *   THUNDER: Static Charge:
 *   - Snap! Crackle! Pop!
 *   - Highly charged target emits static.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Bolt:
 *   - More than just an expensive charging cable. Giant bolt flashes
 *     from above!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Clouds:
 *   - These thunderclouds, oh no, no!
 *   - Thunder-ready clouds fly atop the top of the screen.
 *
 *   THUNDER: Thunder Surge:
 *   - When you walk away, you don't hear me say.
 *   - Nonstop thunder bolts scour the skies.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Ultraviolet Beams:
 *   - Get out some of that SPF 100+!
 *   - (This is NOT real UV Light!)
 *   - Ultraviolet lights are coming from the sky!
 *
 * ---
 *
 * Water-Themed
 *
 *   WATER: Bubbles Rising:
 *   - Let's not burst your bubble!
 *   - Bubbles will rise up towards the top of the screen.
 *
 *   WATER: Cloud Burst:
 *   - A sudden massive deluge of rain!
 *   - A near vertical storm of massive volume.
 *
 *   WATER: Dripping Water:
 *   - Leaky ceilings? It's time to call a plumber.
 *   - Water droplets drip from above.
 *
 *   WATER: Mist:
 *   - Not to be confused with the video game. That has a Y.
 *   - A suspended mist covers the screen.
 *
 *   WATER: Rain:
 *   - Rain, rain, go away! Come again some other day!
 *   - Raindrops will fall from the sky all over the screen.
 *
 *   WATER: Rain Clouds:
 *   - It's raining men! Hallelujah! It's raining men, amen!
 *   - Rain-filled clouds hover menacingly at the top of the screen.
 *
 *   WATER: Rainbow Arch:
 *   - Somewhere over the rainbow~
 *   - A large rainbow arch appears in the corner of the screen.
 *
 *   WATER: Rising Steam:
 *   - Take more photos to train your selfie steam!
 *   - Steam vapor clouds rise from below.
 *
 *   WATER: Soap Bubbles:
 *   - I will try to blow a bubble that will last all day.
 *   - Soap bubbles float and hover around.
 *
 *   WATER: Storm:
 *   - A MIGHTY storm!
 *   - Large and long raindrops fall from the sky creating a storm.
 *
 * ---
 *
 * Earth-Themed
 *
 *   EARTH: Acid Rain:
 *   - Real acid rain doesn't glow in the dark.
 *   - But this one sure does.
 *
 *   EARTH: Crumbling Cave:
 *   - Do NOT grab any suspiciously placed rubies.
 *   - Bits and pieces of the cave ceiling crumble.
 *
 *   EARTH: Dust Clouds:
 *   - Darkened dust covers the surroundings!
 *   - Dust clouds will fill up the screen.
 *
 *   EARTH: Dust Storm:
 *   - Happens in places other than Nashville.
 *   - Darkened dust launches across the screen.
 *
 *   EARTH: House Dust:
 *   - Floating white dust particles with nowhere to go.
 *   - So they'll just make themselves at home.
 *
 *   EARTH: Pollution Clouds:
 *   - Absolutely disgusting colored pollution clouds.
 *   - Pollution clouds cover the top of the screen.
 *
 *   EARTH: Radioactive Beams:
 *   - Alert! Alert! Alert! Nuclear green lights!
 *   - Nuclear green lights irradiate from the clouds.
 *
 *   EARTH: Sand Clouds:
 *   - Straight from the Pyramids of Giza!
 *   - Sand clouds will surround everything!
 *
 *   EARTH: Sandstorm:
 *   - Darude! Sandstorm!
 *   - Sand blasts across the screen from one end to the other.
 *
 *   EARTH: Toxic Gas:
 *   - More toxic than the comments section of social media!
 *   - A foggy green gas blankets the screen.
 *
 * ---
 *
 * Wind-Themed
 *
 *   WIND: Autumn Leaves:
 *   - Red, yellow, orange, brown leaves are falling all around.
 *   - See them dance in the cool, fall air. 
 *
 *   WIND: Balloons:
 *   - You and I in a little toy shop, buy a bag balloons with the money
 *     we've got.
 *
 *   WIND: Cherry Blossoms:
 *   - The emblem of love and good luck.
 *   - Cherry blossom petals flutter down from above.
 *
 *   WIND: Dandelion Seeds:
 *   - Floating on the air. Never seem to care.
 *   - Dandelion seeds will flow up into the air.
 *
 *   WIND: Grassy Gust:
 *   - A gust of wind!
 *   - From right to left, grass flies with it.
 *   - Best when paired with a Tempest.
 *
 *   WIND: Green Leaves:
 *   - Leaf me alone!
 *   - Green leaves fall above, spinning round and round.
 *
 *   WIND: Pollen:
 *   - Bless you! Gesundheit! Salute!
 *   - A cloud of pollen grains travel about the screen.
 *
 *   WIND: Tempest:
 *   - Brought to you by a friendly slime.
 *   - Powerful gusts of wind blast across the screen.
 *
 *   WIND: White Clouds:
 *   - Not the main character from Final Fantasy VII.
 *   - Fluffy white clouds slowly drift across the upper screen.
 *
 *   WIND: Xtreme Speed:
 *   - Gotta go fast! Speedlines whip past!
 *   - Works best below the tileset layer.
 *
 * ---
 *
 * Light-Themed
 *
 *   LIGHT: Confetti:
 *   - Party like it's 1999!
 *   - Confetti of differing shapes drop from the sky.
 *
 *   LIGHT: Lens Flare:
 *   - Relive the amateur days from Photoshop!
 *   - A lens flare descends from the upper corner of the sky!
 *
 *   LIGHT: Light Burst:
 *   - Sometimes also known as Sun Bursts.
 *   - CAUTION: Bright lights!
 *   - Bright white light bursts out from a target.
 *
 *   LIGHT: Light Orbs:
 *   - Show me the light!
 *   - Light orbs fly round and round.
 *
 *   LIGHT: Pastel Brume:
 *   - Cute pastel colors forming a foggy brume.
 *   - Various bright colors cover the screen.
 *
 *   LIGHT: Prism Burst:
 *   - More color than a bag of candy!
 *   - CAUTION: Bright lights!
 *   - Lights of all colors expand out from a target.
 *
 *   LIGHT: Prismatic Gleam:
 *   - Our seven lights spring to the task!
 *   - Colors of all sorts shine from the skies high above.
 *
 *   LIGHT: Rainbow Clouds:
 *   - Colorful clouds dot the heavens.
 *   - Multi-colored clouds slowly drift across the upper screen.
 *
 *   LIGHT: Rainbow Orbs:
 *   - Taste the rainbow!
 *   - Multi-colored rainbow orbs spawn in and float about.
 *
 *   LIGHT: Star Fall:
 *   - You're a star. You're one in a million.
 *   - Stars fall out of the night sky spinning round and round.
 *
 * ---
 *
 * Dark-Themed
 *
 *   DARK: Ash Debris:
 *   - Gotta ketchum all.
 *   - Pieces of ash debris flutter through the air.
 *
 *   DARK: Ashfall:
 *   - But unlike thunder, this didn’t stop. It went on and on.
 *   - Volcanic ash pieces descend from the skies above.
 *
 *   DARK: Blood Rain:
 *   - It's actually a real phenomenon.
 *   - However, it's not really blood.
 *
 *   DARK: Dark Orbs:
 *   - Hello darkness, my old friend.
 *   - Dark orbs circle about the screen.
 *
 *   DARK: Fumes:
 *   - Don't inhale any!
 *   - Dark fume clouds plume from below.
 *
 *   DARK: Moonlight Beams:
 *   - Moonlight is the smuggler's enemy.
 *   - Light the path in the night sky by moonshine.
 *
 *   DARK: Shadow Siphon:
 *   - Drain all of the light! CAUTION: Dark lights!
 *   - Light from around is all drained into one area.
 *
 *   DARK: Smog:
 *   - Smoking is bad, mkay?
 *   - Smokey fog (aka Smog) cover the whole screen.
 *
 *   DARK: Smoke Clouds:
 *   - Accompanied by factories owned by evil corporations.
 *   - Smoke clouds blot out the sun.
 *
 *   DARK: Sootfall:
 *   - Try not to build a snowman out of this.
 *   - Smoke-contaminated snow falls from the sky.
 *
 * ---
 *
 * Icons-Related
 *
 *   SLOW: Flying Icons ↑:
 *   MEDIUM: Flying Icons ↑:
 *   FAST: Flying Icons ↑:
 *   - Icons fly to the top at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↗:
 *   MEDIUM: Flying Icons ↗:
 *   FAST: Flying Icons ↗:
 *   - Icons fly upper right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons →:
 *   MEDIUM: Flying Icons →:
 *   FAST: Flying Icons →:
 *   - Icons fly to the right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↘:
 *   MEDIUM: Flying Icons ↘:
 *   FAST: Flying Icons ↘:
 *   - Icons fly lower right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↓:
 *   MEDIUM: Flying Icons ↓:
 *   FAST: Flying Icons ↓:
 *   - Icons fly to the bottom at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↙:
 *   MEDIUM: Flying Icons ↙:
 *   FAST: Flying Icons ↙:
 *   - Icons fly lower left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ←:
 *   MEDIUM: Flying Icons ←:
 *   FAST: Flying Icons ←:
 *   - Icons fly to the left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↖:
 *   MEDIUM: Flying Icons ↖:
 *   FAST: Flying Icons ↖:
 *   - Icons fly upper left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ●:
 *   MEDIUM: Flying Icons ●:
 *   FAST: Flying Icons ●:
 *   - Icons hover at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General Settings for the Weather Effects plugin. There aren't too many
 * settings to adjust here as the majority of the customization options exist
 * within each weather pattern-related Plugin Command instead. However, the
 * options here allow you to control what the weather patterns do not.
 *
 * ---
 * 
 * General Settings
 * 
 *   Pre-Render Generated?:
 *   - Pre-render generated images for weather patterns?
 *   - This reduces lag for on-demand weather patterns.
 *   - This is automatically turned OFF for mobile devices.
 * 
 *     # of Variations:
 *     - How many variations of each rendered weather pattern do you want?
 * 
 *   Smooth Icons?
 *   - Smooth out the icons used for weather sprites?
 *   - Or keep them pixelated?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * There is only one option added through this plugin and it's an option that
 * allows the player to adjust what % of weather sprites are visible on the
 * screen at a time. This is helpful for those who may have weaker computers or
 * those who may find the weather patterns to be a bit intrusive at times.
 * 
 * The number of minimum weather sprites will always be shown. The number of
 * added sprites based on power will be what the weather density value affects.
 * 
 * If you are using the Options Core, the settings found in the Options Core
 * need to be managed instead of these as these will be overwritten in favor of
 * what the Options Core will offer.
 *
 * ---
 * 
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Weather Density' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 * 
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Olivia
 * * Arisu
 * * Irina
 * * Yanfly
 * * Aries
 * 
 * Creazilla Open-Source
 * * Many of the canvas drawings are made by various artists under Creazilla.
 * * These are under the Creazilla Open-Source License.
 * * They are free for personal and commercial use. No attribution required.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.04: February 16, 2023
 * * Bug Fixes!
 * ** LIGHT: Confetti should no longer only display black stars when pre-render
 *    is turned off. Confetti should now be pastel colors once again. Fix made
 *    by Irina.
 * 
 * Version 1.03: December 15, 2022
 * * Documentation Update!
 * ** Added new note for "Pre-Render Generated" in Plugin Parameters.
 * ** Help file updated for new features.
 * *** This is automatically turned OFF for mobile devices.
 * * Feature Update!
 * ** Games running with this plugin on mobile devices will automatically
 *    default to turning off "Pre-Render Generated" in order to conserve memory
 *    usage. This is NOT disabled automatically for MacOS because memory leak
 *    problems do not apply to MacOS. If you feel like it should be disabled,
 *    we recommend that you turn off "Pre-Render Generated" in the
 *    Plugin Parameters. Update made by Arisu.
 * ** "Pre-Render Generated" is also now set to "false" by default.
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** BASIC: Pre-Render Generated Weather
 * **** Selects target weather type to pre-render the generated graphics.
 * **** This is to help reduce future lag spikes on mobile devices.
 * 
 * Version 1.02: June 2, 2022
 * * Bug Fixes!
 * ** "ICE: Aurora Borealis" default values are now fixed to properly convey
 *    proper verticality and angle. If you have the "ICE: Aurora Borealis"
 *    Plugin Command already in place, delete it and replace it with a new one
 *    for the newer default values. Fix made by Irina.
 * * Documentation Update!
 * ** Updated descriptions for "Upper/Lower?" parameters to the following:
 * *** In battle, they are above the battlers and behind the battlebacks.
 * * Feature Update!
 * ** In battle, the "lower" layer is now moved to behind the battlebacks.
 *    Update made by Irina.
 * 
 * Version 1.01: March 31, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused any weather effects on layers 9 and 10 to
 *    cancel each other out. Fix made by Irina.
 * 
 * Version 1.00 Official Release Date: April 6, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Basic
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Basic
 * @text Category - Basic
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicAdjustWeatherPower
 * @text BASIC: Adjust Weather Power
 * @desc Adjusts the power of the target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to adjust?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Adjust weather layer(s) from the upper or lower layers?
 * @default upper
 * 
 * @arg Power:eval
 * @text Power
 * @desc Adjust power by how much? Caps at 1 and 9.
 * You may use JavaScript code.
 * @default +1
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully adjust the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely adjust before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicClearWeather
 * @text BASIC: Clear Weather
 * @desc Clears out target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to clear?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Clear weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully clear the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely clear before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicMemorizeWeather
 * @text BASIC: Memorize Weather
 * @desc Memorizes the settings for target weather pattern(s) so
 * that you can reuse it later.
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to save?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc save weather layer(s) from the upper or lower layers?
 * @default both
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicPreRenderGeneratedWeather
 * @text BASIC: Pre-Render Generated Weather
 * @desc Selects target weather type to pre-render the generated
 * graphics for it. This is to help reduce future lag spikes.
 *
 * @arg WeatherType:str
 * @text Weather Type
 * @type select
 * @option -
 * @option Embers
 * @option FireStorm
 * @option Fireflies
 * @option Fireworks
 * @option FlameHaze
 * @option FlameWall
 * @option HeatClouds
 * @option MeteorShower
 * @option ShootingStars
 * @option SunBeams
 * @option -
 * @option ArcticBeam
 * @option Aurora
 * @option Blizzard
 * @option DiamondDust
 * @option Glistening
 * @option IceFog
 * @option Sleet
 * @option Snow
 * @option SnowClouds
 * @option SnowFlakes
 * @option -
 * @option Discharge
 * @option PlasmaBolt
 * @option PlasmaSurge
 * @option SpiderBolt
 * @option StaticCharge
 * @option Thunderbolt
 * @option ThunderClouds
 * @option ThunderSurge
 * @option PurpleHaze
 * @option UltraViolet
 * @option -
 * @option Bubbles
 * @option CloudBurst
 * @option Drip
 * @option Mist
 * @option Rain
 * @option RainbowArch
 * @option RainClouds
 * @option SoapBubbles
 * @option Steam
 * @option Storm
 * @option -
 * @option AcidRain
 * @option CrumblingCave
 * @option DustClouds
 * @option DustStorm
 * @option HouseDust
 * @option PollutionClouds
 * @option RadioactiveBeam
 * @option SandClouds
 * @option SandStorm
 * @option ToxicGas
 * @option -
 * @option AutumnLeaves
 * @option Balloons
 * @option CherryBlossoms
 * @option DandelionSeeds
 * @option GrassyGust
 * @option GreenLeaves
 * @option Pollen
 * @option Tempest
 * @option WhiteClouds
 * @option Xtreme
 * @option -
 * @option Confetti
 * @option LensFlare
 * @option LightBurst
 * @option LightOrbs
 * @option PastelBrume
 * @option PrismBeams
 * @option PrismBurst
 * @option RainbowClouds
 * @option RainbowOrbs
 * @option Stars
 * @option -
 * @option AshDebris
 * @option AshFall
 * @option BloodRain
 * @option DarkOrbs
 * @option Fumes
 * @option MoonBeams
 * @option SmokeFog
 * @option SmokeCloud
 * @option ShadowBurst
 * @option SootFall
 * @option -
 * @desc Which weather type do you wish to pre-render?
 * This is to help reduce lag spikes when calling weathers.
 * @default Embers
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicReplayMemory
 * @text BASIC: Replay Memorized Weather
 * @desc Replays target memorized weather pattern(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to replay?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Replay weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully replay the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely replay before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Fire
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Fire
 * @text Category - Fire-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Embers
 * @text FIRE: Embers
 * @desc Oh, Ember, you will remember. So warm and tender.
 * Embers rise off from the ground upward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireflies
 * @text FIRE: Fireflies
 * @desc Take my love, take my land, take me where I cannot stand.
 * Fireflies will spawn and float around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Firestorm
 * @text FIRE: Firestorm
 * @desc This is fine.
 * Rain fiery bolts of flames from the heavens!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireworks
 * @text FIRE: Fireworks
 * @desc You just gotta ignite the light and let it shine!
 * A shot of fire flies up and blows up into a flower.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower 70%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"245\",\"opacityVariance:num\":\"10\",\"opacityEasingType:str\":\"InCirc\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[\\\"30\\\",\\\"60\\\",\\\"90\\\",\\\"120\\\",\\\"150\\\",\\\"180\\\",\\\"210\\\",\\\"240\\\",\\\"270\\\",\\\"300\\\",\\\"330\\\"]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"true\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameHaze
 * @text FIRE: Flame Haze
 * @desc Flaming Hair Blazing Eyes!
 * A fiery smoke clouds the screen!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#f26c4f\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameWall
 * @text FIRE: Flame Wall
 * @desc Is it me, or is it hot in here? Oh, it's me.
 * A wall of flames appears on the bottom part of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"lower 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"50\",\"totalPerPower:num\":\"25\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"32\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"32\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_HeatClouds
 * @text FIRE: Heat Clouds
 * @desc Fiery conglomerations of clouds.
 * Heat clouds scorch the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_MeteorShower
 * @text FIRE: Meteor Shower
 * @desc Clustering wishes will become a new shining star!
 * A nonstop swarm of meteors fall in the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.6\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"15\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_ShootingStar
 * @text FIRE: Shooting Stars
 * @desc Make a wish! A wholesome one, please.
 * Shooting stars appear over the horizon of the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_SunBeams
 * @text FIRE: Sunlight Beams
 * @desc Aka crepuscular rays. Makes any day brighter!
 * Sun beams shine down from the heavens.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Ice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Ice
 * @text Category - Ice-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_ArcticBeam
 * @text ICE: Arctic Gleam
 * @desc Oh, erie bluish glow of the arctic.
 * Illuminate the frozen land below!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Aurora
 * @text ICE: Aurora Borealis
 * @desc Also known as the Northern Lights.
 * Auroras dance across the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper border\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"32\",\"scale:num\":\"0.90\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"1\",\"ySwaySpeed:eval\":\"0.005\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Blizzard
 * @text ICE: Blizzard
 * @desc Let it go, let it go! Can't hold it back anymore!
 * Concentrated snowfall covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"200\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#cccccc\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"205\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"12\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_DiamondDust
 * @text ICE: Diamond Dust
 * @desc Diamond dust falls from the skies.
 * Slightly illuminated ice particles descend from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_GlisteningIce
 * @text ICE: Glistening Ice
 * @desc Walkin' on thin ice!
 * Ice particles sparkle from all around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"45\",\"lifespanVariance:num\":\"15\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuad\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_IceFog
 * @text ICE: Ice Fog
 * @desc Yo! VIP! Let's Kick it!
 * Frozen fog covers the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"8\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Sleet
 * @text ICE: Sleet
 * @desc Slightly heavier and more solid than snow!
 * Frozen ice crystals snow down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"140\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"8\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snow
 * @text ICE: Snow
 * @desc Brace yourselves! Winter is coming!
 * Snow falls from the sky and flutters downward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_SnowClouds
 * @text ICE: Snow Clouds
 * @desc Icy gatherings of clouds ready to deliver snow.
 * Snow clouds blanket the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snowflakes
 * @text ICE: Snowflakes
 * @desc Snowflake! Snowflake! Little snowflake!
 * Generated snowflakes will have random patterns.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"220\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"230\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Thunder
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Thunder
 * @text Category - Thunder-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Discharge
 * @text THUNDER: Discharge
 * @desc Danger! Danger! High voltage!
 * Electricity discharges from the sides of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaBolt
 * @text THUNDER: Plasma Bolt
 * @desc A horizontal bolt of electricity! From left to right!
 * Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaSurge
 * @text THUNDER: Plasma Surge
 * @desc The windows are becoming stained with a nostalgic color.
 * Nonstop plasma bolts flood the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PurpleHaze
 * @text THUNDER: Purple Haze
 * @desc Purple haze all around. Don't know if I'm coming up or down.
 * A purple fog blankets the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"96\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#8560a8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_SpiderLightning
 * @text THUNDER: Spider Lightning
 * @desc Nothing to do with spiders.
 * Bolts expand outwards from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-8\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_StaticCharge
 * @text THUNDER: Static Charge
 * @desc Snap! Crackle! Pop!
 * Highly charged target emits static.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.25\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-12\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderbolt
 * @text THUNDER: Thunder Bolt
 * @desc More than just an expensive charging cable. Giant bolt
 * flashes from above! Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderclouds
 * @text THUNDER: Thunder Clouds
 * @desc These thunderclouds, oh no, no!
 * Thunder-ready clouds fly atop the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#605ca8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thundersurge
 * @text THUNDER: Thunder Surge
 * @desc When you walk away, you don't hear me say.
 * Nonstop thunder bolts scour the skies.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_UltravioletBeams
 * @text THUNDER: Ultraviolet Beams
 * @desc Get out some of that SPF 100+! (This is NOT real UV Light!)
 * Ultraviolet lights are coming from the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Water
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Water
 * @text Category - Water-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Bubbles
 * @text WATER: Bubbles Rising
 * @desc Let's not burst your bubble!
 * Bubbles will rise up towards the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00aaaa\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_CloudBurst
 * @text WATER: Cloud Burst
 * @desc A sudden massive deluge of rain!
 * A near vertical storm of massive volume.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#303030\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"8\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"18\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_DrippingWater
 * @text WATER: Dripping Water
 * @desc Leaky ceilings? It's time to call a plumber.
 * Water droplets drip from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"60\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Mist
 * @text WATER: Mist
 * @desc Not to be confused with the video game. That has a Y.
 * A suspended mist covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Rain
 * @text WATER: Rain
 * @desc Rain, rain, go away! Come again some other day!
 * Raindrops will fall from the sky all over the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainClouds
 * @text WATER: Rain Clouds
 * @desc It's raining men! Hallelujah! It's raining men, amen!
 * Rain-filled clouds hover menacingly at the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainbowArch
 * @text WATER: Rainbow Arch
 * @desc Somewhere over the rainbow~
 * A large rainbow arch appears in the corner of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"right border\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower border\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.30\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RisingSteam
 * @text WATER: Rising Steam
 * @desc Take more photos to train your selfie steam!
 * Steam vapor clouds rise from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.5\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_SoapBubbles
 * @text WATER: Soap Bubbles
 * @desc I will try to blow a bubble that will last all day.
 * Soap bubbles float and hover around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"0.0\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.005\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.005\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Storm
 * @text WATER: Storm
 * @desc A MIGHTY storm!
 * Large and long raindrops fall from the sky creating a storm.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#404040\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Earth
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Earth
 * @text Category - Earth-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_AcidRain
 * @text EARTH: Acid Rain
 * @desc Real acid rain doesn't glow in the dark.
 * But this one sure does.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c4df9b\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_CrumblingCave
 * @text EARTH: Crumbling Cave
 * @desc Do NOT grab any suspiciously placed rubies.
 * Bits and pieces of the cave ceiling crumble.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper border\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"OutQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.00\",\"scaleVariance:num\":\"0.00\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.5\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"8\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"8\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustClouds
 * @text EARTH: Dust Clouds
 * @desc Darkened dust covers the surroundings!
 * Dust clouds will fill up the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"72\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustStorm
 * @text EARTH: Dust Storm
 * @desc Happens in places other than Nashville.
 * Darkened dust launches across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_HouseDust
 * @text EARTH: House Dust
 * @desc Floating white dust particles with nowhere to go.
 * So they'll just make themselves at home.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.0025\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.0025\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_PollutionClouds
 * @text EARTH: Pollution Clouds
 * @desc Absolutely disgusting colored pollution clouds.
 * Pollution clouds cover the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_RadioactiveBeams
 * @text EARTH: Radioactive Beams
 * @desc Alert! Alert! Alert! Nuclear green lights!
 * Nuclear green lights irradiate from the clouds.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#00ff00\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_SandClouds
 * @text EARTH: Sand Clouds
 * @desc Straight from the Pyramids of Giza!
 * Sand clouds will surround everything!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_Sandstorm
 * @text EARTH: Sandstorm
 * @desc Darude! Sandstorm!
 * Sand blasts across the screen from one end to the other.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_ToxicGas
 * @text EARTH: Toxic Gas
 * @desc More toxic than the comments section of social media!
 * A foggy green gas blankets the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"type:str":"straight","lockedOffsetX:eval":"+0","lockedOffsetY:eval":"+0","speed:eval":"1.2","speedVariance:eval":"0.3","angle:eval":"180","alignAngle:eval":"false","angleVariance:eval":"2","angleOffset:eval":"+0","angleArc:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","spinSpeed:eval":"+0","spinSpeedVariance:eval":"0","reverseSpin:eval":"false","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Wind
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Wind
 * @text Category - Wind-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_AutumnLeaves
 * @text WIND: Autumn Leaves
 * @desc Red, yellow, orange, brown leaves are falling all around.
 * See them dance in the cool, fall air. 
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Balloons
 * @text WIND: Balloons
 * @desc You and I in a little toy shop,
 * buy a bag balloons with the money we've got.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.5\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"1.5\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"74\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+15\",\"angleArc:eval\":\"0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_CherryBlossoms
 * @text WIND: Cherry Blossoms
 * @desc The emblem of love and good luck.
 * Cherry blossom petals flutter down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_DandelionSeeds
 * @text WIND: Dandelion Seeds
 * @desc Floating on the air. Never seem to care.
 * Dandelion seeds will flow up into the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.15\",\"scaleVariance:num\":\"0.05\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"30\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"-45\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GrassyGust
 * @text WIND: Grassy Gust
 * @desc A gust of wind! From right to left, grass flies with it.
 * Best when paired with a Tempest.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GreenLeaves
 * @text WIND: Green Leaves
 * @desc Leaf me alone!
 * Green leaves fall above, spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InCubic\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.30\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"310\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Pollen
 * @text WIND: Pollen
 * @desc Bless you! Gesundheit! Salute!
 * A cloud of pollen grains travel about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"48\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#fff799\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"15\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"8\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Tempest
 * @text WIND: Tempest
 * @desc Brought to you by a friendly slime.
 * Powerful gusts of wind blast across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.4\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_WhiteClouds
 * @text WIND: White Clouds
 * @desc Not the main character from Final Fantasy VII.
 * Fluffy white clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_XtremeSpeed
 * @text WIND: Xtreme Speed
 * @desc Gotta go fast! Speedlines whip past!
 * Works best below the tileset layer.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"middle screen\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"100\",\"opacityVariance:num\":\"28\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"2.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"2.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"15\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"24\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Light
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Light
 * @text Category - Light-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Confetti
 * @text LIGHT: Confetti
 * @desc Party like it's 1999!
 * Confetti of differing shapes drop from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"40\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LensFlare
 * @text LIGHT: Lens Flare
 * @desc Relive the amateur days from Photoshop!
 * A lens flare descends from the upper corner of the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"left 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"upper 10%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightBurst
 * @text LIGHT: Light Burst
 * @desc Sometimes also known as Sun Bursts. CAUTION: Bright lights!
 * Bright white light bursts out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightOrbs
 * @text LIGHT: Light Orbs
 * @desc Show me the light!
 * Light orbs fly round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PastelBrume
 * @text LIGHT: Pastel Brume
 * @desc Cute pastel colors forming a foggy brume.
 * Various bright colors cover the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBurst
 * @text LIGHT: Prism Burst
 * @desc More color than a bag of candy! CAUTION: Bright lights!
 * Lights of all colors expand out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBeams
 * @text LIGHT: Prismatic Gleam
 * @desc Our seven lights spring to the task!
 * Colors of all sorts shine from the skies high above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowClouds
 * @text LIGHT: Rainbow Clouds
 * @desc Colorful clouds dot the heavens.
 * Multi-colored clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 30%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"32\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowOrbs
 * @text LIGHT: Rainbow Orbs
 * @desc Taste the rainbow!
 * Multi-colored rainbow orbs spawn in and float about.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Stars
 * @text LIGHT: Star Fall
 * @desc You're a star. You're one in a million.
 * Stars fall out of the night sky spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Dark
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Dark
 * @text Category - Dark-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_AshDebris
 * @text DARK: Ash Debris
 * @desc Gotta ketchum all.
 * Pieces of ash debris flutter through the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Ashfall
 * @text DARK: Ashfall
 * @desc But unlike thunder, this didn’t stop. It went on and on.
 * Volcanic ash pieces descend from the skies above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"215\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_BloodRain
 * @text DARK: Blood Rain
 * @desc It's actually a real phenomenon.
 * However, it's not really blood.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#cc0000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_DarkOrbs
 * @text DARK: Dark Orbs
 * @desc Hello darkness, my old friend.
 * Dark orbs circle about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"2\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Fumes
 * @text DARK: Fumes
 * @desc Don't inhale any!
 * Dark fume clouds plume from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.8\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_MoonBeams
 * @text DARK: Moonlight Beams
 * @desc Moonlight is the smuggler's enemy.
 * Light the path in the night sky by moonshine.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#d0bbee\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_ShadowBurst
 * @text DARK: Shadow Siphon
 * @desc Drain all of the light! CAUTION: Dark lights!
 * Light from around is all drained into one area.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"10\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"0.1\",\"scaleOutDuration:eval\":\"20\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeFog
 * @text DARK: Smog
 * @desc Smoking is bad, mkay?
 * Smokey fog (aka Smog) cover the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#222222\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeClouds
 * @text DARK: Smoke Clouds
 * @desc Accompanied by factories owned by evil corporations.
 * Smoke clouds blot out the sun.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Sootfall
 * @text DARK: Sootfall
 * @desc Try not to build a snowman out of this.
 * Smoke-contaminated snow falls from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons1
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons1
 * @text Category - Icons (Slow)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Up
 * @text SLOW: Flying Icons ↑
 * @desc Icons fly to the top at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperRight
 * @text SLOW: Flying Icons ↗
 * @desc Icons fly upper right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Right
 * @text SLOW: Flying Icons →
 * @desc Icons fly to the right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerRight
 * @text SLOW: Flying Icons ↘
 * @desc Icons fly lower right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Down
 * @text SLOW: Flying Icons ↓
 * @desc Icons fly to the bottom at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerLeft
 * @text SLOW: Flying Icons ↙
 * @desc Icons fly lower left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Left
 * @text SLOW: Flying Icons ←
 * @desc Icons fly to the left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperLeft
 * @text SLOW: Flying Icons ↖
 * @desc Icons fly upper left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Mid
 * @text SLOW: Flying Icons ●
 * @desc Icons hover at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"1\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"1\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons2
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons2
 * @text Category - Icons (Medium)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Up
 * @text MEDIUM: Flying Icons ↑
 * @desc Icons fly to the top at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperRight
 * @text MEDIUM: Flying Icons ↗
 * @desc Icons fly upper right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Right
 * @text MEDIUM: Flying Icons →
 * @desc Icons fly to the right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerRight
 * @text MEDIUM: Flying Icons ↘
 * @desc Icons fly lower right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Down
 * @text MEDIUM: Flying Icons ↓
 * @desc Icons fly to the bottom at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerLeft
 * @text MEDIUM: Flying Icons ↙
 * @desc Icons fly lower left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Left
 * @text MEDIUM: Flying Icons ←
 * @desc Icons fly to the left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperLeft
 * @text MEDIUM: Flying Icons ↖
 * @desc Icons fly upper left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Mid
 * @text MEDIUM: Flying Icons ●
 * @desc Icons hover at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons3
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons3
 * @text Category - Icons (Fast)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Up
 * @text FAST: Flying Icons ↑
 * @desc Icons fly to the top at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperRight
 * @text FAST: Flying Icons ↗
 * @desc Icons fly upper right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Right
 * @text FAST: Flying Icons →
 * @desc Icons fly to the right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerRight
 * @text FAST: Flying Icons ↘
 * @desc Icons fly lower right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Down
 * @text FAST: Flying Icons ↓
 * @desc Icons fly to the bottom at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerLeft
 * @text FAST: Flying Icons ↙
 * @desc Icons fly lower left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Left
 * @text FAST: Flying Icons ←
 * @desc Icons fly to the left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperLeft
 * @text FAST: Flying Icons ↖
 * @desc Icons fly upper left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Mid
 * @text FAST: Flying Icons ●
 * @desc Icons hover at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"4\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param WeatherEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General Settings for the Weather Effects plugin.
 * @default {"PreRenderGenImage:eval":"false","RenderVariations:num":"16","SmoothIcons:eval":"true"}
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options Settings for the Weather Effects plugin.
 * @default {"Options":"","AddWeatherDensityOption:eval":"true","AdjustRect:eval":"true","Name:str":"Weather Density"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param PreRenderGenImage:eval
 * @text Pre-Render Generated?
 * @type boolean
 * @on Pre-render
 * @off Render when needed
 * @desc Pre-render generated images for weather patterns?
 * This reduces lag for on-demand weather patterns.
 * @default false
 *
 * @param RenderVariations:num
 * @text # of Variations
 * @parent PreRenderGenImage:eval
 * @min 1
 * @desc How many variations of each rendered weather pattern do you want?
 * @default 16
 *
 * @param SmoothIcons:eval
 * @text Smooth Icons?
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Smooth out the icons used for weather sprites?
 * Or keep them pixelated?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AddWeatherDensityOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Weather Density' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Weather Density
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Custom:
 *
 * @param sprite:struct
 * @text Sprite Settings
 * @type struct<Sprite>
 * @desc The general settings involving the weather sprites.
 * @default {"lifespan:num":"60","lifespanVariance:num":"0","spawnLocationX:str":"random","spawnLocationY:str":"random","mapBound:eval":"true","opacity:num":"255","opacityVariance:num":"0","scale:num":"1.0","scaleVariance:num":"0","totalMinimum:num":"20","totalPerPower:num":"5"}
 *
 * @param dimmer:struct
 * @text Dimmer Overlay
 * @type struct<Dimmer>
 * @desc Settings involving the dimmer overlay cast over the screen.
 * @default {"color:str":"#000000","opacityMinimum:num":"0","opacityPerPower:num":"0"}
 *
 * @param image:struct
 * @text Image Settings
 * @type struct<Image>
 * @desc Settings for the images used for the weather sprites.
 * Weathers with multiple images will be picked at random.
 * @default {"generated:eval":"true","generatedWeight:num":"1","icons:arraynum":"[]","iconsWeight:num":"16","pictures:arraystr":"[]","picturesWeight:num":"16","blendMode:num":"0","hueVariations:arraynum":"[]","toneVariations:arrayeval":"[]"}
 *
 * @param flags:struct
 * @text Special Effects
 * @type struct<Flags>
 * @desc Specialized effects that are turned on for specific weather
 * types can be found here.
 * @default {"alwaysVisiblePlayer:eval":"false"}
 *
 * @param trajectory:struct
 * @text Trajectory Settings
 * @type struct<Trajectory>
 * @desc Settings used to determine the trajectory a weather sprite
 * will take and how they behave on it.
 * @default {"type:str":"straight","speed:eval":"1","angle:eval":"0","alignAngle:eval":"true","angleVariance:eval":"0","angleOffset:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 */
/* ----------------------------------------------------------------------------
 * Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sprite:
 *
 * @param lifespan:num
 * @text Lifespan
 * @desc Lifespan of each weather sprite in frames.
 * @default 60
 *
 * @param lifespanVariance:num
 * @text Variance
 * @parent lifespan:num
 * @desc What variance is there to each lifespan value?
 * @default 0
 *
 * @param spawnLocationX:str
 * @text Spawn Location X
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option left border
 * @option left 10%
 * @option left 20%
 * @option left 30%
 * @option left 40%
 * @option left 50%
 * @option left 60%
 * @option left 70%
 * @option left 80%
 * @option left 90%
 * @option - 
 * @option center screen
 * @option center 10%
 * @option center 20%
 * @option center 30%
 * @option center 40%
 * @option center 50%
 * @option center 60%
 * @option center 70%
 * @option center 80%
 * @option center 90%
 * @option - 
 * @option right border
 * @option right 10%
 * @option right 20%
 * @option right 30%
 * @option right 40%
 * @option right 50%
 * @option right 60%
 * @option right 70%
 * @option right 80%
 * @option right 90%
 * @option - 
 * @option sides border
 * @option sides 10%
 * @option sides 20%
 * @option sides 30%
 * @option sides 40%
 * @option - 
 * @desc What x location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetX:eval
 * @text Offset X
 * @parent spawnLocationX:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param spawnLocationY:str
 * @text Spawn Location Y
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option upper border
 * @option upper 10%
 * @option upper 20%
 * @option upper 30%
 * @option upper 40%
 * @option upper 50%
 * @option upper 60%
 * @option upper 70%
 * @option upper 80%
 * @option upper 90%
 * @option - 
 * @option middle screen
 * @option middle 10%
 * @option middle 20%
 * @option middle 30%
 * @option middle 40%
 * @option middle 50%
 * @option middle 60%
 * @option middle 70%
 * @option middle 80%
 * @option middle 90%
 * @option - 
 * @option - 
 * @option lower border
 * @option lower 10%
 * @option lower 20%
 * @option lower 30%
 * @option lower 40%
 * @option lower 50%
 * @option lower 60%
 * @option lower 70%
 * @option lower 80%
 * @option lower 90%
 * @option - 
 * @option either border
 * @option either 10%
 * @option either 20%
 * @option either 30%
 * @option either 40%
 * @option - 
 * @desc What y location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetY:eval
 * @text Offset Y
 * @parent spawnLocationY:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param mapBound:eval
 * @text Map Bound?
 * @parent spawnLocation:str
 * @type boolean
 * @on Moves with Map
 * @off Screen-Locked
 * @desc Do the weather sprites move with the map scrolling?
 * @default true
 *
 * @param opacity:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Starting opacity of each weather sprite in frames.
 * @default 255
 *
 * @param opacityVariance:num
 * @text Variance
 * @parent opacity:num
 * @desc What variance is there to each starting opacity value?
 * @default 0
 *
 * @param opacityEasingType:str
 * @text Easing Type
 * @parent opacity:num
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply for opacity.
 * @default Linear
 *
 * @param opacityFadeInTime:num
 * @text Fade In Time
 * @parent opacity:num
 * @type number
 * @desc How many frames does it take for the sprite to fade in?
 * Use 0 to start immediately at full opacity.
 * @default 16
 *
 * @param scale:num
 * @text Scale
 * @desc What is the scale of the sprite?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleVariance:num
 * @text Variance
 * @parent scale:num
 * @desc What variance is there to the main scale value?
 * @default 0
 *
 * @param scaleRatioX:num
 * @text Ratio X
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale X?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleRatioY:num
 * @text Ratio Y
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale Y?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param totalMinimum:num
 * @text Total Sprite Minimum
 * @desc What is the minimum number of sprites on the screen?
 * @default 20
 *
 * @param totalPerPower:num
 * @text Total Per Power
 * @parent totalMinimum:num
 * @desc Increase the total number of sprites per power by this.
 * Lowest power is 1. Highest power is 9.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * Dimmer Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Dimmer:
 *
 * @param color:str
 * @text Color
 * @desc Dimmer color. This uses #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param opacityMinimum:num
 * @text Opacity Minimum
 * @parent totalMinimum:num
 * @desc What is the minimum opacity value for the dimmer?
 * @default 0
 *
 * @param opacityPerPower:num
 * @text Opacity Per Power
 * @parent opacityMinimum:num
 * @desc What is the total opacity value per power for the dimmer?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Image Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Image:
 *
 * @param generated:eval
 * @text Generated Image?
 * @type boolean
 * @on Include
 * @off Exclude
 * @desc Include the plugin-generated image for this weather type?
 * @default true
 *
 * @param generatedWeight:num
 * @text Weight
 * @parent generated:eval
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param icons:arraynum
 * @text Icon(s)
 * @type string[]
 * @desc Which icons do you wish to include for the images to appear as?
 * @default []
 *
 * @param iconsWeight:num
 * @text Weight
 * @parent icons:arraynum
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param pictures:arraystr
 * @text Picture(s)
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Which pictures do you wish to include for the images to appear as?
 * @default []
 *
 * @param picturesWeight:num
 * @text Weight
 * @parent pictures:arraystr
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param blendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the weather sprite?
 * @default 0
 *
 * @param hueVariations:arraynum
 * @text Hue Variations
 * @type number[]
 * @min 0
 * @max 360
 * @desc What hue variations will be randomly selected from?
 * Use a value between 0 and 360.
 * @default ["0"]
 *
 * @param toneVariations:arrayeval
 * @text Tone Variations
 * @type string[]
 * @desc What tone variations will be randomly selected from?
 * Format for each: [Red, Green, Blue, Gray]
 * @default ["[0,0,0,0]"]
 *
 */
/* ----------------------------------------------------------------------------
 * Special Flags Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Flags:
 *
 * @param alwaysVisiblePlayer:eval
 * @text Allow Visible Player?
 * @type boolean
 * @on Visible
 * @off Ignore
 * @desc Make the player more visible by reducing the
 * opacity of nearby weather sprites?
 * @default false
 *
 * @param flatFlutter:eval
 * @text Flat Fluttering?
 * @type boolean
 * @on Object is Flat
 * @off Object has Volume
 * @desc Is the object flat and flutters in the wind?
 * Or does the object have volume and doesn't?
 * @default false
 *
 * @param longevity:eval
 * @text Longevity
 * @type boolean
 * @on Lasts Until Changed
 * @off Normal
 * @desc Weather effects with longevity don't expire until
 * the weather pattern type is changed.
 * @default false
 *
 * @param hueSwayRange:eval
 * @text Hue Sway Range
 * @desc How much should the hue sway back and forth?
 * JavaScript code can be used.
 * @default 0
 *
 * @param hueSwaySpeed:eval
 * @text Hue Sway Speed
 * @parent hueSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param respawnCommonEventID:num
 * @text Respawn Common Event
 * @type common_event
 * @desc Play a specific Common Event when this event respawns?
 * The Common Event will run as a Once Parallel.
 * @default 0
 *
 * @param respawnDelayMin:eval
 * @text Respawn Delay Minimum
 * @desc Is there a delay to the respawn? This is how many
 * frames the sprite must wait before respawning.
 * @default 0
 *
 * @param respawnDelayRngPerPower:eval
 * @text RNG Delay Per Power
 * @parent respawnDelayMin:eval
 * @desc How many randomized frames of delay per power must be waited?
 * @default +0
 *
 * @param scaleIn:eval
 * @text Scale In
 * @desc What scale ratio should the sprite spawn in at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleInDuration:eval
 * @text Duration
 * @parent scaleIn:eval
 * @desc How many frames should the scale in effect take?
 * Scale in will always head towards 1.0.
 * @default 10
 *
 * @param scaleOut:eval
 * @text Scale Out
 * @desc What scale ratio should the sprite despawn out at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleOutDuration:eval
 * @text Duration
 * @parent scaleOut:eval
 * @desc How many frames should the scale out effect take?
 * Scale in will usually head from 1.0.
 * @default 10
 * 
 * @param CustomFinish
 * @text Custom Finish
 *
 * @param fireworksFinish:eval
 * @text Fireworks Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Show me fireworks!
 * @off It's not right!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fireworks explosion?
 * @default false
 *
 * @param sparkleFinish:eval
 * @text Sparkle Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Sparkle YES!
 * @off NO! No Sparkle!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fabulous spinning sparkle effect?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Trajectory Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Trajectory:
 *
 * @param type:str
 * @text Trajectory Type
 * @type select
 * @option -
 * @option Straight: Follows the trajectory
 * @value straight
 * @option Frozen: Does not follow a trajectory
 * @value frozen
 * @option -
 * @option Player-Locked: Map only! Center of sprite is locked on player
 * @value player
 * @option Follower-Locked: Map only! Center of sprite is locked on target follower
 * @value follower
 * @option Event-Locked: Map only! Center of sprite is locked on target event
 * @value event
 * @option -
 * @option Actor-Locked: Battle only! Center of sprite is locked on target actor
 * @value actor
 * @option Enemy-Locked: Battle only! Center of sprite is locked on target enemy
 * @value enemy
 * @option User-Locked: Battle only! Center of sprite is locked on current user
 * @value user
 * @option Target-Locked: Battle only! Center of sprite is locked on current target
 * @value target
 * @option -
 * @desc What trajectory type is used?
 * @default straight
 * 
 * @param lockedID:eval
 * @text Locked ID/Index
 * @parent type:str
 * @desc For locked trajectories only. Input the follower index.
 * Or ID of event, actor, enemy.
 * @default 0
 * 
 * @param lockedOffsetX:eval
 * @text Offset X (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param lockedOffsetY:eval
 * @text Offset Y (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param speed:eval
 * @text Speed
 * @desc What speed is the sprite moving at? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 1
 *
 * @param speedVariance:eval
 * @text Speed Variance
 * @parent speed:eval
 * @desc What variance is there to the speed value?
 * @default 0
 *
 * @param angle:eval
 * @text Angle
 * @desc What angle (0 to 360) is the sprite moving toward?
 * JavaScript code can be used.
 * @default 0
 *
 * @param alignAngle:eval
 * @text Align Angle?
 * @parent angle:eval
 * @type boolean
 * @on Rotates to Align
 * @off Does Not Rotate
 * @desc Should the sprite rotate itself according to the angle
 * it is moving at across the screen?
 * @default true
 *
 * @param angleVariance:eval
 * @text Angle Variance
 * @parent angle:eval
 * @desc What variance is there to the base angle?
 * @default 0
 *
 * @param angleOffset:eval
 * @text Visual Angle Offset
 * @parent angle:eval
 * @desc Offset the visual by this many degrees. Used for images
 * that aren't made aligned with 0 degrees facing left.
 * @default +0
 *
 * @param angleArc:eval
 * @text Angle Arc
 * @desc How should the trajectory arc when the sprite moves?
 * JavaScript code can be used.
 * @default +0
 *
 * @param angleSwayRange:eval
 * @text Angle Sway Range
 * @desc How much should the angle sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param angleSwaySpeed:eval
 * @text Angle Sway Speed
 * @parent angleSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param spinSpeed:eval
 * @text Spin Speed
 * @desc What speed do the sprites spin?
 * JavaScript code can be used.
 * @default +0
 *
 * @param spinSpeedVariance:eval
 * @text Spin Speed Variance
 * @parent spinSpeed:eval
 * @desc What variance is there to the spin speed?
 * @default 0
 *
 * @param reverseSpin:eval
 * @text Reverse Spin?
 * @parent spinSpeed:eval
 * @type boolean
 * @on Can Reverse Spin
 * @off No Reverse Spin
 * @desc Can the spin go in the reverse direction?
 * @default false
 *
 * @param xSwayRange:eval
 * @text X Sway Range
 * @desc How much should the X value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param xSwaySpeed:eval
 * @text X Sway Speed
 * @parent xSwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param ySwayRange:eval
 * @text Y Sway Range
 * @desc How much should the Y value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param ySwaySpeed:eval
 * @text Y Sway Speed
 * @parent ySwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 */
//=============================================================================

const _0x3cb96a=_0x5063;(function(_0x3fb209,_0x1efb65){const _0x51976a=_0x5063,_0x1fbe12=_0x3fb209();while(!![]){try{const _0x1da391=parseInt(_0x51976a(0x5b3))/0x1*(parseInt(_0x51976a(0x260))/0x2)+parseInt(_0x51976a(0x267))/0x3*(parseInt(_0x51976a(0x54d))/0x4)+-parseInt(_0x51976a(0x196))/0x5+-parseInt(_0x51976a(0x4ef))/0x6+-parseInt(_0x51976a(0x1de))/0x7*(-parseInt(_0x51976a(0x567))/0x8)+-parseInt(_0x51976a(0x4da))/0x9*(parseInt(_0x51976a(0x507))/0xa)+parseInt(_0x51976a(0x28b))/0xb;if(_0x1da391===_0x1efb65)break;else _0x1fbe12['push'](_0x1fbe12['shift']());}catch(_0x36cbaa){_0x1fbe12['push'](_0x1fbe12['shift']());}}}(_0x3eec,0x7c009));var label=_0x3cb96a(0x5b2),tier=tier||0x0,dependencies=[_0x3cb96a(0x597)],pluginData=$plugins[_0x3cb96a(0x25d)](function(_0x540b2d){const _0x588678=_0x3cb96a;return _0x540b2d[_0x588678(0x3ab)]&&_0x540b2d['description']['includes']('['+label+']');})[0x0];function _0x5063(_0x187520,_0x31ec1c){const _0x3eec30=_0x3eec();return _0x5063=function(_0x50632b,_0x5aa568){_0x50632b=_0x50632b-0x195;let _0x3fff52=_0x3eec30[_0x50632b];return _0x3fff52;},_0x5063(_0x187520,_0x31ec1c);}function _0x3eec(){const _0x3cafe7=['_cached_WeatherEffects_MoonBeam','erqqx','adaptWeatherLayerData','#00ffff','substring','crumblingcave','mapBound','Dark_SmokeFog','WEATHER_SAKURA2_COLORS','_lastType','toUpperCase','Weather_update','WEATHER_STAR_COLORS','weatherEffectsHouseDust','#4dff65','#fcecde','#004400','#000000','update','concat','nFbik','shadowBlur','housedust','sleet','rebornNewData','weatherEffectsCloudBurst','sNdpa','setLayerData','xtreme','_layerID','BasicMemorizeWeather','user','_respawnDelay','weatherEffectsArcticBeams','_angleSwayRange','upper\x2090%','setColor','#fbaf5d','#fffbc7','tileWidth','dustclouds','medium_icons_0','scaleOutDuration','includes','ZFCpa','blendMode','left\x2090%','_scene','#754c24','right\x2060%','Ice_Sleet','create','#8c6239','updatePositionTrajectoryAngle','Slow_Icons_Down','_cached_WeatherEffects_DustStorm','QLuKU','globalAlpha','uwCgM','9wSfsOD','#440000','weatherEffectsToxicGas','smokecloud','weatherEffectsMoonBeams','fFzwP','dimmer','middle\x2070%','applyInverse','loadGeneratedBitmap','calcEasing','updatePositionFrozenTrajectory','_flakeRadius','Fire_FlameWall','weatherEffectsBalloons','grassyGust','weatherEffectsDustClouds','weatherEffectsCherryBlossoms','Wind_DandelionSeeds','_cached_WeatherEffects_CloudBurst','drawFireball','5538072MSugxB','Water_Mist','Fire_MeteorShower','ARRAYNUM','target','#a67c52','weatherEffectsAcidRain','weatherEffectsRain','_flakeAngle','#000044','WEATHER_DARKNESS_COLORS','Pinhd','edNmk','rgba(%1,\x20%2,\x20%3,\x201)','bRxmY','weatherType','drawTreeLeaf','_weather','Wind_AutumnLeaves','anchor','Bfbhx','weatherEffectsFireworksFlower','VBADo','lower\x2010%','585190PiEbAr','rgba(0,0,0,0)','fireworksFinish','ConvertParams','map','_weatherParent','WEATHER_FROST_COLORS','Fast_Icons_LowerLeft','_cached_WeatherEffects_ArcticBeams','thundersurge','bubbles','_cached_WeatherEffects_Embers','lensflare','opacityEasingType','weatherEffectsIceFog','fast_icons_3','scaleRatioX','left\x2050%','lockedOffsetX','#505050','Fire_SunBeams','weatherEffectsPrismBeams','xSwaySpeed','MEXtz','changeWeather','WEATHER_CLOUD_DARK_COLORS','weatherEffectsAshfall','drawLightning','spawnOffsetX','Vssde','lower\x2060%','eventId','weatherEffectsMist','slow_icons_7','pop','snow','bind','data','getLastPluginCommandInterpreter','weatherEffectsWhiteClouds','drawSnowflake','hzmyn','_angleArcTotal','#a1d2e5','nzNRy','fast_icons_9','left\x2020%','sandclouds','addColorStop','rgba(128,%1,255,1)','ClGIN','weatherEffectsRadioactiveBeams','hueSwayRange','Qwfyv','LtxFh','Water_RisingSteam','#ea916d','lineWidth','Thunder_UltravioletBeams','speedVariance','NUOvV','_strokeWidth','#ebebeb','paintOpacity','min','wait','rgba(255,64,64,0)','addWeatherDensityCommand','Medium_Icons_LowerRight','rgba(128,255,128,1)','68bzeGgS','_cached_WeatherEffects_DiamondDust','weatherEffectsShadowBurst','tempest','#fbec65','#fff200','generated','closePath','#f68e56','snowflakes','rgba(255,255,255,0)','#fcf3de','Fast_Icons_Mid','WEATHER_PRIMARY_COLORS','_cached_WeatherEffects_None','_cached_WeatherEffects_Storm','#c5302e','_hueSwayRng','weatherEffectsSandstorm','isLongevityAffected','right\x2010%','center\x2020%','rebornActions','test','processRespawnDelay','#6dcff6','799312PMAHKf','createRadialGradient','staticcharge','addLoadListener','#c69c6d','WEATHER_DANDELION1_COLORS','weatherEffectsSnowflakes','weatherEffectsPastelBrume','weatherEffectsSnow','tileHeight','weatherEffectsPurpleHaze','sin','Xuejp','applyPluginCmdSettingsLayers','_branches','lifespanVariance','dandelionseeds','#bbc9f9','medium_icons_3','drawStar','fireworksflower','center\x2040%','YzjXz','_colorTone','_colorFilter','right\x2030%','#ffffff','log','ApplyEasing','#008800','displayY','actor','Slow_Icons_UpperRight','WaitForCompletion','diamonddust','#7d7d7d','frozen','balloons','#ff00ff','flatFlutter','Options','note','waterdrop','WEATHER_FIREFLY_COLORS','weatherEffectsFireflies','weatherEffectsThunderclouds','weatherEffectsLensFlare','%1Weight','VisuMZ_0_CoreEngine','_cached_WeatherEffects_Spiderbolt','version','_memorizedWeatherData','ConfigManager_makeData','newLayer','autumnleaves','length','_cached_WeatherEffects_FireworksFlower','weatherEffectsDustStorm','#ffff00','WEATHER_SAKURA3_COLORS','format','#0000ff','_cached_WeatherEffects_Firestorm','Spriteset_Battle_createBattleback','weatherEffectsFireworks','_addSprite','azJZj','WEATHER_CLOUD_WHITE_COLORS','iconWidth','cQRFn','lightburst','Earth_PollutionClouds','updateData','_angleSwaySpeed','slow_icons_3','WeatherEffects','3fsmTdK','ashfall','Dark_SmokeClouds','weatherEffectsBubbles','opacityRate','OtDYB','weatherEffectsSnowClouds','Power','_spriteset','fill','#b4a8b1','weatherEffectsPollen','rgba(128,255,128,0)','Wind_Tempest','rgba(%1,255,255,1)','Earth_Sandstorm','NojBa','_lowerLayer','children','#a900ff','updateFlags','Wind_CherryBlossoms','weatherEffectsNone','type','xTeGi','WEATHER_RAINBOW_ORB_COLORS','_cached_WeatherEffects_Bubbles','shouldPreRenderWeatherImages','#fff568','split','fast_icons_1','meteorshower','aurora','weatherEffectsEmbers','_snowBitmap','ffCZz','BasicPreRenderGeneratedWeather','pollutionclouds','weatherEffectsSandClouds','slow_icons_9','stars','#07ff7f','straight','#00bb00','Slow_Icons_Left','FTyBJ','middle\x2030%','loadIconsetBitmap','#b2e0f2','Medium_Icons_Up','fontSize','randomInt','_angleSwayRng','#f69679','WEATHER_PASTEL_COLORS','JfbTx','hexToRgba','Light_Stars','rebornSpriteBlendMode','_rainBitmap','initialize','_cached_WeatherEffects_RainbowClouds','maxSprites','_scaleRatioY','licRY','fast_icons_0','follower','_baseSprite','scale','tekWA','weatherEffectsAshDebris','fumes','right','replayMemorizedWeatherLayerData','Light_RainbowClouds','_cached_WeatherEffects_RainClouds','clearWeather','qdvLz','radioactivebeam','WEATHER_SOAP_BUBBLE_COLORS','rgba(%1,%2,%3,%4)','icefog','MakeVariance','4576385pGWoql','width','clearCircle','_cached_WeatherEffects_DarkOrbs','isPressed','WEATHER_ULTRAVIOLET_COLORS','WEATHER_LIGHTNING_COLORS','registerCommand','applyPluginCmdSettingsCustom','drawRainbowArch','_flatFlutterDirX','#0072bc','_cached_WeatherEffects_LensFlare','rgba(','hcyDP','save','clearWeatherLayerData','color','_cached_WeatherEffects_ToxicGas','match','restore','setup','weatherEffectsConfetti','_lastDimmerColor','middle\x2010%','screenY','UHOPd','VBqza','weatherEffectsSunBeams','KCBWn','reverseSpin','medium_icons_8','weatherEffectsFumes','_cached_WeatherEffects_Fumes','Thunder_Discharge','glistening','bPHZP','purplehaze','#fdc689','_flatFlutterSpeedX','weatherEffectsSootfall','opacity','InQuad','displayX','Window_Options_isVolumeSymbol','slow_icons_2','drawSakuraPetal','#b8dfee','Fast_Icons_UpperRight','EVAL','drawCircle','_cached_WeatherEffects_SoapBubbles','prismbeams','createLowerWeatherLayer','respawnDelayRngPerPower','weatherEffectsSmokeFog','ultraviolet','_flatFlutterRngX','cXfqB','_weatherIcons','#6aba49','STR','lineTo','STRUCT','Scene_Options_maxCommands','heatclouds','isDebugAllOption','weatherEffectsWaterDrop','setupIconFrame','#949fc6','#fff799','AdjustRect','35JZmtSG','rebornSprite','_flags','#f7941d','screenX','balloon','Thunder_PlasmaSurge','rebornFlags','shootingstars','weatherEffectsDandelionSeeds','_wholeLifespan','ltzfD','updatePositionTrajectorySway','clTcP','#fffde0','getGeneratedWeatherParticle','XvEJG','_cached_WeatherEffects_GrassyGust','clearWeatherLayers','getContext','WEATHER_NATURE_GREEN_COLORS','sandstorm','rebornSpriteTone','isNoWeather','spiderbolt','_ySwaySpeed','frameCount','hueSwaySpeed','#faacab','random','Name','_cached_WeatherEffects_Fireworks','WEATHER_EFFECTS_SMOOTH_ICONS','control','bitmap','Earth_CrumblingCave','whiteclouds','remove','#404040','_realOpacity','rainbowarch','WEATHER_DANDELION3_COLORS','drawPolyArc','rMlRm','getWeatherLayerData','initMembers','enemy','Scene_Boot_loadSystemImages','scaleInDuration','WEATHER_CLOUD_BLUE_COLORS','rebornInitialOpacity','JSON','arcticbeam','_cached_WeatherEffects_WhiteClouds','createNewWeatherLayers','setupEventCommandData','cloudburst','round','weatherEffectsPollutionClouds','upper\x2010%','LAvsg','lower\x2090%','fireworks','Spriteset_Battle_createBattleFieldContainer','_target','weatherEffectsCrumblingCave','Water_Rain','_cached_WeatherEffects_Ashfall','_cached_WeatherEffects_RainbowArch','soapbubbles','#69822d','weatherEffectsDiamondDust','WEATHER_PRISMBEAM_COLORS','Dark_ShadowBurst','Fire_Firestorm','padZero','spawnLocationY','updatePosition','white','bAupw','_cached_WeatherEffects_ShadowBurst','#ff0000','#7da7d9','drawBalloon','parent','sparkleFinish','spinSpeed','opacityVariance','GedcL','weatherEffectsFlameHaze','WEATHER_ASH_COLORS','respawnCommonEventID','WEATHER_RADIOACTIVE_COLORS','WEATHER_GRASSY_GUST_COLORS','power','_sprites','weatherEffectsBlizzard','MAX_LAYERS','createBattleFieldContainer','canvas','medium_icons_2','updateDimmerOpacity','GHpQr','_cached_WeatherEffects_AutumnLeaves','Fire_HeatClouds','#333333','snowclouds','_dimmerSprite','Light_PastelBrume','Layer','rainclouds','center\x2050%','JEXXk','medium_icons_5','_cached_WeatherEffects_Stars','loadWeatherIcons','angleVariance','WEATHER_PASTEL_BRUME_COLORS','#baa4b2','createWeather','Fast_Icons_UpperLeft','Earth_RadioactiveBeams','_cached_WeatherEffects_UvBeam','parse','WJtEI','fast_icons_5','upper\x2030%','filter','CKnAe','weatherEffectsShootingStars','102868CYhdBV','Medium_Icons_Right','WEATHER_SHADOW_BURST_COLORS','smooth','updateHueSway','weatherEffectsRainbowArch','uWLYs','40371IiFXEw','setColorTone','left','WEATHER_LIGHT_COLORS','_cached_WeatherEffects_RadioactiveBeam','black','reverse','pastelbrume','_cached_WeatherEffects_FlameHaze','maxCommands','orDNf','img/system/Iconset.png','#92d450','left\x2080%','_customModified','_cached_WeatherEffects_PrismBeams','#aa00ff','weatherEffectsSoapBubbles','discharge','TvyaM','#00dd00','middle\x2090%','_ySwayRng','load','height','Water_Bubbles','weatherEffectsFlameWall','updateWeather','nLudH','eaOVT','trim','hCVSe','Linear','_flatFlutterRngY','#ba7959','middle\x2020%','16742880ZLtNkE','slow_icons_6','middle\x2040%','MUfPu','bezierCurveTo','createTilemap','#aabaf1','WEATHER_EFFECTS_MAX_VARIATIONS','isInstanceOfSceneMap','_cached_WeatherEffects_Xtreme','updatePositionFinal','stroke','_trajectoryLockedID','greenleaves','CHmPZ','viewport','sqrt','applyPluginCmdSettings','adjustHexColor','HohUY','dXQgh','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','slow_icons_4','_cached_WeatherEffects_Confetti','ashdebris','rebornCommonEvent','center\x2010%','angleArc','#d6967c','ARRAYFUNC','Slow_Icons_LowerLeft','weatherEffectsRainClouds','MakeFloatVariance','spinSpeedVariance','_hue','weatherEffectsSleet','WEATHER_EFFECTS_PRERENDER_GENERATED_IMAGES','upper\x2080%','rainbowclouds','globalCompositeOperation','arrayToHex','Light_PrismBeams','Thunder_Thundersurge','Wind_WhiteClouds','Game_Map_setup','isPlaytest','acidrain','_createBitmaps','updateScaleInOutRatio','setHue','shift','bJgDe','left\x20border','prismburst','Slow_Icons_Up','#a800ff','_upperLayerSprites','Settings','sKuKC','Dark_Sootfall','sootfall','medium_icons_4','center','ImdUa','QtmbN','_cached_WeatherEffects_SandClouds','Lqiuy','_updateAllSprites','_angleArc','max','storm','upper\x2050%','_cached_WeatherEffects_DandelionSeeds','_cached_WeatherEffects_Pollen','event','applyData','DegreesToRadian','vrxIX','center\x2090%','drawSnowflakeLine','floor','createFrontEnvironmentContainer','Water_RainClouds','_cached_WeatherEffects_Snow','#9cdaf2','rgba(%1,%1,255,1)','Ice_ArcticBeam','Dark_MoonBeams','WEATHER_AUTUMN_COLORS','Thunder_Thunderbolt','_cached_WeatherEffects_WaterDrop','WEATHER_FLAME_COLORS','_angleOffset','_cached_WeatherEffects_Thunderclouds','_stormBitmap','rebornLifespan','Duration','#55a743','right\x2070%','totalPerPower','weatherEffectsStorm','steam','pollen','WEATHER_AUTUMN_LEAVES_COLORS','upper\x2020%','Dark_AshDebris','applyPluginCmdSettingsSpecificCases','scaleVariance','JcRXf','setFullBitmapFrame','_scaleInOutRatio','#fddbe2','push','processSparkleFinish','beginPath','_cached_WeatherEffects_CherryBlossoms','_cached_WeatherEffects_Sootfall','processFireworksFinish','Earth_SandClouds','drawFireworksFlower','SjGHf','makeData','_cached_WeatherEffects_DustClouds','lwUcI','_cached_WeatherEffects_Blizzard','ADuyo','RDYdQ','calculateScaleX','psQnZ','_context','TgoCm','ceil','name','_spinAngle','updateLifespan','stringify','_alignAngle','sunbeams','powerTarget','_xSwayRange','_cached_WeatherEffects_FlameWall','player','weatherEffectsGrassyGust','weatherEffectsIcons','rgba(%1,\x20%2,\x20%3,\x200)','#79bfdb','smokeclouds','angleSwaySpeed','cos','trajectory','slow_icons_0','rTYUE','_cached_WeatherEffects_Sparkle','updateWeatherLayerDuration','#aaffff','fast_icons_2','scaleRatioY','WEATHER_SAKURA1_COLORS','RadiansToDegrees','_cached_WeatherEffects_Rain','removeUnusedColorFilter','doXdr','bloodrain','_opacityEasingType','#acff3b','yellow','flamewall','WEATHER_DANDELION2_COLORS','#ffaaff','_lockedOffsetX','updateWeatherLayers','arc','createUpperWeatherLayer','applyPluginCmdSettingsWait','medium_icons_6','medium_icons_9','duration','lifespan','UuDbX','_red','_cached_WeatherEffects_PollutionClouds','fireflies','drawFireworksMissile','addCommand','rgba(255,255,%1,1)','_ySwayRange','rebornSpriteHue','rainboworbs','weatherEffectsGreenLeaves','#3d8b43','Medium_Icons_LowerLeft','center\x2060%','JfqiY','Ice_IceFog','applyEasing','description','rotate','setFrame','blizzard','mBMwB','fast_icons_7','weatherEffectsRainbowOrbs','getTemporaryContext','prototype','xSwayRange','createBattleback','confetti','playOnceParallelInterpreter','weatherEffectsStars','Wind_Pollen','drawCloud','#ffaaaa','#880000','_xSwaySpeed','AddWeatherDensityOption','Dark_BloodRain','randomizeBitmapType','weatherEffectsRainbowClouds','_cached_WeatherEffects_ShootingStars','rgba(255,%1,%1,1)','#f49ac1','Water_DrippingWater','upper\x2060%','alwaysVisiblePlayer','RenderVariations','ARRAYJSON','Ice_Snow','weatherEffectsSmokeClouds','WEATHER_EFFECTS_DEBUG_GENERATE_MSG','center\x2080%','weatherEffectsDarkOrbs','_cached_WeatherEffects_SnowClouds','medium_icons_1','createNewWeatherSprites','darkorbs','fillRect','mYHZB','_tempCanvas','#ddffff','Fast_Icons_Down','Wind_GrassyGust','weatherEffectsSpiderbolt','_cached_WeatherEffects_Icons','ckBnW','right\x2080%','weatherEffectsHeatClouds','PreRenderGenImage','WEATHER_MOONLIGHT_COLORS','origin','right\x2020%','weatherEffectsLightOrbs','_removeSprite','cherryblossoms','_notLoadedReady','RxmnJ','#e6cab9','toLowerCase','_noWeather','cYuty','#faaacf','rebornBitmap','_cached_WeatherEffects_Thunderbolt','exit','updateOpacityFinal','#f5989d','setupWeatherEffectNotetags','_cached_WeatherEffects_AcidRain','adjustWeatherLayerPower','addGeneralOptions','_cached_WeatherEffects_HeatClouds','hexToArray','memorizeWeatherLayerData','speed','updatePositionFailsafeTrajectory','screenWidth','ARRAYSTRUCT','_cached_WeatherEffects_Sleet','embers','_baseTexture','weatherEffectsFirestorm','strokeStyle','WEATHER_ARCTIC_BEAM_COLORS','FQsMp','cyan','copyPluginCmdCustomSettings','hbFPa','fast_icons_4','Dark_DarkOrbs','status','hMPeg','destroy','isVolumeSymbol','upper\x2040%','_cached_WeatherEffects_BloodRain','_cached_WeatherEffects_HouseDust','_lowerWeatherContainer','call','image','rain','_cached_WeatherEffects_AshDebris','#f26522','angleOffset','_targets','sparkle','_speed','OXYZJ','middle\x2080%','constructor','Window_Options_addGeneralOptions','sEtCk','weatherEffectsThunderbolt','weatherEffectsUltravioletBeams','createLinearGradient','_baseHue','lightorbs','angle','_baseTone','upper','Fast_Icons_Left','weatherEffectsTempest','Game_Screen_clearWeather','BasicReplayMemory','_scaleRatioX','lDQBH','transform','#fac4ad','#ff8800','_baseAngle','updateScale','#ccffaa','_opacityFadeInTimeWhole','lower\x20border','context','loadPicture','weatherDensity','worldTransform','updateWeatherLayer','drawLensFlare','rgba(%1,%1,%1,0)','medium_icons_7','WEATHER_SUNBEAM_COLORS','ConfigManager_applyData','weatherEffectsAutumnLeaves','plasmabolt','updateWeatherLayerPower','oMjLB','Fast_Icons_Up','translate','#ffddff','_cached_WeatherEffects_PurpleHaze','giIgG','weatherEffectsXtremeSpeed','spawnLocationX','ESOGv','middle\x2050%','OTRTt','rgba(255,255,255,1)','#959595','General','uPgZH','#888800','#f26c4f','thunderbolt','weatherEffectsBloodRain','Slow_Icons_UpperLeft','rebornSpawnLocation','_cached_WeatherEffects_SunBeam','QtvUr','_cached_WeatherEffects_Snowflakes','Ice_DiamondDust','_weatherLayers','khDea','_maxLevel','pictures','respawnDelayMin','plasmasurge','_cached_WeatherEffects_RainbowOrbs','WEATHER_GREEN_LEAVES_COLORS','advanced','moonbeams','Fire_FlameHaze','gradientFillRect','_cached_WeatherEffects_PastelBrume','lockedID','#ffffbb','left\x2030%','shadowburst','Wind_GreenLeaves','WEATHER_POLLEN_COLORS','fast_icons_6','toxicgas','WEATHER_MOON_BEAM_COLORS','Light_LightOrbs','drawRainbowLensFlare','RegExp','#a3d2e5','#fff2e4','iconHeight','grassygust','Thunder_SpiderLightning','_cached_WeatherEffects_Mist','#aaffcc','Spriteset_Map_createTilemap','rgba(%1,255,%1,1)','updateOpacityEasing','KLYlx','rebornSpriteImage','_cached_WeatherEffects_Sandstorm','drip','calculateScaleY','_cached_WeatherEffects_Balloons','both','none','WEATHER_BALLOON_COLORS','rgba(255,%1,%1,0.5)','drawOvalGradiantCircle','right\x2050%','updateDimmerColor','UpperLower','replace','sprite','_green','setWeatherLayerData','_cached_WeatherEffects_Tempest','drawMultiPointPolygon','_lowerLayerSprites','_cached_WeatherEffects_Aurora','addChild','mist','Medium_Icons_UpperLeft','ReFvj','drawText','totalMinimum','Rvdoy','WEATHER_EARTH_COLORS','_cached_WeatherEffects_LightOrbs','Thunder_Thunderclouds','#fac159','Earth_DustStorm','parameters','slow_icons_8','OFJAY','#222222','#e1e1e1','applyPluginCmdSettingsBasic','_upperWeatherContainer','_xSwayRng','XyDeG','yrABY','_cached_WeatherEffects_CrumblingCave','zAZhp','clone','Ice_Snowflakes','#aaffaa','_lifespan','#603913','ImTOP','getWeatherLayerSprite','spawnOffsetY','WEATHER_UV_BEAM_COLORS','BasicAdjustWeatherPower','Custom','opacityPerPower','fillStyle','slow_icons_5','join','lower\x2080%','screenHeight','right\x20border','AddOption','#a8c54a','WEATHER_SUNLIGHT_COLORS','#821d1c','_cached_WeatherEffects_SmokeClouds','slow_icons_1','prepareGeneratedWeatherImages','Light_PrismBurst','CwKhU','bbDxy','duststorm','updatePositionTrajectory','_trajectoryType','_lockedOffsetY','yFgVS','index','WEATHER_RAINBOW_CLOUD_COLORS','_spinSpeed','#111111','firestorm','lower','_cached_WeatherEffects_GreenLeaves','getTemporaryCanvas','Water_SoapBubbles','#e0dd4c','flamehaze','_opacityFadeInTime','#fde3d9','Ice_GlisteningIce','rebornSpriteScale','_baseScale','followers','upper\x2070%','updatePositionStraightTrajectory','clamp','_debugID','rebornInitialTrajectoryData','WEATHER_CONFETTI_COLORS','_cached_WeatherEffects_IceFog','_cached_WeatherEffects_SmokeFog','_cached_WeatherEffects_Fireflies','updateOpacity','thunderclouds','weatherEffectsSparkle','ySwaySpeed','ReSaQ','opacityFadeInTime','opacityMinimum','#aaccff','icons','Earth_HouseDust','weatherEffectsAurora','moveTo','shadowColor','drawMapleLeaf','smokefog','_blue','Medium_Icons_Mid','bTXhr','isSceneBattle','#00ff00','alCpZ','fast_icons_8'];_0x3eec=function(){return _0x3cafe7;};return _0x3eec();}VisuMZ[label][_0x3cb96a(0x2c4)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x3cb96a(0x50a)]=function(_0x500c01,_0xa85d82){const _0x3c4d8f=_0x3cb96a;for(const _0x5a1db0 in _0xa85d82){if(_0x5a1db0['match'](/(.*):(.*)/i)){const _0x427f44=String(RegExp['$1']),_0x265106=String(RegExp['$2'])[_0x3c4d8f(0x4a9)]()[_0x3c4d8f(0x285)]();let _0x50e572,_0x3040a8,_0x259c01;switch(_0x265106){case'NUM':_0x50e572=_0xa85d82[_0x5a1db0]!==''?Number(_0xa85d82[_0x5a1db0]):0x0;break;case _0x3c4d8f(0x4f2):_0x3040a8=_0xa85d82[_0x5a1db0]!==''?JSON['parse'](_0xa85d82[_0x5a1db0]):[],_0x50e572=_0x3040a8[_0x3c4d8f(0x50b)](_0x59c362=>Number(_0x59c362));break;case _0x3c4d8f(0x1c7):_0x50e572=_0xa85d82[_0x5a1db0]!==''?eval(_0xa85d82[_0x5a1db0]):null;break;case'ARRAYEVAL':_0x3040a8=_0xa85d82[_0x5a1db0]!==''?JSON[_0x3c4d8f(0x259)](_0xa85d82[_0x5a1db0]):[],_0x50e572=_0x3040a8[_0x3c4d8f(0x50b)](_0x2d7705=>eval(_0x2d7705));break;case _0x3c4d8f(0x211):_0x50e572=_0xa85d82[_0x5a1db0]!==''?JSON[_0x3c4d8f(0x259)](_0xa85d82[_0x5a1db0]):'';break;case _0x3c4d8f(0x36c):_0x3040a8=_0xa85d82[_0x5a1db0]!==''?JSON[_0x3c4d8f(0x259)](_0xa85d82[_0x5a1db0]):[],_0x50e572=_0x3040a8[_0x3c4d8f(0x50b)](_0x3dca80=>JSON['parse'](_0x3dca80));break;case'FUNC':_0x50e572=_0xa85d82[_0x5a1db0]!==''?new Function(JSON[_0x3c4d8f(0x259)](_0xa85d82[_0x5a1db0])):new Function('return\x200');break;case _0x3c4d8f(0x2a8):_0x3040a8=_0xa85d82[_0x5a1db0]!==''?JSON['parse'](_0xa85d82[_0x5a1db0]):[],_0x50e572=_0x3040a8['map'](_0x4f974e=>new Function(JSON[_0x3c4d8f(0x259)](_0x4f974e)));break;case _0x3c4d8f(0x1d3):_0x50e572=_0xa85d82[_0x5a1db0]!==''?String(_0xa85d82[_0x5a1db0]):'';break;case'ARRAYSTR':_0x3040a8=_0xa85d82[_0x5a1db0]!==''?JSON[_0x3c4d8f(0x259)](_0xa85d82[_0x5a1db0]):[],_0x50e572=_0x3040a8['map'](_0x2f7f02=>String(_0x2f7f02));break;case _0x3c4d8f(0x1d5):_0x259c01=_0xa85d82[_0x5a1db0]!==''?JSON['parse'](_0xa85d82[_0x5a1db0]):{},_0x50e572=VisuMZ['ConvertParams']({},_0x259c01);break;case _0x3c4d8f(0x39e):_0x3040a8=_0xa85d82[_0x5a1db0]!==''?JSON['parse'](_0xa85d82[_0x5a1db0]):[],_0x50e572=_0x3040a8[_0x3c4d8f(0x50b)](_0x30b0ec=>VisuMZ[_0x3c4d8f(0x50a)]({},JSON[_0x3c4d8f(0x259)](_0x30b0ec)));break;default:continue;}_0x500c01[_0x427f44]=_0x50e572;}}return _0x500c01;},(_0x4b43f5=>{const _0x3027cb=_0x3cb96a,_0x45dbc0=_0x4b43f5['name'];for(const _0x55afa9 of dependencies){if(_0x3027cb(0x2d8)===_0x3027cb(0x3e9))_0x21cb3d['prototype'][_0x3027cb(0x337)][_0x3027cb(0x3b3)](this),this[_0x3027cb(0x5f6)]['addChild'](this['_upperWeatherContainer']);else{if(!Imported[_0x55afa9]){alert(_0x3027cb(0x2a0)[_0x3027cb(0x5a3)](_0x45dbc0,_0x55afa9)),SceneManager[_0x3027cb(0x391)]();break;}}}const _0x4a0162=_0x4b43f5[_0x3027cb(0x34e)];if(_0x4a0162[_0x3027cb(0x1a9)](/\[Version[ ](.*?)\]/i)){const _0x54483c=Number(RegExp['$1']);_0x54483c!==VisuMZ[label][_0x3027cb(0x599)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x3027cb(0x5a3)](_0x45dbc0,_0x54483c)),SceneManager[_0x3027cb(0x391)]());}if(_0x4a0162[_0x3027cb(0x1a9)](/\[Tier[ ](\d+)\]/i)){if(_0x3027cb(0x25a)===_0x3027cb(0x25a)){const _0x4a792f=Number(RegExp['$1']);_0x4a792f<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x3027cb(0x5a3)](_0x45dbc0,_0x4a792f,tier)),SceneManager[_0x3027cb(0x391)]()):tier=Math[_0x3027cb(0x2d0)](_0x4a792f,tier);}else{const _0x3a5915=this[_0x3027cb(0x435)];return _0x3a5915[_0x16cbae['floor'](_0x5d41bf[_0x3027cb(0x1fb)]()*_0x3a5915[_0x3027cb(0x59e)])];}}VisuMZ[_0x3027cb(0x50a)](VisuMZ[label][_0x3027cb(0x2c4)],_0x4b43f5[_0x3027cb(0x442)]);})(pluginData),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x457),_0xa890d=>{const _0x12e1c8=_0x3cb96a;VisuMZ[_0x12e1c8(0x50a)](_0xa890d,_0xa890d);const _0x2eee9a=_0xa890d['Layer'][_0x12e1c8(0x50b)](_0x5b91ba=>(Number(_0x5b91ba)||0x1)[_0x12e1c8(0x482)](0x1,0xa)),_0x38a835=_0xa890d[_0x12e1c8(0x42d)],_0x1e5d95=_0xa890d[_0x12e1c8(0x5ba)]||0x0,_0x228e09=_0xa890d[_0x12e1c8(0x2eb)]||0x1;for(const _0x3c9e52 of _0x2eee9a){if(_0x12e1c8(0x33d)!=='mmweJ')['upper',_0x12e1c8(0x426)][_0x12e1c8(0x4ca)](_0x38a835)&&$gameScreen['adjustWeatherLayerPower'](_0x3c9e52,![],_0x1e5d95,_0x228e09),[_0x12e1c8(0x474),_0x12e1c8(0x426)][_0x12e1c8(0x4ca)](_0x38a835)&&(_0x12e1c8(0x4a0)===_0x12e1c8(0x4a0)?$gameScreen['adjustWeatherLayerPower'](_0x3c9e52,!![],_0x1e5d95,_0x228e09):(_0x1ffa8a['ConvertParams'](_0x52ce9c,_0x3ede9e),_0x3c164c[_0x12e1c8(0x5ca)]='fast_icons_4',_0x3ebc83['WeatherEffects']['applyPluginCmdSettings'](_0x4d42c0)));else{_0x5e63c9=_0x1b8123[_0x12e1c8(0x4a3)](0x1)[_0x12e1c8(0x5d0)]('');_0x2ed06c['length']===0x3&&(_0x3ae9d9=[_0x325639[0x0],_0x2414ea[0x0],_0x2bf643[0x1],_0x428a4b[0x1],_0x2ddd0e[0x2],_0x241a3f[0x2]]);while(_0x41010f[_0x12e1c8(0x59e)]>0x6)_0xf27ff8[_0x12e1c8(0x529)]();return _0x3b4fe0='0x'+_0xa3a42c[_0x12e1c8(0x45c)](''),_0x12e1c8(0x1a3)+[(_0x571378>>0x10&0xff)['clamp'](0x0,0xff),(_0x1c3a96>>0x8&0xff)[_0x12e1c8(0x482)](0x0,0xff),(_0x272a35&0xff)[_0x12e1c8(0x482)](0x0,0xff)][_0x12e1c8(0x45c)](',')+','+_0x450866['clamp'](0x0,0x1)+')';}}if(_0xa890d[_0x12e1c8(0x588)]){const _0x1642b0=$gameTemp[_0x12e1c8(0x52d)]();if(_0x1642b0){if(_0x12e1c8(0x51e)!==_0x12e1c8(0x57d))_0x1642b0[_0x12e1c8(0x548)](_0x228e09||0x1);else{const _0x4526a1=this[_0x12e1c8(0x199)];return _0x4526a1[_0x9c7724[_0x12e1c8(0x2db)](_0x2fc860['random']()*_0x4526a1['length'])];}}}}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'BasicClearWeather',_0x9ffa79=>{const _0x59792f=_0x3cb96a;VisuMZ[_0x59792f(0x50a)](_0x9ffa79,_0x9ffa79);const _0x45a6a3=_0x9ffa79['Layer'][_0x59792f(0x50b)](_0x3f1794=>(Number(_0x3f1794)||0x1)[_0x59792f(0x482)](0x1,0xa)),_0xea9240=_0x9ffa79[_0x59792f(0x42d)],_0x53d85d=_0x9ffa79['Duration']||0x1;for(const _0x55c9ac of _0x45a6a3){['upper',_0x59792f(0x426)][_0x59792f(0x4ca)](_0xea9240)&&$gameScreen[_0x59792f(0x1a6)](_0x55c9ac,![],_0x53d85d),[_0x59792f(0x474),_0x59792f(0x426)]['includes'](_0xea9240)&&$gameScreen[_0x59792f(0x1a6)](_0x55c9ac,!![],_0x53d85d);}if(_0x9ffa79['WaitForCompletion']){if('ZAfSd'!==_0x59792f(0x49a)){const _0x252f1a=$gameTemp[_0x59792f(0x52d)]();if(_0x252f1a){if('rsKSk'!=='CwFpb')_0x252f1a[_0x59792f(0x548)](_0x53d85d||0x1);else{if(this[_0x59792f(0x1a8)]&&this['_cached_WeatherEffects_ToxicGas'][_0x59792f(0x59e)]>=_0x117653[_0x59792f(0x292)]){const _0x31a44c=this[_0x59792f(0x1a8)];return _0x31a44c[_0x24dcb4[_0x59792f(0x2db)](_0x5eb4c3[_0x59792f(0x1fb)]()*_0x31a44c[_0x59792f(0x59e)])];}const _0x527926='#00ff00',_0x54bbd4=0.75,_0x537983=_0x7259e9[_0x59792f(0x29d)](_0x527926,_0x54bbd4),_0x578d81=_0x58ea7b[_0x59792f(0x29d)](_0x537983,_0x54bbd4),_0x55ffcc=_0x46c8bd[_0x59792f(0x29d)](_0x578d81,_0x54bbd4),_0x2d1d54=new _0x18cc54(0x3e8,0x3e8);_0x2d1d54[_0x59792f(0x35d)](0x1f4,0x28a,0xaf,_0x55ffcc,0x10,0x14),_0x2d1d54['drawCloud'](0x1f4,0x1f4,0xc8,_0x537983,0x40,0x19),_0x2d1d54[_0x59792f(0x35d)](0x1f4,0x15e,0xa0,_0x578d81,0x10,0x14),_0x2d1d54[_0x59792f(0x275)]=![];if(_0x48cd06['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x230cd5[_0x59792f(0x582)]('toxicgas');return this[_0x59792f(0x1a8)]=this[_0x59792f(0x1a8)]||[],this['_cached_WeatherEffects_ToxicGas'][_0x59792f(0x2fb)](_0x2d1d54),_0x2d1d54;}}}else{if(this['_cached_WeatherEffects_ShadowBurst']&&_0x10c742['WEATHER_SHADOW_BURST_COLORS'][_0x59792f(0x59e)]<=0x0){const _0x55aa5c=this[_0x59792f(0x22e)];return _0x55aa5c[_0xa37e4c[_0x59792f(0x2db)](_0x56b265[_0x59792f(0x1fb)]()*_0x55aa5c[_0x59792f(0x59e)])];}const _0x5ad3cd=_0x58940c[_0x59792f(0x262)]['pop'](),_0x396ac5=new _0x2f61cd(0x3e8,0x3e8),_0x43b172=_0x396ac5['width']/0x2;_0x396ac5[_0x59792f(0x208)](_0x43b172,_0x43b172,_0x43b172,0x168,_0x5ad3cd,0x0,0x1,0x0),_0x396ac5['_customModified']=![];if(_0x1c969a['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x2c1860['log'](_0x59792f(0x40d));return this[_0x59792f(0x22e)]=this[_0x59792f(0x22e)]||[],this[_0x59792f(0x22e)][_0x59792f(0x2fb)](_0x396ac5),_0x396ac5;}}}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x4bd),_0x127acf=>{const _0x365e26=_0x3cb96a;VisuMZ['ConvertParams'](_0x127acf,_0x127acf);const _0x3e648c=_0x127acf['Layer']['map'](_0x732ee4=>(Number(_0x732ee4)||0x1)[_0x365e26(0x482)](0x1,0xa)),_0x1576ee=_0x127acf[_0x365e26(0x42d)],_0x1c8815=_0x127acf['Duration']||0x1;for(const _0x2e6d1f of _0x3e648c){['upper',_0x365e26(0x426)][_0x365e26(0x4ca)](_0x1576ee)&&$gameScreen['memorizeWeatherLayerData'](_0x2e6d1f,![]),[_0x365e26(0x474),_0x365e26(0x426)]['includes'](_0x1576ee)&&$gameScreen[_0x365e26(0x39a)](_0x2e6d1f,!![]);}}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x5d7),_0x1bc389=>{const _0x148531=_0x3cb96a;VisuMZ[_0x148531(0x50a)](_0x1bc389,_0x1bc389);const _0x5a165f=String(_0x1bc389['WeatherType']||'')['toLowerCase']()[_0x148531(0x285)]();if(_0x5a165f==='')return;let _0x4a8ebe=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']??0x1;while(_0x4a8ebe--){'alCpZ'===_0x148531(0x49d)?ImageManager[_0x148531(0x1ed)](_0x5a165f):(_0x16dd72=_0x33510b+_0x41ba08[_0x148531(0x31f)](_0x2b3ba5)*_0x45ec82,_0x573e0f=_0x2e9762+_0x9226df[_0x148531(0x572)](_0x30f119)*_0x51638b,_0xce8716['lineTo'](_0xd92de8,_0x24c921),_0x46655a+=_0x29b587,_0x5e6f32=_0x59ebc1+_0xeb77b['cos'](_0x56460e)*_0x20682b,_0x4fe32e=_0x5c6715+_0x9b78b9['sin'](_0x3b882b)*_0x170baa,_0x5528ef[_0x148531(0x1d4)](_0x47cf15,_0x2d12cd),_0x44cc82+=_0x1ca9d7);}}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x3cc),_0xccc51f=>{const _0x41050c=_0x3cb96a;VisuMZ['ConvertParams'](_0xccc51f,_0xccc51f);const _0x37d75a=_0xccc51f['Layer'][_0x41050c(0x50b)](_0x236b05=>(Number(_0x236b05)||0x1)[_0x41050c(0x482)](0x1,0xa)),_0x2468b2=_0xccc51f[_0x41050c(0x42d)],_0x1ed6bb=_0xccc51f['Duration']||0x1;for(const _0x4574ef of _0x37d75a){[_0x41050c(0x3c8),_0x41050c(0x426)][_0x41050c(0x4ca)](_0x2468b2)&&$gameScreen[_0x41050c(0x5fc)](_0x4574ef,![],_0x1ed6bb);if(['lower',_0x41050c(0x426)]['includes'](_0x2468b2)){if(_0x41050c(0x4cb)===_0x41050c(0x4cb))$gameScreen[_0x41050c(0x5fc)](_0x4574ef,!![],_0x1ed6bb);else{const _0xfc611f=this[_0x41050c(0x475)];return _0xfc611f[_0x2d1a90[_0x41050c(0x2db)](_0xe83703[_0x41050c(0x1fb)]()*_0xfc611f[_0x41050c(0x59e)])];}}}if(_0xccc51f[_0x41050c(0x588)]){const _0x24bea4=$gameTemp[_0x41050c(0x52d)]();_0x24bea4&&_0x24bea4['wait'](_0x1ed6bb||0x1);}}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],'Fire_Embers',_0x364409=>{const _0x4e9c02=_0x3cb96a;VisuMZ[_0x4e9c02(0x50a)](_0x364409,_0x364409),_0x364409[_0x4e9c02(0x5ca)]=_0x4e9c02(0x3a0),VisuMZ[_0x4e9c02(0x5b2)]['applyPluginCmdSettings'](_0x364409);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Fire_Fireflies',_0x47a09f=>{const _0x18cc0b=_0x3cb96a;VisuMZ[_0x18cc0b(0x50a)](_0x47a09f,_0x47a09f),_0x47a09f['type']='fireflies',VisuMZ[_0x18cc0b(0x5b2)][_0x18cc0b(0x29c)](_0x47a09f);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x228),_0x854c65=>{VisuMZ['ConvertParams'](_0x854c65,_0x854c65),_0x854c65['type']='firestorm',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x854c65);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Fire_Fireworks',_0x42eb3e=>{const _0x50b9c4=_0x3cb96a;VisuMZ[_0x50b9c4(0x50a)](_0x42eb3e,_0x42eb3e),_0x42eb3e[_0x50b9c4(0x5ca)]=_0x50b9c4(0x21c),VisuMZ[_0x50b9c4(0x5b2)][_0x50b9c4(0x29c)](_0x42eb3e);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x407),_0xde0d3a=>{const _0x3e024d=_0x3cb96a;VisuMZ[_0x3e024d(0x50a)](_0xde0d3a,_0xde0d3a),_0xde0d3a[_0x3e024d(0x5ca)]=_0x3e024d(0x479),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0xde0d3a);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x4e7),_0x12b7b1=>{const _0x372bbe=_0x3cb96a;VisuMZ['ConvertParams'](_0x12b7b1,_0x12b7b1),_0x12b7b1[_0x372bbe(0x5ca)]=_0x372bbe(0x331),VisuMZ[_0x372bbe(0x5b2)][_0x372bbe(0x29c)](_0x12b7b1);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x246),_0xb58475=>{const _0x1b1d56=_0x3cb96a;VisuMZ[_0x1b1d56(0x50a)](_0xb58475,_0xb58475),_0xb58475[_0x1b1d56(0x5ca)]='heatclouds',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0xb58475);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x4f1),_0x2031e7=>{const _0x5cf79b=_0x3cb96a;VisuMZ[_0x5cf79b(0x50a)](_0x2031e7,_0x2031e7),_0x2031e7[_0x5cf79b(0x5ca)]=_0x5cf79b(0x5d2),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x2031e7);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],'Fire_ShootingStar',_0x5d51be=>{const _0xf214c9=_0x3cb96a;VisuMZ[_0xf214c9(0x50a)](_0x5d51be,_0x5d51be),_0x5d51be[_0xf214c9(0x5ca)]=_0xf214c9(0x1e6),VisuMZ['WeatherEffects'][_0xf214c9(0x29c)](_0x5d51be);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x51b),_0x4988d9=>{const _0x410837=_0x3cb96a;VisuMZ[_0x410837(0x50a)](_0x4988d9,_0x4988d9),_0x4988d9[_0x410837(0x5ca)]=_0x410837(0x314),VisuMZ[_0x410837(0x5b2)][_0x410837(0x29c)](_0x4988d9);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x2e1),_0x2ec200=>{const _0x2da087=_0x3cb96a;VisuMZ[_0x2da087(0x50a)](_0x2ec200,_0x2ec200),_0x2ec200[_0x2da087(0x5ca)]=_0x2da087(0x212),VisuMZ['WeatherEffects'][_0x2da087(0x29c)](_0x2ec200);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Ice_Aurora',_0x4c9cfc=>{const _0x213912=_0x3cb96a;VisuMZ[_0x213912(0x50a)](_0x4c9cfc,_0x4c9cfc),_0x4c9cfc[_0x213912(0x5ca)]=_0x213912(0x5d3),VisuMZ['WeatherEffects'][_0x213912(0x29c)](_0x4c9cfc);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Ice_Blizzard',_0x5f3e78=>{const _0x1b6f96=_0x3cb96a;VisuMZ[_0x1b6f96(0x50a)](_0x5f3e78,_0x5f3e78),_0x5f3e78[_0x1b6f96(0x5ca)]=_0x1b6f96(0x351),VisuMZ[_0x1b6f96(0x5b2)][_0x1b6f96(0x29c)](_0x5f3e78);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x3fc),_0x422080=>{const _0x3e2d2b=_0x3cb96a;VisuMZ[_0x3e2d2b(0x50a)](_0x422080,_0x422080),_0x422080[_0x3e2d2b(0x5ca)]=_0x3e2d2b(0x589),VisuMZ[_0x3e2d2b(0x5b2)][_0x3e2d2b(0x29c)](_0x422080);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x47c),_0x3d8965=>{const _0x10448c=_0x3cb96a;VisuMZ[_0x10448c(0x50a)](_0x3d8965,_0x3d8965),_0x3d8965['type']=_0x10448c(0x1b9),VisuMZ[_0x10448c(0x5b2)][_0x10448c(0x29c)](_0x3d8965);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x34c),_0x5aed4d=>{const _0x262334=_0x3cb96a;VisuMZ[_0x262334(0x50a)](_0x5aed4d,_0x5aed4d),_0x5aed4d[_0x262334(0x5ca)]=_0x262334(0x604),VisuMZ[_0x262334(0x5b2)][_0x262334(0x29c)](_0x5aed4d);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x4d1),_0x342c63=>{const _0x39a1d5=_0x3cb96a;VisuMZ[_0x39a1d5(0x50a)](_0x342c63,_0x342c63),_0x342c63[_0x39a1d5(0x5ca)]=_0x39a1d5(0x4b6),VisuMZ[_0x39a1d5(0x5b2)][_0x39a1d5(0x29c)](_0x342c63);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x36d),_0x3171ea=>{const _0x141090=_0x3cb96a;VisuMZ[_0x141090(0x50a)](_0x3171ea,_0x3171ea),_0x3171ea['type']=_0x141090(0x52a),VisuMZ[_0x141090(0x5b2)][_0x141090(0x29c)](_0x3171ea);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Ice_SnowClouds',_0x2a2d6e=>{const _0x5d4b3a=_0x3cb96a;VisuMZ[_0x5d4b3a(0x50a)](_0x2a2d6e,_0x2a2d6e),_0x2a2d6e['type']=_0x5d4b3a(0x248),VisuMZ[_0x5d4b3a(0x5b2)][_0x5d4b3a(0x29c)](_0x2a2d6e);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x44f),_0x3c0434=>{const _0x59df26=_0x3cb96a;VisuMZ[_0x59df26(0x50a)](_0x3c0434,_0x3c0434),_0x3c0434[_0x59df26(0x5ca)]='snowflakes',VisuMZ[_0x59df26(0x5b2)][_0x59df26(0x29c)](_0x3c0434);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x1b8),_0x456e9f=>{const _0x2869b7=_0x3cb96a;VisuMZ['ConvertParams'](_0x456e9f,_0x456e9f),_0x456e9f[_0x2869b7(0x5ca)]=_0x2869b7(0x279),VisuMZ['WeatherEffects'][_0x2869b7(0x29c)](_0x456e9f);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Thunder_PlasmaBolt',_0x2a1396=>{const _0x280b3c=_0x3cb96a;VisuMZ[_0x280b3c(0x50a)](_0x2a1396,_0x2a1396),_0x2a1396[_0x280b3c(0x5ca)]=_0x280b3c(0x3e2),VisuMZ['WeatherEffects'][_0x280b3c(0x29c)](_0x2a1396);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x1e4),_0x53ecb8=>{const _0x438a10=_0x3cb96a;VisuMZ[_0x438a10(0x50a)](_0x53ecb8,_0x53ecb8),_0x53ecb8['type']=_0x438a10(0x402),VisuMZ[_0x438a10(0x5b2)][_0x438a10(0x29c)](_0x53ecb8);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],'Thunder_PurpleHaze',_0x213461=>{const _0x446a4f=_0x3cb96a;VisuMZ['ConvertParams'](_0x213461,_0x213461),_0x213461[_0x446a4f(0x5ca)]=_0x446a4f(0x1bb),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x213461);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x41a),_0x57ac3b=>{const _0x41600b=_0x3cb96a;VisuMZ[_0x41600b(0x50a)](_0x57ac3b,_0x57ac3b),_0x57ac3b[_0x41600b(0x5ca)]='spiderbolt',VisuMZ[_0x41600b(0x5b2)][_0x41600b(0x29c)](_0x57ac3b);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x2e4),_0x4a7928=>{const _0x1e5b5f=_0x3cb96a;VisuMZ[_0x1e5b5f(0x50a)](_0x4a7928,_0x4a7928),_0x4a7928['type']=_0x1e5b5f(0x3f5),VisuMZ[_0x1e5b5f(0x5b2)][_0x1e5b5f(0x29c)](_0x4a7928);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Thunder_StaticCharge',_0x28f940=>{const _0x4eb0c3=_0x3cb96a;VisuMZ[_0x4eb0c3(0x50a)](_0x28f940,_0x28f940),_0x28f940[_0x4eb0c3(0x5ca)]=_0x4eb0c3(0x569),VisuMZ[_0x4eb0c3(0x5b2)][_0x4eb0c3(0x29c)](_0x28f940);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x43f),_0x5c8ad7=>{const _0xe77e90=_0x3cb96a;VisuMZ[_0xe77e90(0x50a)](_0x5c8ad7,_0x5c8ad7),_0x5c8ad7[_0xe77e90(0x5ca)]='thunderclouds',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x5c8ad7);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x2b5),_0x2b54e7=>{const _0x49379a=_0x3cb96a;VisuMZ[_0x49379a(0x50a)](_0x2b54e7,_0x2b54e7),_0x2b54e7[_0x49379a(0x5ca)]=_0x49379a(0x510),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x2b54e7);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x541),_0x2ea605=>{const _0x313962=_0x3cb96a;VisuMZ['ConvertParams'](_0x2ea605,_0x2ea605),_0x2ea605[_0x313962(0x5ca)]='ultraviolet',VisuMZ[_0x313962(0x5b2)][_0x313962(0x29c)](_0x2ea605);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x280),_0x33d27c=>{const _0x491d31=_0x3cb96a;VisuMZ['ConvertParams'](_0x33d27c,_0x33d27c),_0x33d27c[_0x491d31(0x5ca)]=_0x491d31(0x511),VisuMZ[_0x491d31(0x5b2)][_0x491d31(0x29c)](_0x33d27c);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Water_CloudBurst',_0x1dce89=>{const _0x31353f=_0x3cb96a;VisuMZ[_0x31353f(0x50a)](_0x1dce89,_0x1dce89),_0x1dce89[_0x31353f(0x5ca)]=_0x31353f(0x216),VisuMZ[_0x31353f(0x5b2)]['applyPluginCmdSettings'](_0x1dce89);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x368),_0x16fad7=>{const _0x474a1e=_0x3cb96a;VisuMZ[_0x474a1e(0x50a)](_0x16fad7,_0x16fad7),_0x16fad7['type']=_0x474a1e(0x423),VisuMZ[_0x474a1e(0x5b2)][_0x474a1e(0x29c)](_0x16fad7);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x4f0),_0x1f7bb4=>{const _0x5319a3=_0x3cb96a;VisuMZ[_0x5319a3(0x50a)](_0x1f7bb4,_0x1f7bb4),_0x1f7bb4[_0x5319a3(0x5ca)]=_0x5319a3(0x437),VisuMZ[_0x5319a3(0x5b2)]['applyPluginCmdSettings'](_0x1f7bb4);}),PluginManager['registerCommand'](pluginData['name'],_0x3cb96a(0x220),_0x61e625=>{const _0x205080=_0x3cb96a;VisuMZ[_0x205080(0x50a)](_0x61e625,_0x61e625),_0x61e625[_0x205080(0x5ca)]=_0x205080(0x3b5),VisuMZ[_0x205080(0x5b2)][_0x205080(0x29c)](_0x61e625);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Water_RainbowArch',_0x338f54=>{const _0xd29da6=_0x3cb96a;VisuMZ[_0xd29da6(0x50a)](_0x338f54,_0x338f54),_0x338f54['type']=_0xd29da6(0x206),VisuMZ[_0xd29da6(0x5b2)][_0xd29da6(0x29c)](_0x338f54);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x2dd),_0x5912ff=>{const _0x13fd5c=_0x3cb96a;VisuMZ['ConvertParams'](_0x5912ff,_0x5912ff),_0x5912ff[_0x13fd5c(0x5ca)]=_0x13fd5c(0x24c),VisuMZ[_0x13fd5c(0x5b2)]['applyPluginCmdSettings'](_0x5912ff);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x53e),_0x207aeb=>{const _0x468ca5=_0x3cb96a;VisuMZ['ConvertParams'](_0x207aeb,_0x207aeb),_0x207aeb[_0x468ca5(0x5ca)]=_0x468ca5(0x2f0),VisuMZ[_0x468ca5(0x5b2)][_0x468ca5(0x29c)](_0x207aeb);}),PluginManager['registerCommand'](pluginData['name'],_0x3cb96a(0x477),_0x598ff8=>{const _0x1dde86=_0x3cb96a;VisuMZ[_0x1dde86(0x50a)](_0x598ff8,_0x598ff8),_0x598ff8['type']=_0x1dde86(0x223),VisuMZ[_0x1dde86(0x5b2)][_0x1dde86(0x29c)](_0x598ff8);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],'Water_Storm',_0x45ea41=>{const _0x59082b=_0x3cb96a;VisuMZ[_0x59082b(0x50a)](_0x45ea41,_0x45ea41),_0x45ea41[_0x59082b(0x5ca)]='storm',VisuMZ[_0x59082b(0x5b2)][_0x59082b(0x29c)](_0x45ea41);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Earth_AcidRain',_0x13498f=>{const _0x165bef=_0x3cb96a;VisuMZ[_0x165bef(0x50a)](_0x13498f,_0x13498f),_0x13498f[_0x165bef(0x5ca)]=_0x165bef(0x2b9),VisuMZ[_0x165bef(0x5b2)][_0x165bef(0x29c)](_0x13498f);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x201),_0x5a5ddc=>{const _0x58bc62=_0x3cb96a;VisuMZ[_0x58bc62(0x50a)](_0x5a5ddc,_0x5a5ddc),_0x5a5ddc['type']='crumblingcave',VisuMZ[_0x58bc62(0x5b2)][_0x58bc62(0x29c)](_0x5a5ddc);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],'Earth_DustClouds',_0x12a178=>{const _0x3ac441=_0x3cb96a;VisuMZ[_0x3ac441(0x50a)](_0x12a178,_0x12a178),_0x12a178['type']=_0x3ac441(0x4c7),VisuMZ['WeatherEffects'][_0x3ac441(0x29c)](_0x12a178);}),PluginManager['registerCommand'](pluginData['name'],_0x3cb96a(0x441),_0x1e379a=>{const _0x78a131=_0x3cb96a;VisuMZ[_0x78a131(0x50a)](_0x1e379a,_0x1e379a),_0x1e379a['type']=_0x78a131(0x46a),VisuMZ[_0x78a131(0x5b2)]['applyPluginCmdSettings'](_0x1e379a);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x492),_0x5e4f6c=>{const _0x124588=_0x3cb96a;VisuMZ[_0x124588(0x50a)](_0x5e4f6c,_0x5e4f6c),_0x5e4f6c[_0x124588(0x5ca)]=_0x124588(0x4b5),VisuMZ[_0x124588(0x5b2)][_0x124588(0x29c)](_0x5e4f6c);}),PluginManager['registerCommand'](pluginData['name'],_0x3cb96a(0x5ae),_0x17cf22=>{const _0xa9de8d=_0x3cb96a;VisuMZ['ConvertParams'](_0x17cf22,_0x17cf22),_0x17cf22[_0xa9de8d(0x5ca)]=_0xa9de8d(0x5d8),VisuMZ[_0xa9de8d(0x5b2)]['applyPluginCmdSettings'](_0x17cf22);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x257),_0x7d0807=>{const _0x4d9662=_0x3cb96a;VisuMZ[_0x4d9662(0x50a)](_0x7d0807,_0x7d0807),_0x7d0807[_0x4d9662(0x5ca)]=_0x4d9662(0x601),VisuMZ[_0x4d9662(0x5b2)][_0x4d9662(0x29c)](_0x7d0807);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x301),_0x29ec5f=>{const _0x692b7f=_0x3cb96a;VisuMZ[_0x692b7f(0x50a)](_0x29ec5f,_0x29ec5f),_0x29ec5f['type']='sandclouds',VisuMZ[_0x692b7f(0x5b2)][_0x692b7f(0x29c)](_0x29ec5f);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x5c2),_0x1c68d4=>{const _0x3e5df2=_0x3cb96a;VisuMZ[_0x3e5df2(0x50a)](_0x1c68d4,_0x1c68d4),_0x1c68d4[_0x3e5df2(0x5ca)]='sandstorm',VisuMZ[_0x3e5df2(0x5b2)][_0x3e5df2(0x29c)](_0x1c68d4);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Earth_ToxicGas',_0x11bbdd=>{const _0xec6ed1=_0x3cb96a;VisuMZ['ConvertParams'](_0x11bbdd,_0x11bbdd),_0x11bbdd[_0xec6ed1(0x5ca)]=_0xec6ed1(0x411),VisuMZ[_0xec6ed1(0x5b2)][_0xec6ed1(0x29c)](_0x11bbdd);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x501),_0x220709=>{const _0x44114a=_0x3cb96a;VisuMZ[_0x44114a(0x50a)](_0x220709,_0x220709),_0x220709[_0x44114a(0x5ca)]='autumnleaves',VisuMZ[_0x44114a(0x5b2)][_0x44114a(0x29c)](_0x220709);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Wind_Balloons',_0x1db2e0=>{const _0x1aebb5=_0x3cb96a;VisuMZ['ConvertParams'](_0x1db2e0,_0x1db2e0),_0x1db2e0[_0x1aebb5(0x5ca)]=_0x1aebb5(0x58c),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x1db2e0);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x5c8),_0x19da3a=>{const _0x17f14e=_0x3cb96a;VisuMZ[_0x17f14e(0x50a)](_0x19da3a,_0x19da3a),_0x19da3a[_0x17f14e(0x5ca)]='cherryblossoms',VisuMZ[_0x17f14e(0x5b2)][_0x17f14e(0x29c)](_0x19da3a);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x4ec),_0x4bd039=>{const _0x27f829=_0x3cb96a;VisuMZ[_0x27f829(0x50a)](_0x4bd039,_0x4bd039),_0x4bd039['type']='dandelionseeds',VisuMZ[_0x27f829(0x5b2)][_0x27f829(0x29c)](_0x4bd039);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x37b),_0x15bef2=>{const _0x20be83=_0x3cb96a;VisuMZ[_0x20be83(0x50a)](_0x15bef2,_0x15bef2),_0x15bef2[_0x20be83(0x5ca)]=_0x20be83(0x419),VisuMZ[_0x20be83(0x5b2)][_0x20be83(0x29c)](_0x15bef2);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x40e),_0x178ec8=>{const _0x2f8376=_0x3cb96a;VisuMZ[_0x2f8376(0x50a)](_0x178ec8,_0x178ec8),_0x178ec8['type']=_0x2f8376(0x298),VisuMZ[_0x2f8376(0x5b2)][_0x2f8376(0x29c)](_0x178ec8);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x35c),_0x3a4712=>{const _0x316f42=_0x3cb96a;VisuMZ[_0x316f42(0x50a)](_0x3a4712,_0x3a4712),_0x3a4712[_0x316f42(0x5ca)]=_0x316f42(0x2f1),VisuMZ[_0x316f42(0x5b2)]['applyPluginCmdSettings'](_0x3a4712);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x5c0),_0x4201d3=>{const _0x1c4458=_0x3cb96a;VisuMZ[_0x1c4458(0x50a)](_0x4201d3,_0x4201d3),_0x4201d3['type']=_0x1c4458(0x550),VisuMZ[_0x1c4458(0x5b2)][_0x1c4458(0x29c)](_0x4201d3);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x2b6),_0x23abdc=>{const _0x2ca735=_0x3cb96a;VisuMZ['ConvertParams'](_0x23abdc,_0x23abdc),_0x23abdc[_0x2ca735(0x5ca)]=_0x2ca735(0x202),VisuMZ[_0x2ca735(0x5b2)][_0x2ca735(0x29c)](_0x23abdc);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Wind_XtremeSpeed',_0x58aa66=>{const _0x1f2e51=_0x3cb96a;VisuMZ['ConvertParams'](_0x58aa66,_0x58aa66),_0x58aa66[_0x1f2e51(0x5ca)]=_0x1f2e51(0x4bb),VisuMZ[_0x1f2e51(0x5b2)][_0x1f2e51(0x29c)](_0x58aa66);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Light_Confetti',_0x6d8f3e=>{const _0x55cd30=_0x3cb96a;VisuMZ[_0x55cd30(0x50a)](_0x6d8f3e,_0x6d8f3e),_0x6d8f3e[_0x55cd30(0x5ca)]=_0x55cd30(0x359),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x6d8f3e);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],'Light_LensFlare',_0x32bb17=>{const _0x4d6e94=_0x3cb96a;VisuMZ['ConvertParams'](_0x32bb17,_0x32bb17),_0x32bb17['type']=_0x4d6e94(0x513),VisuMZ[_0x4d6e94(0x5b2)]['applyPluginCmdSettings'](_0x32bb17);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Light_LightBurst',_0x39eb55=>{const _0x51ab5d=_0x3cb96a;VisuMZ[_0x51ab5d(0x50a)](_0x39eb55,_0x39eb55),_0x39eb55[_0x51ab5d(0x5ca)]=_0x51ab5d(0x5ad),VisuMZ[_0x51ab5d(0x5b2)][_0x51ab5d(0x29c)](_0x39eb55);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x413),_0x3b0d87=>{const _0x2043df=_0x3cb96a;VisuMZ['ConvertParams'](_0x3b0d87,_0x3b0d87),_0x3b0d87['type']=_0x2043df(0x3c5),VisuMZ[_0x2043df(0x5b2)][_0x2043df(0x29c)](_0x3b0d87);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x24a),_0x2497ab=>{const _0x59ee61=_0x3cb96a;VisuMZ['ConvertParams'](_0x2497ab,_0x2497ab),_0x2497ab[_0x59ee61(0x5ca)]='pastelbrume',VisuMZ['WeatherEffects'][_0x59ee61(0x29c)](_0x2497ab);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x467),_0x3167ce=>{const _0x4ca283=_0x3cb96a;VisuMZ['ConvertParams'](_0x3167ce,_0x3167ce),_0x3167ce[_0x4ca283(0x5ca)]=_0x4ca283(0x2c0),VisuMZ['WeatherEffects'][_0x4ca283(0x29c)](_0x3167ce);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x2b4),_0x1f671a=>{const _0x19a7ca=_0x3cb96a;VisuMZ[_0x19a7ca(0x50a)](_0x1f671a,_0x1f671a),_0x1f671a['type']=_0x19a7ca(0x1ca),VisuMZ[_0x19a7ca(0x5b2)]['applyPluginCmdSettings'](_0x1f671a);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x5fd),_0x116069=>{const _0x888245=_0x3cb96a;VisuMZ[_0x888245(0x50a)](_0x116069,_0x116069),_0x116069['type']=_0x888245(0x2b1),VisuMZ[_0x888245(0x5b2)]['applyPluginCmdSettings'](_0x116069);}),PluginManager['registerCommand'](pluginData['name'],'Light_RainbowOrbs',_0x11326d=>{const _0x125156=_0x3cb96a;VisuMZ[_0x125156(0x50a)](_0x11326d,_0x11326d),_0x11326d[_0x125156(0x5ca)]='rainboworbs',VisuMZ[_0x125156(0x5b2)][_0x125156(0x29c)](_0x11326d);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x5ec),_0xb836a5=>{const _0x546e8d=_0x3cb96a;VisuMZ[_0x546e8d(0x50a)](_0xb836a5,_0xb836a5),_0xb836a5['type']=_0x546e8d(0x5db),VisuMZ[_0x546e8d(0x5b2)]['applyPluginCmdSettings'](_0xb836a5);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x2f4),_0x379375=>{const _0x58035f=_0x3cb96a;VisuMZ[_0x58035f(0x50a)](_0x379375,_0x379375),_0x379375[_0x58035f(0x5ca)]='ashdebris',VisuMZ[_0x58035f(0x5b2)][_0x58035f(0x29c)](_0x379375);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Dark_Ashfall',_0x624a4f=>{const _0xa5a22a=_0x3cb96a;VisuMZ[_0xa5a22a(0x50a)](_0x624a4f,_0x624a4f),_0x624a4f[_0xa5a22a(0x5ca)]=_0xa5a22a(0x5b4),VisuMZ['WeatherEffects'][_0xa5a22a(0x29c)](_0x624a4f);}),PluginManager['registerCommand'](pluginData['name'],_0x3cb96a(0x362),_0x11344d=>{const _0x2f5d93=_0x3cb96a;VisuMZ[_0x2f5d93(0x50a)](_0x11344d,_0x11344d),_0x11344d[_0x2f5d93(0x5ca)]=_0x2f5d93(0x32d),VisuMZ[_0x2f5d93(0x5b2)][_0x2f5d93(0x29c)](_0x11344d);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x3aa),_0x25fc73=>{const _0x1866ee=_0x3cb96a;VisuMZ[_0x1866ee(0x50a)](_0x25fc73,_0x25fc73),_0x25fc73[_0x1866ee(0x5ca)]=_0x1866ee(0x375),VisuMZ[_0x1866ee(0x5b2)][_0x1866ee(0x29c)](_0x25fc73);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Dark_Fumes',_0x44711a=>{const _0x25f6a8=_0x3cb96a;VisuMZ[_0x25f6a8(0x50a)](_0x44711a,_0x44711a),_0x44711a[_0x25f6a8(0x5ca)]=_0x25f6a8(0x5fa),VisuMZ[_0x25f6a8(0x5b2)][_0x25f6a8(0x29c)](_0x44711a);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x2e2),_0x1fb98b=>{const _0x3f16a0=_0x3cb96a;VisuMZ[_0x3f16a0(0x50a)](_0x1fb98b,_0x1fb98b),_0x1fb98b[_0x3f16a0(0x5ca)]=_0x3f16a0(0x406),VisuMZ['WeatherEffects'][_0x3f16a0(0x29c)](_0x1fb98b);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x227),_0x3933a4=>{const _0x32e330=_0x3cb96a;VisuMZ[_0x32e330(0x50a)](_0x3933a4,_0x3933a4),_0x3933a4[_0x32e330(0x5ca)]=_0x32e330(0x40d),VisuMZ[_0x32e330(0x5b2)]['applyPluginCmdSettings'](_0x3933a4);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x4a6),_0x26650e=>{const _0x1e34d7=_0x3cb96a;VisuMZ[_0x1e34d7(0x50a)](_0x26650e,_0x26650e),_0x26650e['type']=_0x1e34d7(0x497),VisuMZ['WeatherEffects'][_0x1e34d7(0x29c)](_0x26650e);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x5b5),_0x593fcd=>{const _0x3835aa=_0x3cb96a;VisuMZ['ConvertParams'](_0x593fcd,_0x593fcd),_0x593fcd[_0x3835aa(0x5ca)]=_0x3835aa(0x4dd),VisuMZ[_0x3835aa(0x5b2)][_0x3835aa(0x29c)](_0x593fcd);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x2c6),_0x2dfdac=>{const _0x415967=_0x3cb96a;VisuMZ[_0x415967(0x50a)](_0x2dfdac,_0x2dfdac),_0x2dfdac[_0x415967(0x5ca)]=_0x415967(0x2c7),VisuMZ['WeatherEffects'][_0x415967(0x29c)](_0x2dfdac);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x2c1),_0x3d5712=>{const _0x1ea684=_0x3cb96a;VisuMZ[_0x1ea684(0x50a)](_0x3d5712,_0x3d5712),_0x3d5712[_0x1ea684(0x5ca)]='slow_icons_2',VisuMZ[_0x1ea684(0x5b2)][_0x1ea684(0x29c)](_0x3d5712);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x587),_0x2cbc13=>{const _0x365509=_0x3cb96a;VisuMZ[_0x365509(0x50a)](_0x2cbc13,_0x2cbc13),_0x2cbc13[_0x365509(0x5ca)]=_0x365509(0x5da),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x2cbc13);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Slow_Icons_Right',_0x432a7a=>{const _0x36b967=_0x3cb96a;VisuMZ[_0x36b967(0x50a)](_0x432a7a,_0x432a7a),_0x432a7a['type']=_0x36b967(0x28c),VisuMZ['WeatherEffects'][_0x36b967(0x29c)](_0x432a7a);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Slow_Icons_LowerRight',_0x3078cf=>{const _0x518a13=_0x3cb96a;VisuMZ[_0x518a13(0x50a)](_0x3078cf,_0x3078cf),_0x3078cf[_0x518a13(0x5ca)]=_0x518a13(0x5b1),VisuMZ[_0x518a13(0x5b2)][_0x518a13(0x29c)](_0x3078cf);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x4d5),_0x1551ff=>{const _0x2e115f=_0x3cb96a;VisuMZ[_0x2e115f(0x50a)](_0x1551ff,_0x1551ff),_0x1551ff[_0x2e115f(0x5ca)]=_0x2e115f(0x1c3),VisuMZ[_0x2e115f(0x5b2)]['applyPluginCmdSettings'](_0x1551ff);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x2a9),_0x6c3b83=>{const _0x11d5c1=_0x3cb96a;VisuMZ[_0x11d5c1(0x50a)](_0x6c3b83,_0x6c3b83),_0x6c3b83[_0x11d5c1(0x5ca)]=_0x11d5c1(0x465),VisuMZ[_0x11d5c1(0x5b2)][_0x11d5c1(0x29c)](_0x6c3b83);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x5df),_0x54e388=>{const _0x1bb892=_0x3cb96a;VisuMZ[_0x1bb892(0x50a)](_0x54e388,_0x54e388),_0x54e388['type']='slow_icons_4',VisuMZ[_0x1bb892(0x5b2)][_0x1bb892(0x29c)](_0x54e388);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x3f7),_0xd96264=>{const _0x4b381b=_0x3cb96a;VisuMZ['ConvertParams'](_0xd96264,_0xd96264),_0xd96264[_0x4b381b(0x5ca)]=_0x4b381b(0x528),VisuMZ[_0x4b381b(0x5b2)][_0x4b381b(0x29c)](_0xd96264);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Slow_Icons_Mid',_0x5d22f6=>{const _0x651c53=_0x3cb96a;VisuMZ['ConvertParams'](_0x5d22f6,_0x5d22f6),_0x5d22f6['type']='slow_icons_5',VisuMZ[_0x651c53(0x5b2)][_0x651c53(0x29c)](_0x5d22f6);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x5e4),_0x19d911=>{const _0x1ada07=_0x3cb96a;VisuMZ[_0x1ada07(0x50a)](_0x19d911,_0x19d911),_0x19d911['type']=_0x1ada07(0x242),VisuMZ[_0x1ada07(0x5b2)][_0x1ada07(0x29c)](_0x19d911);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],'Medium_Icons_UpperRight',_0x4b9b0a=>{const _0x3e3f93=_0x3cb96a;VisuMZ[_0x3e3f93(0x50a)](_0x4b9b0a,_0x4b9b0a),_0x4b9b0a[_0x3e3f93(0x5ca)]=_0x3e3f93(0x33a),VisuMZ[_0x3e3f93(0x5b2)][_0x3e3f93(0x29c)](_0x4b9b0a);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x261),_0x430a21=>{const _0x490732=_0x3cb96a;VisuMZ[_0x490732(0x50a)](_0x430a21,_0x430a21),_0x430a21['type']=_0x490732(0x339),VisuMZ[_0x490732(0x5b2)]['applyPluginCmdSettings'](_0x430a21);}),PluginManager['registerCommand'](pluginData['name'],_0x3cb96a(0x54b),_0x12a0ad=>{const _0x113d3f=_0x3cb96a;VisuMZ[_0x113d3f(0x50a)](_0x12a0ad,_0x12a0ad),_0x12a0ad[_0x113d3f(0x5ca)]=_0x113d3f(0x579),VisuMZ[_0x113d3f(0x5b2)]['applyPluginCmdSettings'](_0x12a0ad);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Medium_Icons_Down',_0x23fbe5=>{const _0x1deb64=_0x3cb96a;VisuMZ[_0x1deb64(0x50a)](_0x23fbe5,_0x23fbe5),_0x23fbe5[_0x1deb64(0x5ca)]='medium_icons_2',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x23fbe5);}),PluginManager['registerCommand'](pluginData['name'],_0x3cb96a(0x349),_0x4575b2=>{const _0x52caba=_0x3cb96a;VisuMZ[_0x52caba(0x50a)](_0x4575b2,_0x4575b2),_0x4575b2[_0x52caba(0x5ca)]=_0x52caba(0x373),VisuMZ[_0x52caba(0x5b2)][_0x52caba(0x29c)](_0x4575b2);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],'Medium_Icons_Left',_0x593265=>{const _0x5d886e=_0x3cb96a;VisuMZ['ConvertParams'](_0x593265,_0x593265),_0x593265['type']=_0x5d886e(0x2c8),VisuMZ[_0x5d886e(0x5b2)]['applyPluginCmdSettings'](_0x593265);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x438),_0x688657=>{const _0x37bf13=_0x3cb96a;VisuMZ[_0x37bf13(0x50a)](_0x688657,_0x688657),_0x688657[_0x37bf13(0x5ca)]=_0x37bf13(0x3de),VisuMZ[_0x37bf13(0x5b2)][_0x37bf13(0x29c)](_0x688657);}),PluginManager[_0x3cb96a(0x19d)](pluginData['name'],_0x3cb96a(0x499),_0x5e13fd=>{const _0x479411=_0x3cb96a;VisuMZ[_0x479411(0x50a)](_0x5e13fd,_0x5e13fd),_0x5e13fd[_0x479411(0x5ca)]=_0x479411(0x24f),VisuMZ[_0x479411(0x5b2)][_0x479411(0x29c)](_0x5e13fd);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x3e5),_0x1bbd72=>{const _0x30e27f=_0x3cb96a;VisuMZ[_0x30e27f(0x50a)](_0x1bbd72,_0x1bbd72),_0x1bbd72[_0x30e27f(0x5ca)]=_0x30e27f(0x326),VisuMZ[_0x30e27f(0x5b2)]['applyPluginCmdSettings'](_0x1bbd72);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x1c6),_0x5e1f8c=>{const _0x2a3682=_0x3cb96a;VisuMZ['ConvertParams'](_0x5e1f8c,_0x5e1f8c),_0x5e1f8c['type']=_0x2a3682(0x534),VisuMZ[_0x2a3682(0x5b2)][_0x2a3682(0x29c)](_0x5e1f8c);}),PluginManager['registerCommand'](pluginData['name'],'Fast_Icons_Right',_0x4dab95=>{const _0x455a0c=_0x3cb96a;VisuMZ[_0x455a0c(0x50a)](_0x4dab95,_0x4dab95),_0x4dab95[_0x455a0c(0x5ca)]=_0x455a0c(0x410),VisuMZ[_0x455a0c(0x5b2)][_0x455a0c(0x29c)](_0x4dab95);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],'Fast_Icons_LowerRight',_0x1bd3ca=>{const _0x324101=_0x3cb96a;VisuMZ['ConvertParams'](_0x1bd3ca,_0x1bd3ca),_0x1bd3ca[_0x324101(0x5ca)]=_0x324101(0x516),VisuMZ[_0x324101(0x5b2)][_0x324101(0x29c)](_0x1bd3ca);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x37a),_0x19c8d6=>{const _0x1a578f=_0x3cb96a;VisuMZ[_0x1a578f(0x50a)](_0x19c8d6,_0x19c8d6),_0x19c8d6[_0x1a578f(0x5ca)]=_0x1a578f(0x326),VisuMZ[_0x1a578f(0x5b2)][_0x1a578f(0x29c)](_0x19c8d6);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x50e),_0x12dec6=>{const _0x1082c0=_0x3cb96a;VisuMZ['ConvertParams'](_0x12dec6,_0x12dec6),_0x12dec6['type']=_0x1082c0(0x5d1),VisuMZ[_0x1082c0(0x5b2)][_0x1082c0(0x29c)](_0x12dec6);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x3c9),_0x1cb7fb=>{const _0x489765=_0x3cb96a;VisuMZ[_0x489765(0x50a)](_0x1cb7fb,_0x1cb7fb),_0x1cb7fb['type']=_0x489765(0x3a9),VisuMZ[_0x489765(0x5b2)][_0x489765(0x29c)](_0x1cb7fb);}),PluginManager['registerCommand'](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x256),_0x204497=>{const _0x153083=_0x3cb96a;VisuMZ[_0x153083(0x50a)](_0x204497,_0x204497),_0x204497[_0x153083(0x5ca)]='fast_icons_7',VisuMZ[_0x153083(0x5b2)]['applyPluginCmdSettings'](_0x204497);}),PluginManager[_0x3cb96a(0x19d)](pluginData[_0x3cb96a(0x30f)],_0x3cb96a(0x559),_0x17dfd3=>{const _0x216af3=_0x3cb96a;VisuMZ['ConvertParams'](_0x17dfd3,_0x17dfd3),_0x17dfd3[_0x216af3(0x5ca)]=_0x216af3(0x25b),VisuMZ[_0x216af3(0x5b2)][_0x216af3(0x29c)](_0x17dfd3);}),VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x415)]={'NoWeather':/<NO WEATHER>/gi},Weather[_0x3cb96a(0x23f)]=0xa,VisuMZ[_0x3cb96a(0x5b2)]['Weather_update']=Weather[_0x3cb96a(0x356)][_0x3cb96a(0x4b1)],Weather[_0x3cb96a(0x356)][_0x3cb96a(0x4b1)]=function(){const _0x5d31e3=_0x3cb96a;this[_0x5d31e3(0x5af)](),VisuMZ[_0x5d31e3(0x5b2)][_0x5d31e3(0x4aa)][_0x5d31e3(0x3b3)](this);},Weather[_0x3cb96a(0x356)][_0x3cb96a(0x2ba)]=function(){const _0x336f19=_0x3cb96a;this[_0x336f19(0x5ee)]=new Bitmap(0x1,0x1),this[_0x336f19(0x2e9)]=new Bitmap(0x1,0x1),this[_0x336f19(0x5d5)]=new Bitmap(0x1,0x1);},Weather['prototype']['_updateDimmer']=function(){const _0x2480d0=_0x3cb96a;if(!this[_0x2480d0(0x249)])return;this[_0x2480d0(0x42c)](),this[_0x2480d0(0x243)]();},Weather[_0x3cb96a(0x356)][_0x3cb96a(0x2ce)]=function(){const _0x2cf332=_0x3cb96a,_0x362503=this[_0x2cf332(0x5f1)]();while(this[_0x2cf332(0x23d)][_0x2cf332(0x59e)]<_0x362503)this[_0x2cf332(0x5a8)]();while(this['_sprites']['length']>_0x362503)this[_0x2cf332(0x386)]();for(const _0x34b59f of this[_0x2cf332(0x23d)]){'ClGIN'!==_0x2cf332(0x539)?(_0x5d7923[_0x2cf332(0x50a)](_0x5593ac,_0x1d3244),_0x4657c9[_0x2cf332(0x5ca)]='sootfall',_0x3c8261[_0x2cf332(0x5b2)][_0x2cf332(0x29c)](_0x4eee62)):_0x34b59f[_0x2cf332(0x4b1)]();}},Weather[_0x3cb96a(0x356)][_0x3cb96a(0x5a8)]=function(){const _0x504b6d=_0x3cb96a,_0x5d37fe=new Sprite_WeatherParticle(this,this[_0x504b6d(0x23d)][_0x504b6d(0x59e)]);this[_0x504b6d(0x23d)][_0x504b6d(0x2fb)](_0x5d37fe),this[_0x504b6d(0x436)](_0x5d37fe);},Weather[_0x3cb96a(0x356)][_0x3cb96a(0x3ad)]=function(){},Weather[_0x3cb96a(0x356)]['setLayerData']=function(_0x4411c3,_0x1e7b65){const _0x5a6232=_0x3cb96a;this[_0x5a6232(0x4bc)]=_0x4411c3,this['_lowerLayer']=_0x1e7b65||![];},Weather[_0x3cb96a(0x356)][_0x3cb96a(0x52c)]=function(){const _0x527197=_0x3cb96a;return $gameScreen['getWeatherLayerData'](this[_0x527197(0x4bc)],this[_0x527197(0x5c4)]);},Weather['prototype'][_0x3cb96a(0x5af)]=function(){const _0x2f1b43=_0x3cb96a,_0x4ab34a=this[_0x2f1b43(0x52c)]();if(!_0x4ab34a)return;this[_0x2f1b43(0x5ca)]=_0x4ab34a[_0x2f1b43(0x5ca)],this[_0x2f1b43(0x23c)]=_0x4ab34a[_0x2f1b43(0x23c)],$gameMap&&$gameMap[_0x2f1b43(0x1f5)]()&&(this[_0x2f1b43(0x23c)]=0x0);},Weather[_0x3cb96a(0x356)]['updatePosition']=function(){const _0x4a5718=_0x3cb96a;if(SceneManager['isSceneBattle']())return;this['origin']['x']=$gameMap[_0x4a5718(0x1c1)]()*$gameMap[_0x4a5718(0x4c6)](),this[_0x4a5718(0x383)]['y']=$gameMap[_0x4a5718(0x585)]()*$gameMap[_0x4a5718(0x570)]();},Weather[_0x3cb96a(0x356)]['updateDimmerColor']=function(){const _0xe45130=_0x3cb96a;if(this[_0xe45130(0x52c)]()[_0xe45130(0x5ca)]===_0xe45130(0x427))return;if(this[_0xe45130(0x1ad)]===this[_0xe45130(0x52c)]()[_0xe45130(0x4e0)][_0xe45130(0x1a7)])return;const _0x17d7e5=this['data']()['duration'];let _0x3f1d3a=this[_0xe45130(0x52c)]()[_0xe45130(0x4e0)]['color'];this[_0xe45130(0x1ad)]=_0x3f1d3a;if(_0x17d7e5>0x0){const _0x151255=[this[_0xe45130(0x249)][_0xe45130(0x33e)],this['_dimmerSprite'][_0xe45130(0x430)],this[_0xe45130(0x249)][_0xe45130(0x498)]],_0x59c349=ColorManager[_0xe45130(0x399)](_0x3f1d3a);for(let _0x1ec8b9=0x0;_0x1ec8b9<0x3;_0x1ec8b9++){if(_0xe45130(0x3fa)===_0xe45130(0x3fa))_0x151255[_0x1ec8b9]=Math['round']((_0x151255[_0x1ec8b9]*(_0x17d7e5-0x1)+_0x59c349[_0x1ec8b9])/_0x17d7e5);else{const _0x13b164=this[_0xe45130(0x49f)];return _0x13b164[_0xca65df[_0xe45130(0x2db)](_0x163112[_0xe45130(0x1fb)]()*_0x13b164[_0xe45130(0x59e)])];}}this[_0xe45130(0x1ad)]=ColorManager['arrayToHex'](_0x151255);}const _0x3823d4=ColorManager['hexToArray'](this[_0xe45130(0x1ad)]);this[_0xe45130(0x249)][_0xe45130(0x4c3)](_0x3823d4[0x0]||0x0,_0x3823d4[0x1]||0x0,_0x3823d4[0x2]||0x0);},Weather['prototype'][_0x3cb96a(0x243)]=function(){const _0x15d20d=_0x3cb96a,_0x505bfa=this['data']()[_0x15d20d(0x33b)],_0x3b9b21=this['data']()[_0x15d20d(0x4e0)];let _0x872f62=_0x3b9b21[_0x15d20d(0x48f)]+_0x3b9b21[_0x15d20d(0x459)]*this[_0x15d20d(0x52c)]()['powerTarget'];if(this[_0x15d20d(0x23c)]<=0x0)_0x872f62=0x0;let _0x135d1f=_0x872f62;_0x505bfa>0x0&&(_0x15d20d(0x5ea)===_0x15d20d(0x2ca)?(this[_0x15d20d(0x5ca)]=_0x15d20d(0x3ba),this['_lifespan']=_0x19aa36[_0x15d20d(0x5e6)](0x1e)+0x3c,this[_0x15d20d(0x1e8)]=this[_0x15d20d(0x451)],this['_lastType']=_0x15d20d(0x3ba),this[_0x15d20d(0x1e0)]={},this[_0x15d20d(0x3cd)]=0x1,this[_0x15d20d(0x5f2)]=0x1,this[_0x15d20d(0x2f9)]=0x1,this[_0x15d20d(0x1bf)]=0xff,this['_realOpacity']=0xff,this[_0x15d20d(0x32e)]=_0x15d20d(0x1c0),this[_0x15d20d(0x47a)]=0x6,this[_0x15d20d(0x3d5)]=0x6,this[_0x15d20d(0x46c)]=_0x15d20d(0x58b),this[_0x15d20d(0x3bb)]=0x0,this[_0x15d20d(0x3d2)]=0x0,this[_0x15d20d(0x2e7)]=0x0,this['_alignAngle']=![],this[_0x15d20d(0x2cf)]=0x0,this[_0x15d20d(0x531)]=0x0,this['_angleSwayRange']=0x0,this[_0x15d20d(0x310)]=0x0,this[_0x15d20d(0x471)]=_0x564a3d[_0x15d20d(0x5e6)](0x3)+0x2,this[_0x15d20d(0x316)]=0x0,this['_ySwayRange']=0x0,this[_0x15d20d(0x388)]=!![],this[_0x15d20d(0x200)]=_0x59838c[_0x15d20d(0x48b)](),this[_0x15d20d(0x200)][_0x15d20d(0x56a)](this['setFullBitmapFrame']['bind'](this)),this[_0x15d20d(0x4cc)]=0x1,this[_0x15d20d(0x2ad)]=0x0,this[_0x15d20d(0x57e)]=[0x0,0x0,0x0,0x0],this[_0x15d20d(0x32b)]()):_0x135d1f=(this[_0x15d20d(0x249)][_0x15d20d(0x1bf)]*(_0x505bfa-0x1)+_0x872f62)/_0x505bfa),$gameMap&&$gameMap[_0x15d20d(0x1f5)]()&&(_0x135d1f=0x0),this[_0x15d20d(0x249)][_0x15d20d(0x1bf)]=_0x135d1f;},Weather['prototype'][_0x3cb96a(0x5f1)]=function(){const _0xebe2ea=_0x3cb96a;if($gameMap&&$gameMap[_0xebe2ea(0x1f5)]())return 0x0;if(this[_0xebe2ea(0x23c)]<0x1)return 0x0;const _0x58c0d6=this[_0xebe2ea(0x52c)](),_0x59027f=_0x58c0d6[_0xebe2ea(0x42f)][_0xebe2ea(0x43b)]||0x0,_0x4f3f04=_0x58c0d6[_0xebe2ea(0x42f)][_0xebe2ea(0x2ee)]||0x0,_0x36d4fe=(ConfigManager[_0xebe2ea(0x3d9)]??0x64)/0x64,_0x1a0e7b=Math[_0xebe2ea(0x30e)](this[_0xebe2ea(0x23c)]*_0x4f3f04*_0x36d4fe)+_0x59027f;return Math['ceil'](_0x1a0e7b);},ConfigManager[_0x3cb96a(0x3d9)]=0x64,VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x59b)]=ConfigManager[_0x3cb96a(0x304)],ConfigManager[_0x3cb96a(0x304)]=function(){const _0x2bfe28=_0x3cb96a,_0x2ecd95=VisuMZ[_0x2bfe28(0x5b2)][_0x2bfe28(0x59b)][_0x2bfe28(0x3b3)](this);return _0x2ecd95[_0x2bfe28(0x3d9)]=this[_0x2bfe28(0x3d9)],_0x2ecd95;},VisuMZ[_0x3cb96a(0x5b2)]['ConfigManager_applyData']=ConfigManager[_0x3cb96a(0x2d6)],ConfigManager[_0x3cb96a(0x2d6)]=function(_0x443040){const _0x3599f3=_0x3cb96a;VisuMZ['WeatherEffects'][_0x3599f3(0x3e0)]['call'](this,_0x443040);if(_0x3599f3(0x3d9)in _0x443040)this['weatherDensity']=_0x443040['weatherDensity'];else{if('bJwxq'===_0x3599f3(0x5f3)){const _0x78dd94=this[_0x3599f3(0x26f)];return _0x78dd94[_0x1a1bf6['floor'](_0x31eddf[_0x3599f3(0x1fb)]()*_0x78dd94[_0x3599f3(0x59e)])];}else this[_0x3599f3(0x3d9)]=0x64;}},ImageManager[_0x3cb96a(0x2af)]=VisuMZ[_0x3cb96a(0x5b2)]['Settings'][_0x3cb96a(0x3f1)][_0x3cb96a(0x381)]??![],ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']=VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x2c4)][_0x3cb96a(0x3f1)][_0x3cb96a(0x36b)]||0x10,ImageManager[_0x3cb96a(0x1fe)]=VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x2c4)]['General']['SmoothIcons'],ImageManager[_0x3cb96a(0x36f)]=![],ImageManager['WEATHER_EFFECTS_ICON_GENERATED']=['🐄','🐕','🐖','🐏','🐑','🐐','🐇','🐎','🐒','🐓','🦆','🐈','🐁','🐀','🦢','🐢'],VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x20d)]=Scene_Boot[_0x3cb96a(0x356)]['loadSystemImages'],Scene_Boot[_0x3cb96a(0x356)]['loadSystemImages']=function(){const _0x14c683=_0x3cb96a;VisuMZ[_0x14c683(0x5b2)][_0x14c683(0x20d)]['call'](this),ImageManager['prepareGeneratedWeatherImages']();},ImageManager[_0x3cb96a(0x5ce)]=function(){const _0x23dedf=_0x3cb96a;if(Utils['isMobileDevice']())return![];return ImageManager[_0x23dedf(0x2af)];},ImageManager[_0x3cb96a(0x466)]=function(){const _0x3daadb=_0x3cb96a;if(!ImageManager[_0x3daadb(0x5ce)]())return;ImageManager[_0x3daadb(0x251)]();const _0x2b99b5=[_0x3daadb(0x427)];for(const _0x1e8141 of _0x2b99b5){this['getGeneratedWeatherParticle'](_0x1e8141);}let _0x525801=0x0;const _0x27238c=['embers','fireflies',_0x3daadb(0x473),_0x3daadb(0x331),_0x3daadb(0x1d7),_0x3daadb(0x314),_0x3daadb(0x479),'fireworks','shootingstars',_0x3daadb(0x351),_0x3daadb(0x52a),_0x3daadb(0x556),_0x3daadb(0x248),'icefog',_0x3daadb(0x589),_0x3daadb(0x5d3),_0x3daadb(0x212),_0x3daadb(0x4b6),'thunderbolt',_0x3daadb(0x1bb),'thunderclouds','ultraviolet',_0x3daadb(0x1f6),'plasmabolt','plasmasurge',_0x3daadb(0x511),_0x3daadb(0x3b5),_0x3daadb(0x2d1),_0x3daadb(0x24c),_0x3daadb(0x437),_0x3daadb(0x423),_0x3daadb(0x223),_0x3daadb(0x206),'sandstorm',_0x3daadb(0x5d8),'duststorm',_0x3daadb(0x4c7),_0x3daadb(0x536),_0x3daadb(0x4a4),_0x3daadb(0x411),'acidrain',_0x3daadb(0x601),_0x3daadb(0x4b5),_0x3daadb(0x59d),'cherryblossoms',_0x3daadb(0x298),_0x3daadb(0x577),_0x3daadb(0x202),_0x3daadb(0x2f1),_0x3daadb(0x419),_0x3daadb(0x4bb),_0x3daadb(0x58c),_0x3daadb(0x5db),'pastelbrume',_0x3daadb(0x2b1),_0x3daadb(0x346),_0x3daadb(0x3c5),_0x3daadb(0x359),_0x3daadb(0x1ca),_0x3daadb(0x513),_0x3daadb(0x2a3),'ashfall',_0x3daadb(0x2c7),_0x3daadb(0x497),'darkorbs',_0x3daadb(0x32d),_0x3daadb(0x406),_0x3daadb(0x4dd),'shadowburst','fumes',_0x3daadb(0x3ba),_0x3daadb(0x57b),'icons'];_0x525801=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS'];while(_0x525801--){if(_0x3daadb(0x1eb)===_0x3daadb(0x1eb))for(const _0x3468d1 of _0x27238c){this['getGeneratedWeatherParticle'](_0x3468d1);}else{if(this[_0x3daadb(0x4ed)]&&this['_cached_WeatherEffects_CloudBurst'][_0x3daadb(0x59e)]>=_0xf8385[_0x3daadb(0x292)]){const _0x40608d=this[_0x3daadb(0x4ed)];return _0x40608d[_0x286518['floor'](_0x322e3d['random']()*_0x40608d[_0x3daadb(0x59e)])];}const _0xbc86f8=new _0x2fdea4(0x1f4,0x1f4);let _0x4d724e=_0x31610e[_0x3daadb(0x2b3)]([_0x9e0f6[_0x3daadb(0x5e6)](0x20)+0x10,0x18,_0x18f52f[_0x3daadb(0x5e6)](0x20)+0x10]),_0x577462=_0x3a82dd[_0x3daadb(0x2b3)]([_0x48dc95['randomInt'](0x30)+0x20,0x30,_0x3a43ae[_0x3daadb(0x5e6)](0x30)+0x20]),_0x2a2c31=_0x18282c[_0x3daadb(0x2b3)]([_0x27a074[_0x3daadb(0x5e6)](0x40)+0x30,0x60,_0x15f44f[_0x3daadb(0x5e6)](0x40)+0x30]);_0xbc86f8['drawCloud'](0xfa,0x15e,0x4b,_0x4d724e,0x10,0x14),_0xbc86f8[_0x3daadb(0x35d)](0xfa,0xfa,0x64,_0x2a2c31,0x40,0x19),_0xbc86f8[_0x3daadb(0x35d)](0xfa,0xfa,0x3c,_0x577462,0x10,0x14);const _0x312185=_0x3daadb(0x557),_0x36052a='rgba(255,255,255,1)',_0x3ef9c1=_0xbc86f8['width'],_0xdc1bf3=_0xbc86f8[_0x3daadb(0x27f)],_0x2a799e=0x64,_0x21c13e=_0x2a799e/0x2,_0x4f0942=0x2;let _0x5e860f=0x20;while(_0x5e860f--){const _0x25f3d0=_0x2624f4[_0x3daadb(0x5e6)](_0x3ef9c1-_0x2a799e)+_0x2a799e,_0x536a50=_0x583542[_0x3daadb(0x5e6)](_0xdc1bf3-_0x4f0942)+_0x4f0942;_0xbc86f8[_0x3daadb(0x546)]=_0x5a3700['randomInt'](0x40)+0xc0,_0xbc86f8[_0x3daadb(0x408)](_0x25f3d0,_0x536a50,_0x2f144b['ceil'](_0x21c13e),_0x4f0942,_0x312185,_0x36052a),_0xbc86f8[_0x3daadb(0x376)](_0x25f3d0+_0x55dae0['ceil'](_0x21c13e),_0x536a50,_0x2a865b[_0x3daadb(0x2db)](_0x21c13e),_0x4f0942,_0x36052a);}_0xbc86f8[_0x3daadb(0x275)]=![];if(_0x5824df[_0x3daadb(0x36f)])_0x13381a['log'](_0x3daadb(0x216));return this['_cached_WeatherEffects_CloudBurst']=this['_cached_WeatherEffects_CloudBurst']||[],this[_0x3daadb(0x4ed)][_0x3daadb(0x2fb)](_0xbc86f8),_0xbc86f8;}}const _0x34475f=[_0x3daadb(0x3f5),_0x3daadb(0x3f5),'aurora',_0x3daadb(0x5d3),_0x3daadb(0x5d3),_0x3daadb(0x5d3),_0x3daadb(0x1e6),_0x3daadb(0x1e6)];_0x525801=ImageManager[_0x3daadb(0x292)];while(_0x525801--){for(const _0x34a137 of _0x34475f){_0x3daadb(0x1a4)==='itVvq'?([_0x3daadb(0x3c8),_0x3daadb(0x426)]['includes'](_0xbb5add)&&_0x31dc43[_0x3daadb(0x1a6)](_0x3ab7e7,![],_0x10ebb3),[_0x3daadb(0x474),'both'][_0x3daadb(0x4ca)](_0x4720f8)&&_0x27d17c[_0x3daadb(0x1a6)](_0x1ef033,!![],_0x58dd5f)):this[_0x3daadb(0x1ed)](_0x34a137);}}},ImageManager[_0x3cb96a(0x251)]=function(){const _0x346f0e=_0x3cb96a;if(this['_weatherIcons'])return this[_0x346f0e(0x1d1)];return this[_0x346f0e(0x1d1)]=Bitmap[_0x346f0e(0x27e)](_0x346f0e(0x272)),this[_0x346f0e(0x1d1)][_0x346f0e(0x263)]=ImageManager[_0x346f0e(0x1fe)],this[_0x346f0e(0x1d1)];},ImageManager[_0x3cb96a(0x1ed)]=function(_0x4a81a5){const _0x43d096=_0x3cb96a;_0x4a81a5=_0x4a81a5[_0x43d096(0x38b)]()[_0x43d096(0x285)]();switch(_0x4a81a5){case _0x43d096(0x427):return this[_0x43d096(0x5c9)]();case _0x43d096(0x3b5):return this['weatherEffectsRain']();case _0x43d096(0x2d1):return this[_0x43d096(0x2ef)]();case _0x43d096(0x52a):return this[_0x43d096(0x56f)]();case'embers':return this[_0x43d096(0x5d4)]();case _0x43d096(0x473):return this[_0x43d096(0x3a2)]();case _0x43d096(0x340):return this[_0x43d096(0x593)]();case _0x43d096(0x331):return this[_0x43d096(0x281)]();case _0x43d096(0x1d7):return this[_0x43d096(0x380)]();case _0x43d096(0x314):return this['weatherEffectsSunBeams']();case _0x43d096(0x479):return this[_0x43d096(0x237)]();case _0x43d096(0x21c):return this['weatherEffectsFireworks']();case'meteorshower':case _0x43d096(0x1e6):return this[_0x43d096(0x25f)]();case _0x43d096(0x351):return this['weatherEffectsBlizzard']();case'snowflakes':return this[_0x43d096(0x56d)]();case'snowclouds':return this[_0x43d096(0x5b9)]();case _0x43d096(0x604):return this['weatherEffectsIceFog']();case _0x43d096(0x589):return this[_0x43d096(0x225)]();case'aurora':return this[_0x43d096(0x493)]();case _0x43d096(0x212):return this[_0x43d096(0x4c0)]();case _0x43d096(0x4b6):return this[_0x43d096(0x2ae)]();case _0x43d096(0x1b9):return this[_0x43d096(0x48b)]();case _0x43d096(0x3f5):case'thundersurge':case _0x43d096(0x3e2):case'plasmasurge':case _0x43d096(0x279):return this['weatherEffectsThunderbolt']();case _0x43d096(0x1bb):return this['weatherEffectsPurpleHaze']();case _0x43d096(0x48a):return this[_0x43d096(0x594)]();case _0x43d096(0x1ce):return this[_0x43d096(0x3c2)]();case _0x43d096(0x1f6):case _0x43d096(0x569):return this[_0x43d096(0x37c)]();case _0x43d096(0x511):return this[_0x43d096(0x5b6)]();case _0x43d096(0x24c):return this[_0x43d096(0x2aa)]();case _0x43d096(0x437):case _0x43d096(0x2f0):return this['weatherEffectsMist']();case'drip':return this[_0x43d096(0x1d9)]();case _0x43d096(0x223):return this[_0x43d096(0x278)]();case _0x43d096(0x216):return this['weatherEffectsCloudBurst']();case _0x43d096(0x206):return this[_0x43d096(0x265)]();case _0x43d096(0x1f3):return this[_0x43d096(0x55f)]();case _0x43d096(0x5d8):return this[_0x43d096(0x218)]();case'duststorm':return this[_0x43d096(0x5a0)]();case _0x43d096(0x4c7):return this['weatherEffectsDustClouds']();case _0x43d096(0x536):return this[_0x43d096(0x5d9)]();case _0x43d096(0x4a4):return this[_0x43d096(0x21f)]();case _0x43d096(0x411):return this[_0x43d096(0x4dc)]();case'acidrain':return this[_0x43d096(0x4f5)]();case _0x43d096(0x601):return this[_0x43d096(0x53a)]();case _0x43d096(0x4b5):return this[_0x43d096(0x4ac)]();case'autumnleaves':return this[_0x43d096(0x3e1)]();case _0x43d096(0x387):return this[_0x43d096(0x4eb)]();case _0x43d096(0x298):return this[_0x43d096(0x347)]();case _0x43d096(0x577):return this[_0x43d096(0x1e7)]();case _0x43d096(0x202):return this[_0x43d096(0x52e)]();case _0x43d096(0x2f1):return this[_0x43d096(0x5be)]();case _0x43d096(0x550):return this[_0x43d096(0x3ca)]();case _0x43d096(0x419):return this[_0x43d096(0x319)]();case _0x43d096(0x4bb):return this['weatherEffectsXtremeSpeed']();case _0x43d096(0x58c):return this[_0x43d096(0x4e8)]();case _0x43d096(0x5db):return this[_0x43d096(0x35b)]();case _0x43d096(0x26e):return this[_0x43d096(0x56e)]();case _0x43d096(0x2b1):return this[_0x43d096(0x364)]();case'rainboworbs':return this[_0x43d096(0x354)]();case _0x43d096(0x3c5):return this[_0x43d096(0x385)]();case _0x43d096(0x359):return this[_0x43d096(0x1ac)]();case _0x43d096(0x5ad):return this[_0x43d096(0x1b2)]();case _0x43d096(0x1ca):case'prismburst':return this[_0x43d096(0x51c)]();case _0x43d096(0x513):return this[_0x43d096(0x595)]();case _0x43d096(0x2a3):return this['weatherEffectsAshDebris']();case _0x43d096(0x5b4):return this[_0x43d096(0x521)]();case _0x43d096(0x2c7):return this[_0x43d096(0x1be)]();case _0x43d096(0x497):return this[_0x43d096(0x1cd)]();case _0x43d096(0x375):return this[_0x43d096(0x371)]();case _0x43d096(0x32d):return this[_0x43d096(0x3f6)]();case _0x43d096(0x406):return this['weatherEffectsMoonBeams']();case _0x43d096(0x4dd):return this['weatherEffectsSmokeClouds']();case _0x43d096(0x40d):return this[_0x43d096(0x54f)]();case _0x43d096(0x5fa):return this['weatherEffectsFumes']();case _0x43d096(0x3ba):return this['weatherEffectsSparkle']();case _0x43d096(0x57b):return this[_0x43d096(0x504)]();case _0x43d096(0x491):case _0x43d096(0x465):case'slow_icons_2':case'slow_icons_3':case _0x43d096(0x2a1):case'slow_icons_5':case'slow_icons_6':case _0x43d096(0x528):case _0x43d096(0x443):case'slow_icons_9':case'slow_icons_0':case _0x43d096(0x373):case'medium_icons_2':case _0x43d096(0x579):case'medium_icons_4':case'medium_icons_5':case'medium_icons_6':case _0x43d096(0x3de):case _0x43d096(0x1b5):case _0x43d096(0x33a):case _0x43d096(0x4c8):case _0x43d096(0x5d1):case _0x43d096(0x326):case _0x43d096(0x516):case'fast_icons_4':case _0x43d096(0x25b):case _0x43d096(0x410):case _0x43d096(0x353):case _0x43d096(0x49e):case _0x43d096(0x534):case _0x43d096(0x5f4):return this[_0x43d096(0x31a)]();default:return this[_0x43d096(0x56f)]();}},ImageManager[_0x3cb96a(0x476)]=function(){const _0x429f3b=_0x3cb96a;return!this['_tempCanvas']&&(this[_0x429f3b(0x378)]=document['createElement'](_0x429f3b(0x241))),this[_0x429f3b(0x378)];},ImageManager[_0x3cb96a(0x355)]=function(_0x963d95,_0x2a79b8){const _0x3f6565=_0x3cb96a,_0x4372d2=this['getTemporaryCanvas']();return _0x4372d2[_0x3f6565(0x197)]=_0x963d95,_0x4372d2[_0x3f6565(0x27f)]=_0x2a79b8,_0x4372d2[_0x3f6565(0x1f1)]('2d');},ImageManager[_0x3cb96a(0x5c9)]=function(){const _0x15753d=_0x3cb96a;if(this[_0x15753d(0x55b)])return this[_0x15753d(0x55b)];const _0x6fe88=new Bitmap(0x1,0x1);_0x6fe88[_0x15753d(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x15753d(0x582)](_0x15753d(0x427));return this[_0x15753d(0x55b)]=_0x6fe88,this[_0x15753d(0x55b)];},ImageManager[_0x3cb96a(0x4f6)]=function(){const _0x4ae560=_0x3cb96a;if(this[_0x4ae560(0x32a)]&&this[_0x4ae560(0x32a)][_0x4ae560(0x59e)]>=ImageManager[_0x4ae560(0x292)]){if(_0x4ae560(0x1ba)!==_0x4ae560(0x1ba))return[0x0,0x0,0x0];else{const _0x46bad4=this[_0x4ae560(0x32a)];return _0x46bad4[Math['floor'](Math[_0x4ae560(0x1fb)]()*_0x46bad4[_0x4ae560(0x59e)])];}}const _0x1a3a2d=new Bitmap(0x1f4,0x1f4),_0x5b8f49='rgba(255,255,255,0)',_0x19958f=_0x4ae560(0x3ef),_0x985ff9=_0x1a3a2d[_0x4ae560(0x197)],_0x351844=_0x1a3a2d['height'],_0x5a9ff4=0x3c,_0x5390fb=_0x5a9ff4/0x2,_0x48e09b=0x2;let _0x48a840=0x10;while(_0x48a840--){const _0x3b9d71=Math[_0x4ae560(0x5e6)](_0x985ff9-_0x5a9ff4)+_0x5a9ff4,_0x5a246e=Math['randomInt'](_0x351844-_0x48e09b)+_0x48e09b;_0x1a3a2d['paintOpacity']=Math[_0x4ae560(0x5e6)](0x40)+0xc0,_0x1a3a2d[_0x4ae560(0x408)](_0x3b9d71,_0x5a246e,_0x5390fb,0x2,_0x5b8f49,_0x19958f),_0x1a3a2d['fillRect'](_0x3b9d71+_0x5390fb,_0x5a246e,_0x5390fb,0x2,_0x19958f);}_0x1a3a2d['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x4ae560(0x582)](_0x4ae560(0x3b5));return this[_0x4ae560(0x32a)]=this[_0x4ae560(0x32a)]||[],this['_cached_WeatherEffects_Rain']['push'](_0x1a3a2d),_0x1a3a2d;},ImageManager['weatherEffectsStorm']=function(){const _0x5e7fdb=_0x3cb96a;if(this[_0x5e7fdb(0x55c)]&&this[_0x5e7fdb(0x55c)][_0x5e7fdb(0x59e)]>=ImageManager[_0x5e7fdb(0x292)]){if(_0x5e7fdb(0x286)===_0x5e7fdb(0x43c)){_0x533420=_0x571765||_0x5e7fdb(0x22f);const _0x43c8f8=this[_0x5e7fdb(0x197)]/0x2,_0x4c8268=this[_0x5e7fdb(0x27f)]/0x2,_0x3cee7c=_0x2e3c94['hexToRgba'](_0x1f08be,0x0),_0x5aa7cb=_0x5887e5[_0x5e7fdb(0x5eb)](_0x16f64a,0.8),_0x36b39c=_0x506c5f[_0x5e7fdb(0x5eb)](_0x513f09,0x1),_0x418618=this['width']/0x2,_0x3e368b=0x4;this['gradientFillRect'](0x0,_0x4c8268-_0x3e368b,_0x418618,_0x3e368b*0x2,_0x3cee7c,_0x5aa7cb),this['drawCircle'](_0x43c8f8,_0x4c8268,_0x3e368b,_0x36b39c),this[_0x5e7fdb(0x1c8)](_0x43c8f8,_0x4c8268,_0x3e368b-0x2,_0x5e7fdb(0x22c));}else{const _0x358b2e=this['_cached_WeatherEffects_Storm'];return _0x358b2e[Math['floor'](Math[_0x5e7fdb(0x1fb)]()*_0x358b2e[_0x5e7fdb(0x59e)])];}}const _0x5c9253=new Bitmap(0x1f4,0x1f4),_0x4e379a=_0x5e7fdb(0x557),_0x423179='rgba(255,255,255,1)',_0x504592=_0x5c9253[_0x5e7fdb(0x197)],_0x17e7ed=_0x5c9253[_0x5e7fdb(0x27f)],_0x2617e0=0x64,_0x1da8c2=_0x2617e0/0x2,_0x3ad057=0x2;let _0x1b513f=0x20;while(_0x1b513f--){if(_0x5e7fdb(0x3c0)!==_0x5e7fdb(0x3c0))this['getGeneratedWeatherParticle'](_0x2d2b9d);else{const _0x4f869a=Math[_0x5e7fdb(0x5e6)](_0x504592-_0x2617e0)+_0x2617e0,_0x21b7fe=Math[_0x5e7fdb(0x5e6)](_0x17e7ed-_0x3ad057)+_0x3ad057;_0x5c9253[_0x5e7fdb(0x546)]=Math[_0x5e7fdb(0x5e6)](0x40)+0xc0,_0x5c9253['gradientFillRect'](_0x4f869a,_0x21b7fe,Math[_0x5e7fdb(0x30e)](_0x1da8c2),_0x3ad057,_0x4e379a,_0x423179),_0x5c9253[_0x5e7fdb(0x376)](_0x4f869a+Math[_0x5e7fdb(0x30e)](_0x1da8c2),_0x21b7fe,Math[_0x5e7fdb(0x2db)](_0x1da8c2),_0x3ad057,_0x423179);}}_0x5c9253[_0x5e7fdb(0x275)]=![];if(ImageManager[_0x5e7fdb(0x36f)])console['log'](_0x5e7fdb(0x2d1));return this[_0x5e7fdb(0x55c)]=this[_0x5e7fdb(0x55c)]||[],this['_cached_WeatherEffects_Storm']['push'](_0x5c9253),_0x5c9253;},ImageManager[_0x3cb96a(0x56f)]=function(){const _0x437e64=_0x3cb96a;if(this[_0x437e64(0x2de)]&&this[_0x437e64(0x2de)][_0x437e64(0x59e)]>=ImageManager[_0x437e64(0x292)]){const _0x62fed9=this['_cached_WeatherEffects_Snow'];return _0x62fed9[Math[_0x437e64(0x2db)](Math[_0x437e64(0x1fb)]()*_0x62fed9[_0x437e64(0x59e)])];}const _0x5cbba7=new Bitmap(0x1f4,0x1f4),_0x4973d7=_0x5cbba7[_0x437e64(0x197)],_0x4ddab6=_0x5cbba7[_0x437e64(0x27f)],_0x567c30=0x5;let _0x996219=0x10;while(_0x996219--){if(_0x437e64(0x3bc)==='OXYZJ'){const _0x4e1f0b=Math[_0x437e64(0x5e6)](_0x4973d7-_0x567c30*0x2)+_0x567c30,_0x10656f=Math[_0x437e64(0x5e6)](_0x4ddab6-_0x567c30*0x2)+_0x567c30,_0xcca1a6=Math[_0x437e64(0x5e6)](_0x567c30)+0x1;_0x5cbba7[_0x437e64(0x546)]=Math[_0x437e64(0x5e6)](0x40)+0xc0,_0x5cbba7['drawCircle'](_0x4e1f0b,_0x10656f,_0xcca1a6,_0x437e64(0x22c));}else{if(this[_0x437e64(0x3e8)]&&this['_cached_WeatherEffects_PurpleHaze'][_0x437e64(0x59e)]>=_0x35cfc6['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x5b1dc6=this[_0x437e64(0x3e8)];return _0x5b1dc6[_0x3ddf23['floor'](_0x42ad76['random']()*_0x5b1dc6[_0x437e64(0x59e)])];}let _0x1fb636=_0x49c80e[_0x437e64(0x2b3)]([_0x1d4bf2[_0x437e64(0x5e6)](0x80)+0x80,0x18,_0x21b5bd['randomInt'](0x80)+0x80]),_0x4096b3=_0x59d391[_0x437e64(0x2b3)]([_0x36bcea[_0x437e64(0x5e6)](0x80)+0x80,0x30,_0x135db1[_0x437e64(0x5e6)](0x80)+0x80]),_0x24b097=_0x69f0a4[_0x437e64(0x2b3)]([_0x2f6f89[_0x437e64(0x5e6)](0x80)+0x80,0x60,_0x14f886['randomInt'](0x80)+0x80]);const _0x1cd4d2=new _0x333449(0x3e8,0x3e8);_0x1cd4d2[_0x437e64(0x35d)](0x1f4,0x28a,0xaf,_0x1fb636,0x10,0x14),_0x1cd4d2[_0x437e64(0x35d)](0x1f4,0x1f4,0xc8,_0x24b097,0x40,0x19),_0x1cd4d2[_0x437e64(0x35d)](0x1f4,0x15e,0xa0,_0x4096b3,0x10,0x14),_0x1cd4d2[_0x437e64(0x275)]=![];if(_0x132fc1[_0x437e64(0x36f)])_0x3caeb6[_0x437e64(0x582)]('purplehaze');return this[_0x437e64(0x3e8)]=this[_0x437e64(0x3e8)]||[],this[_0x437e64(0x3e8)][_0x437e64(0x2fb)](_0x1cd4d2),_0x1cd4d2;}}_0x5cbba7[_0x437e64(0x275)]=![];if(ImageManager[_0x437e64(0x36f)])console[_0x437e64(0x582)](_0x437e64(0x52a));return this[_0x437e64(0x2de)]=this[_0x437e64(0x2de)]||[],this[_0x437e64(0x2de)]['push'](_0x5cbba7),_0x5cbba7;},ImageManager['weatherEffectsBlizzard']=function(){const _0x45cfaa=_0x3cb96a;if(this['_cached_WeatherEffects_Blizzard']&&this[_0x45cfaa(0x307)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x45cfaa(0x5cb)===_0x45cfaa(0x5cb)){const _0x4006d2=this[_0x45cfaa(0x307)];return _0x4006d2[Math[_0x45cfaa(0x2db)](Math[_0x45cfaa(0x1fb)]()*_0x4006d2[_0x45cfaa(0x59e)])];}else _0x1a9328[_0x45cfaa(0x50a)](_0x1057c0,_0x2026d4),_0x648fe4[_0x45cfaa(0x5ca)]=_0x45cfaa(0x406),_0x5eb067[_0x45cfaa(0x5b2)][_0x45cfaa(0x29c)](_0x115f56);}const _0x2623e8=new Bitmap(0x1f4,0x1f4),_0xe415ff=_0x2623e8[_0x45cfaa(0x197)],_0x578516=_0x2623e8[_0x45cfaa(0x27f)],_0x3ed81b=0x8;let _0x5d093f=0x20;while(_0x5d093f--){if(_0x45cfaa(0x46e)!==_0x45cfaa(0x53c)){const _0xe468fb=Math[_0x45cfaa(0x5e6)](_0xe415ff-_0x3ed81b*0x2)+_0x3ed81b,_0x182c3a=Math[_0x45cfaa(0x5e6)](_0x578516-_0x3ed81b*0x2)+_0x3ed81b,_0x30c2de=Math[_0x45cfaa(0x5e6)](_0x3ed81b)+0x1;_0x2623e8['paintOpacity']=Math[_0x45cfaa(0x5e6)](0x40)+0xc0,_0x2623e8[_0x45cfaa(0x1c8)](_0xe468fb,_0x182c3a,_0x30c2de,_0x45cfaa(0x22c));}else{if(this[_0x45cfaa(0x32a)]&&this[_0x45cfaa(0x32a)][_0x45cfaa(0x59e)]>=_0x5a4847['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x453c2c=this[_0x45cfaa(0x32a)];return _0x453c2c[_0x5ccd94['floor'](_0x3a4587['random']()*_0x453c2c[_0x45cfaa(0x59e)])];}const _0x5795cf=new _0x28e14(0x1f4,0x1f4),_0x44b057=_0x45cfaa(0x557),_0x2b398d=_0x45cfaa(0x3ef),_0x50b6bb=_0x5795cf[_0x45cfaa(0x197)],_0x18b023=_0x5795cf[_0x45cfaa(0x27f)],_0x2a5fb8=0x3c,_0x58a30d=_0x2a5fb8/0x2,_0x4f5430=0x2;let _0x2050ba=0x10;while(_0x2050ba--){const _0x135fc4=_0x5f5000[_0x45cfaa(0x5e6)](_0x50b6bb-_0x2a5fb8)+_0x2a5fb8,_0xae4da6=_0x2f5e61[_0x45cfaa(0x5e6)](_0x18b023-_0x4f5430)+_0x4f5430;_0x5795cf['paintOpacity']=_0x4e58d3[_0x45cfaa(0x5e6)](0x40)+0xc0,_0x5795cf[_0x45cfaa(0x408)](_0x135fc4,_0xae4da6,_0x58a30d,0x2,_0x44b057,_0x2b398d),_0x5795cf[_0x45cfaa(0x376)](_0x135fc4+_0x58a30d,_0xae4da6,_0x58a30d,0x2,_0x2b398d);}_0x5795cf['_customModified']=![];if(_0x1c5529['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x579332[_0x45cfaa(0x582)](_0x45cfaa(0x3b5));return this['_cached_WeatherEffects_Rain']=this['_cached_WeatherEffects_Rain']||[],this[_0x45cfaa(0x32a)][_0x45cfaa(0x2fb)](_0x5795cf),_0x5795cf;}}_0x2623e8[_0x45cfaa(0x275)]=![];if(ImageManager[_0x45cfaa(0x36f)])console[_0x45cfaa(0x582)](_0x45cfaa(0x351));return this[_0x45cfaa(0x307)]=this[_0x45cfaa(0x307)]||[],this[_0x45cfaa(0x307)][_0x45cfaa(0x2fb)](_0x2623e8),_0x2623e8;},ImageManager[_0x3cb96a(0x5b6)]=function(){const _0x50258f=_0x3cb96a;if(this[_0x50258f(0x5cd)]&&this[_0x50258f(0x5cd)][_0x50258f(0x59e)]>=ImageManager[_0x50258f(0x292)]){const _0x51c3da=this[_0x50258f(0x5cd)];return _0x51c3da[Math[_0x50258f(0x2db)](Math[_0x50258f(0x1fb)]()*_0x51c3da[_0x50258f(0x59e)])];}const _0x2d542c=new Bitmap(0x1f4,0x1f4),_0x4a0ad8=_0x2d542c['width'],_0x5e3023=_0x2d542c[_0x50258f(0x27f)],_0x35048a=0xc;let _0x38593e=0x10;while(_0x38593e--){const _0x20dba5=Math[_0x50258f(0x5e6)](_0x4a0ad8-_0x35048a*0x2)+_0x35048a,_0x17b530=Math['randomInt'](_0x5e3023-_0x35048a*0x2)+_0x35048a,_0x5de409=Math[_0x50258f(0x5e6)](_0x35048a/0x2)+_0x35048a/0x2;_0x2d542c[_0x50258f(0x546)]=Math['randomInt'](0x40)+0xc0,_0x2d542c['drawCircle'](_0x20dba5,_0x17b530,_0x5de409,_0x50258f(0x3a6)),_0x2d542c['clearCircle'](_0x20dba5,_0x17b530,_0x5de409-0x2),_0x2d542c['drawCircle'](_0x20dba5+_0x5de409/0x3,_0x17b530-_0x5de409/0x3,_0x5de409/0x3,_0x50258f(0x22c));}_0x2d542c[_0x50258f(0x275)]=![];if(ImageManager[_0x50258f(0x36f)])console[_0x50258f(0x582)]('bubbles');return this['_cached_WeatherEffects_Bubbles']=this[_0x50258f(0x5cd)]||[],this['_cached_WeatherEffects_Bubbles'][_0x50258f(0x2fb)](_0x2d542c),_0x2d542c;},ImageManager[_0x3cb96a(0x35b)]=function(){const _0x1277b6=_0x3cb96a;if(this['_cached_WeatherEffects_Stars']&&ColorManager[_0x1277b6(0x4ab)][_0x1277b6(0x59e)]<=0x0){const _0x46bdf3=this[_0x1277b6(0x250)];return _0x46bdf3[Math[_0x1277b6(0x2db)](Math[_0x1277b6(0x1fb)]()*_0x46bdf3[_0x1277b6(0x59e)])];}const _0x34caf0=new Bitmap(0x18,0x18),_0x13583c=ColorManager[_0x1277b6(0x4ab)][_0x1277b6(0x529)]();_0x34caf0[_0x1277b6(0x57a)](0xc,0xc,_0x13583c,_0x13583c,0x5,0xc,0x6),_0x34caf0[_0x1277b6(0x275)]=![];if(ImageManager[_0x1277b6(0x36f)])console[_0x1277b6(0x582)](_0x1277b6(0x5db));return this[_0x1277b6(0x250)]=this[_0x1277b6(0x250)]||[],this[_0x1277b6(0x250)][_0x1277b6(0x2fb)](_0x34caf0),_0x34caf0;},ImageManager[_0x3cb96a(0x56d)]=function(){const _0x374dfd=_0x3cb96a;if(this[_0x374dfd(0x3fb)]&&this[_0x374dfd(0x3fb)]['length']>=ImageManager[_0x374dfd(0x292)]){const _0x3e2da7=this['_cached_WeatherEffects_Snowflakes'];return _0x3e2da7[Math[_0x374dfd(0x2db)](Math[_0x374dfd(0x1fb)]()*_0x3e2da7[_0x374dfd(0x59e)])];}const _0x3aadc2=new Bitmap(0x64,0x64);_0x3aadc2[_0x374dfd(0x52f)](),_0x3aadc2[_0x374dfd(0x275)]=![];if(ImageManager[_0x374dfd(0x36f)])console['log'](_0x374dfd(0x556));return this['_cached_WeatherEffects_Snowflakes']=this['_cached_WeatherEffects_Snowflakes']||[],this[_0x374dfd(0x3fb)][_0x374dfd(0x2fb)](_0x3aadc2),_0x3aadc2;},ImageManager[_0x3cb96a(0x55f)]=function(){const _0x3fa8d7=_0x3cb96a;if(this[_0x3fa8d7(0x422)]&&this[_0x3fa8d7(0x422)][_0x3fa8d7(0x59e)]>=ImageManager[_0x3fa8d7(0x292)]){const _0x5eb8b=this[_0x3fa8d7(0x422)];return _0x5eb8b[Math[_0x3fa8d7(0x2db)](Math[_0x3fa8d7(0x1fb)]()*_0x5eb8b[_0x3fa8d7(0x59e)])];}const _0x598533=ColorManager[_0x3fa8d7(0x43d)][_0x3fa8d7(0x44e)](),_0x421783=1.5,_0x4dbac7=ColorManager[_0x3fa8d7(0x29d)](_0x598533[Math['floor'](Math[_0x3fa8d7(0x1fb)]()*_0x598533['length'])],_0x421783),_0x4c1f18=ColorManager[_0x3fa8d7(0x29d)](_0x598533[Math['floor'](Math[_0x3fa8d7(0x1fb)]()*_0x598533[_0x3fa8d7(0x59e)])],_0x421783),_0x2dd197=ColorManager[_0x3fa8d7(0x29d)](_0x598533[Math['floor'](Math[_0x3fa8d7(0x1fb)]()*_0x598533[_0x3fa8d7(0x59e)])],_0x421783),_0x635d50=new Bitmap(0x1f4,0x1f4);_0x635d50['drawCloud'](0xfa,0x15e,0x4b,_0x4dbac7,0x4,0x14),_0x635d50[_0x3fa8d7(0x35d)](0xfa,0xfa,0x64,_0x2dd197,0x8,0x19),_0x635d50[_0x3fa8d7(0x35d)](0xfa,0xfa,0x3c,_0x4c1f18,0x4,0x14);const _0xb3c068=_0x635d50['width'],_0x5bcd7a=_0x635d50['height'],_0x10ef76=0x2;let _0x90ccdd=0x40;while(_0x90ccdd--){const _0x4b783f=Math['randomInt'](_0xb3c068-_0x10ef76*0x2)+_0x10ef76,_0x3dcd60=Math[_0x3fa8d7(0x5e6)](_0x5bcd7a-_0x10ef76*0x2)+_0x10ef76;let _0x4e8ef9=_0x598533[Math['floor'](Math['random']()*_0x598533[_0x3fa8d7(0x59e)])];_0x4e8ef9=ColorManager[_0x3fa8d7(0x29d)](_0x4e8ef9,_0x421783);const _0x1c073f=Math[_0x3fa8d7(0x5e6)](_0x10ef76)+0x1;_0x635d50[_0x3fa8d7(0x546)]=Math[_0x3fa8d7(0x5e6)](0x40)+0xa0,_0x635d50[_0x3fa8d7(0x1c8)](_0x4b783f,_0x3dcd60,_0x1c073f,_0x4e8ef9);}_0x635d50[_0x3fa8d7(0x275)]=![];if(ImageManager[_0x3fa8d7(0x36f)])console[_0x3fa8d7(0x582)](_0x3fa8d7(0x1f3));return this[_0x3fa8d7(0x422)]=this[_0x3fa8d7(0x422)]||[],this[_0x3fa8d7(0x422)]['push'](_0x635d50),_0x635d50;},ImageManager[_0x3cb96a(0x5d4)]=function(){const _0x391702=_0x3cb96a;if(this[_0x391702(0x512)]&&this['_cached_WeatherEffects_Embers'][_0x391702(0x59e)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x391702(0x209)===_0x391702(0x209)){const _0x49793c=this['_cached_WeatherEffects_Embers'];return _0x49793c[Math[_0x391702(0x2db)](Math[_0x391702(0x1fb)]()*_0x49793c[_0x391702(0x59e)])];}else{if(this[_0x391702(0x3bb)]===0x0)this['_speed']=_0x58c047[_0x391702(0x1fb)]();}}const _0x21668f=new Bitmap(0x1f4,0x1f4),_0x3c38de=_0x21668f[_0x391702(0x197)],_0x5ba7e1=_0x21668f[_0x391702(0x27f)],_0x2bdfe7=0x10;let _0x37d844=0x10;while(_0x37d844--){if('Pinhd'!==_0x391702(0x4fa)){_0x497959[_0x391702(0x50a)](_0x46a09c,_0x5928aa);const _0xbc2e28=_0x2fce3d[_0x391702(0x24b)][_0x391702(0x50b)](_0x4a3246=>(_0x11d0e9(_0x4a3246)||0x1)[_0x391702(0x482)](0x1,0xa)),_0x153e31=_0x3a9752[_0x391702(0x42d)],_0x936060=_0x6b2748[_0x391702(0x2eb)]||0x1;for(const _0x42f8ce of _0xbc2e28){[_0x391702(0x3c8),'both'][_0x391702(0x4ca)](_0x153e31)&&_0x190cfb['memorizeWeatherLayerData'](_0x42f8ce,![]),['lower',_0x391702(0x426)]['includes'](_0x153e31)&&_0x1a2c09[_0x391702(0x39a)](_0x42f8ce,!![]);}}else{const _0x3134a9=Math['randomInt'](_0x3c38de-_0x2bdfe7*0x2)+_0x2bdfe7,_0x403cda=Math['randomInt'](_0x5ba7e1-_0x2bdfe7*0x2)+_0x2bdfe7,_0x39bed6=Math['randomInt'](_0x2bdfe7/0x2)+0x2,_0x2baa83=ColorManager[_0x391702(0x2b3)]([0xff,Math['randomInt'](0x46),0x0]);_0x21668f['paintOpacity']=Math[_0x391702(0x5e6)](0x40),_0x21668f[_0x391702(0x1c8)](_0x3134a9,_0x403cda,_0x39bed6,_0x2baa83),_0x21668f[_0x391702(0x546)]=Math[_0x391702(0x5e6)](0x40)+0x40,_0x21668f['drawCircle'](_0x3134a9,_0x403cda,_0x39bed6/0x2,_0x2baa83),_0x21668f[_0x391702(0x546)]=Math[_0x391702(0x5e6)](0x40)+0xc0;const _0x56a3a4=ColorManager[_0x391702(0x2b3)]([0xff,Math[_0x391702(0x5e6)](0x46)+0xb9,0x0]);_0x21668f[_0x391702(0x1c8)](_0x3134a9,_0x403cda,_0x39bed6/0x4,_0x56a3a4),_0x21668f[_0x391702(0x1c8)](_0x3134a9,_0x403cda,_0x39bed6/0x8,_0x391702(0x330));}}_0x21668f[_0x391702(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x391702(0x582)]('embers');return this[_0x391702(0x512)]=this[_0x391702(0x512)]||[],this['_cached_WeatherEffects_Embers'][_0x391702(0x2fb)](_0x21668f),_0x21668f;},ImageManager[_0x3cb96a(0x5f9)]=function(){const _0x32a2df=_0x3cb96a;if(this['_cached_WeatherEffects_AshDebris']&&this[_0x32a2df(0x3b6)][_0x32a2df(0x59e)]>=ImageManager[_0x32a2df(0x292)]){if('HjKlu'!=='CmZyC'){const _0x287c76=this[_0x32a2df(0x3b6)];return _0x287c76[Math[_0x32a2df(0x2db)](Math['random']()*_0x287c76[_0x32a2df(0x59e)])];}else _0x42537d[_0x32a2df(0x50a)](_0x42f723,_0x338266),_0x370bfa[_0x32a2df(0x5ca)]=_0x32a2df(0x411),_0x42f900['WeatherEffects'][_0x32a2df(0x29c)](_0x2d43c5);}const _0x4f5140=new Bitmap(0x12,0x12),_0x10d1e2=_0x4f5140[_0x32a2df(0x197)],_0x567d2b=_0x4f5140[_0x32a2df(0x27f)],_0x116c42=_0x10d1e2/0x2-0x2,_0x152638=_0x567d2b/0x2-0x2,_0x1fc973=[];_0x1fc973[_0x32a2df(0x2fb)](Math[_0x32a2df(0x5e6)](_0x116c42)+0x2,Math['randomInt'](_0x152638)+0x2),_0x1fc973[_0x32a2df(0x2fb)](_0x10d1e2-Math[_0x32a2df(0x5e6)](_0x116c42)-0x2,Math[_0x32a2df(0x5e6)](_0x152638)+0x2),_0x1fc973[_0x32a2df(0x2fb)](_0x10d1e2-Math[_0x32a2df(0x5e6)](_0x116c42)-0x2,_0x567d2b-Math[_0x32a2df(0x5e6)](_0x152638)-0x2),_0x1fc973[_0x32a2df(0x2fb)](Math['randomInt'](_0x116c42)+0x2,_0x567d2b-Math['randomInt'](_0x152638)-0x2);const _0x3c9ab5=ColorManager['WEATHER_ASH_COLORS'][_0x32a2df(0x44e)](),_0x130ca2=_0x3c9ab5[Math[_0x32a2df(0x2db)](Math['random']()*_0x3c9ab5['length'])];_0x4f5140[_0x32a2df(0x433)](_0x1fc973,_0x130ca2,_0x32a2df(0x26c),0x2,0xff,![]),_0x4f5140[_0x32a2df(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x32a2df(0x582)]('ashdebris');return this[_0x32a2df(0x3b6)]=this['_cached_WeatherEffects_AshDebris']||[],this[_0x32a2df(0x3b6)][_0x32a2df(0x2fb)](_0x4f5140),_0x4f5140;},ImageManager[_0x3cb96a(0x3a2)]=function(){const _0x253ca0=_0x3cb96a;if(this[_0x253ca0(0x5a5)]&&this[_0x253ca0(0x5a5)][_0x253ca0(0x59e)]>=ImageManager[_0x253ca0(0x292)]){const _0x1e4049=this['_cached_WeatherEffects_Firestorm'];return _0x1e4049[Math['floor'](Math[_0x253ca0(0x1fb)]()*_0x1e4049[_0x253ca0(0x59e)])];}const _0x401853=new Bitmap(0x1f4,0x1f4),_0x41d837=_0x401853[_0x253ca0(0x197)],_0x2145ed=_0x401853['height'],_0x21804d=0xc,_0x5eb540=0x64;let _0x4dcf6e=0x4;while(_0x4dcf6e--){const _0x35b713=Math[_0x253ca0(0x5e6)](_0x41d837-_0x5eb540*0x2)+_0x5eb540*0x1,_0x1cb1f0=Math[_0x253ca0(0x5e6)](_0x2145ed-_0x21804d*0x8)+_0x21804d*0x4,_0xc86360=Math[_0x253ca0(0x5e6)](_0x21804d*0x2/0x5)+_0x21804d*0x2/0x5,_0x2682a1=Math['randomInt'](_0x5eb540*0x1/0x3)+_0x5eb540*0x2/0x3;_0x401853[_0x253ca0(0x4ee)](_0x35b713,_0x1cb1f0,_0xc86360,_0x2682a1);}_0x401853[_0x253ca0(0x275)]=![];if(ImageManager[_0x253ca0(0x36f)])console['log'](_0x253ca0(0x473));return this[_0x253ca0(0x5a5)]=this[_0x253ca0(0x5a5)]||[],this[_0x253ca0(0x5a5)]['push'](_0x401853),_0x401853;},ImageManager[_0x3cb96a(0x593)]=function(){const _0x19337c=_0x3cb96a;if(this['_cached_WeatherEffects_Fireflies']&&this[_0x19337c(0x488)][_0x19337c(0x59e)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x727395=this[_0x19337c(0x488)];return _0x727395[Math[_0x19337c(0x2db)](Math[_0x19337c(0x1fb)]()*_0x727395[_0x19337c(0x59e)])];}const _0x409a31=ColorManager[_0x19337c(0x592)][_0x19337c(0x44e)](),_0x10ea13=_0x409a31[Math[_0x19337c(0x2db)](Math[_0x19337c(0x1fb)]()*_0x409a31[_0x19337c(0x59e)])];let _0x3b75ee=Math[_0x19337c(0x5e6)](0x10)+0x10;if(_0x3b75ee%0x2!==0x0)_0x3b75ee+=0x1;const _0x200bd7=new Bitmap(_0x3b75ee,_0x3b75ee),_0x3ce2f2=Math[_0x19337c(0x2db)](_0x3b75ee/0x2);_0x200bd7[_0x19337c(0x208)](_0x3ce2f2,_0x3ce2f2,_0x3ce2f2,0x168,_0x10ea13,0x0,0x1,0x0),_0x200bd7['fillRect'](_0x3ce2f2-0x1,_0x3ce2f2-0x1,0x2,0x2,_0x10ea13),_0x200bd7[_0x19337c(0x275)]=![];if(ImageManager[_0x19337c(0x36f)])console[_0x19337c(0x582)](_0x19337c(0x340));return this[_0x19337c(0x488)]=this[_0x19337c(0x488)]||[],this[_0x19337c(0x488)]['push'](_0x200bd7),_0x200bd7;},ImageManager[_0x3cb96a(0x3c1)]=function(){const _0x2b9160=_0x3cb96a;if(this[_0x2b9160(0x390)]&&this[_0x2b9160(0x390)][_0x2b9160(0x59e)]>=ImageManager[_0x2b9160(0x292)]*0x3){const _0x341813=this[_0x2b9160(0x390)];return _0x341813[Math[_0x2b9160(0x2db)](Math[_0x2b9160(0x1fb)]()*_0x341813[_0x2b9160(0x59e)])];}const _0x10ae53=Math[_0x2b9160(0x2d0)]($dataSystem['advanced'][_0x2b9160(0x39d)],$dataSystem['advanced'][_0x2b9160(0x45e)])||0x1,_0x1b6819=new Bitmap(_0x10ae53,_0x10ae53);_0x1b6819[_0x2b9160(0x522)](),_0x1b6819['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x2b9160(0x582)](_0x2b9160(0x3f5));return this[_0x2b9160(0x390)]=this[_0x2b9160(0x390)]||[],this[_0x2b9160(0x390)][_0x2b9160(0x2fb)](_0x1b6819),_0x1b6819;},ImageManager[_0x3cb96a(0x1be)]=function(){const _0xa10a35=_0x3cb96a;if(this['_cached_WeatherEffects_Sootfall']&&this['_cached_WeatherEffects_Sootfall'][_0xa10a35(0x59e)]>=ImageManager[_0xa10a35(0x292)]){const _0x1856e6=this[_0xa10a35(0x2ff)];return _0x1856e6[Math['floor'](Math[_0xa10a35(0x1fb)]()*_0x1856e6[_0xa10a35(0x59e)])];}const _0x512f99=ColorManager['WEATHER_ASH_COLORS']['clone'](),_0x1f1643=new Bitmap(0x1f4,0x1f4),_0x288fc4=_0x1f1643[_0xa10a35(0x197)],_0x3e9a4f=_0x1f1643['height'],_0x1d0047=0x5;let _0x2ab48b=0x8;while(_0x2ab48b--){const _0x4110ce=Math[_0xa10a35(0x5e6)](_0x288fc4-_0x1d0047*0x2)+_0x1d0047,_0x8e9894=Math[_0xa10a35(0x5e6)](_0x3e9a4f-_0x1d0047*0x2)+_0x1d0047,_0x4889e8=Math[_0xa10a35(0x5e6)](_0x1d0047)+0x1,_0x413cd0=_0x512f99[Math[_0xa10a35(0x2db)](Math['random']()*_0x512f99[_0xa10a35(0x59e)])];_0x1f1643[_0xa10a35(0x546)]=Math['randomInt'](0x40)+0xc0,_0x1f1643[_0xa10a35(0x1c8)](_0x4110ce,_0x8e9894,_0x4889e8,_0x413cd0);}_0x1f1643[_0xa10a35(0x275)]=![];if(ImageManager[_0xa10a35(0x36f)])console[_0xa10a35(0x582)]('sootfall');return this[_0xa10a35(0x2ff)]=this['_cached_WeatherEffects_Sootfall']||[],this['_cached_WeatherEffects_Sootfall'][_0xa10a35(0x2fb)](_0x1f1643),_0x1f1643;},ImageManager[_0x3cb96a(0x521)]=function(){const _0x210c2a=_0x3cb96a;if(this[_0x210c2a(0x221)]&&this['_cached_WeatherEffects_Ashfall']['length']>=ImageManager[_0x210c2a(0x292)]){const _0x53f13c=this['_cached_WeatherEffects_Ashfall'];return _0x53f13c[Math[_0x210c2a(0x2db)](Math[_0x210c2a(0x1fb)]()*_0x53f13c[_0x210c2a(0x59e)])];}const _0x4a399b=new Bitmap(0x18,0x18),_0x5dfc93=_0x4a399b[_0x210c2a(0x197)],_0x193124=_0x4a399b[_0x210c2a(0x27f)],_0x195eff=_0x5dfc93/0x2-0x2,_0x130430=_0x193124/0x2-0x2,_0x452956=[];_0x452956[_0x210c2a(0x2fb)](Math['randomInt'](_0x195eff)+0x2,Math[_0x210c2a(0x5e6)](_0x130430)+0x2),_0x452956[_0x210c2a(0x2fb)](_0x5dfc93-Math[_0x210c2a(0x5e6)](_0x195eff)-0x2,Math[_0x210c2a(0x5e6)](_0x130430)+0x2),_0x452956[_0x210c2a(0x2fb)](_0x5dfc93-Math[_0x210c2a(0x5e6)](_0x195eff)-0x2,_0x193124-Math['randomInt'](_0x130430)-0x2),_0x452956[_0x210c2a(0x2fb)](Math[_0x210c2a(0x5e6)](_0x195eff)+0x2,_0x193124-Math['randomInt'](_0x130430)-0x2);const _0x371c14=ColorManager[_0x210c2a(0x238)][_0x210c2a(0x44e)](),_0x32cda9=_0x371c14[Math[_0x210c2a(0x2db)](Math[_0x210c2a(0x1fb)]()*_0x371c14[_0x210c2a(0x59e)])];_0x4a399b[_0x210c2a(0x433)](_0x452956,_0x32cda9,_0x210c2a(0x26c),0x2,0xff,![]),_0x4a399b[_0x210c2a(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x210c2a(0x5b4));return this['_cached_WeatherEffects_Ashfall']=this[_0x210c2a(0x221)]||[],this[_0x210c2a(0x221)][_0x210c2a(0x2fb)](_0x4a399b),_0x4a399b;},ImageManager[_0x3cb96a(0x281)]=function(){const _0x1d2475=_0x3cb96a;if(this['_cached_WeatherEffects_FlameWall']&&this[_0x1d2475(0x317)]['length']>=ImageManager[_0x1d2475(0x292)]){if(_0x1d2475(0x27a)===_0x1d2475(0x27a)){const _0x1619b9=this[_0x1d2475(0x317)];return _0x1619b9[Math[_0x1d2475(0x2db)](Math[_0x1d2475(0x1fb)]()*_0x1619b9['length'])];}else{const _0x46ed41=this[_0x1d2475(0x5fe)];return _0x46ed41[_0x526150[_0x1d2475(0x2db)](_0x25bee7[_0x1d2475(0x1fb)]()*_0x46ed41[_0x1d2475(0x59e)])];}}const _0x51dda1=new Bitmap(0x258,0xc8),_0x2b09b6=_0x51dda1['width'],_0x4bed84=_0x51dda1[_0x1d2475(0x27f)],_0x5b327e=0x40;let _0x58702=0x40;while(_0x58702--){const _0x40658f=Math[_0x1d2475(0x5e6)](_0x2b09b6-_0x5b327e*0x2)+_0x5b327e,_0x2168de=Math[_0x1d2475(0x5e6)](_0x4bed84-_0x5b327e*0x2)+_0x5b327e,_0x24722f=Math[_0x1d2475(0x5e6)](_0x5b327e/0x2)+0x2,_0x348019=ColorManager[_0x1d2475(0x2b3)]([0xff,Math['randomInt'](0x46),0x0]);_0x51dda1[_0x1d2475(0x546)]=Math[_0x1d2475(0x5e6)](0x40),_0x51dda1[_0x1d2475(0x1c8)](_0x40658f,_0x2168de,_0x24722f,_0x348019),_0x51dda1[_0x1d2475(0x546)]=Math[_0x1d2475(0x5e6)](0x40)+0x40,_0x51dda1[_0x1d2475(0x1c8)](_0x40658f,_0x2168de,_0x24722f/0x2,_0x348019),_0x51dda1[_0x1d2475(0x546)]=Math['randomInt'](0x40)+0xc0;const _0x49fe67=ColorManager['arrayToHex']([0xff,Math[_0x1d2475(0x5e6)](0x46)+0xb9,0x0]);_0x51dda1['drawCircle'](_0x40658f,_0x2168de,_0x24722f/0x4,_0x49fe67),_0x51dda1[_0x1d2475(0x1c8)](_0x40658f,_0x2168de,_0x24722f/0x8,_0x1d2475(0x330)),_0x51dda1[_0x1d2475(0x1c8)](_0x40658f,_0x2168de,_0x24722f/0xa,'white');}_0x51dda1[_0x1d2475(0x275)]=![];if(ImageManager[_0x1d2475(0x36f)])console[_0x1d2475(0x582)]('flamewall');return this['_cached_WeatherEffects_FlameWall']=this['_cached_WeatherEffects_FlameWall']||[],this[_0x1d2475(0x317)][_0x1d2475(0x2fb)](_0x51dda1),_0x51dda1;},ImageManager[_0x3cb96a(0x3e1)]=function(){const _0x7244af=_0x3cb96a;if(this[_0x7244af(0x245)]&&ColorManager[_0x7244af(0x2f2)][_0x7244af(0x59e)]<=0x0){const _0x4ca1cf=this[_0x7244af(0x245)];return _0x4ca1cf[Math[_0x7244af(0x2db)](Math[_0x7244af(0x1fb)]()*_0x4ca1cf[_0x7244af(0x59e)])];}const _0x1b9967=ColorManager['WEATHER_AUTUMN_LEAVES_COLORS'][_0x7244af(0x529)]();let _0x2a1afa=ColorManager[_0x7244af(0x399)](_0x1b9967);const _0x2f2e3c=[];while(_0x2f2e3c[_0x7244af(0x59e)]<0x6){if(_0x7244af(0x2c5)!==_0x7244af(0x2c5)){const _0xdc9eb5=_0x5ef0b7['randomInt'](_0x21dbcc-_0xf19671*0x2)+_0x318800,_0x1fc1f6=_0x508ac4[_0x7244af(0x5e6)](_0x53b5d4-_0x27623b*0x2)+_0x38a3af;let _0x63f8c=_0x21994c[_0x5e2d15['floor'](_0x430afe[_0x7244af(0x1fb)]()*_0x25dcac['length'])];_0x63f8c=_0x2ff514[_0x7244af(0x29d)](_0x63f8c,_0x5951d0);const _0x3f660a=_0x214cc8[_0x7244af(0x5e6)](_0x21e112)+0x1;_0x3c7c8b[_0x7244af(0x546)]=_0x2610fd[_0x7244af(0x5e6)](0x40)+0xa0,_0x19cb00[_0x7244af(0x1c8)](_0xdc9eb5,_0x1fc1f6,_0x3f660a,_0x63f8c);}else{const _0x5033de=ColorManager[_0x7244af(0x2b3)](_0x2a1afa);_0x2f2e3c[_0x7244af(0x2fb)](_0x5033de),_0x2a1afa=_0x2a1afa[_0x7244af(0x50b)](_0x389ff6=>Math[_0x7244af(0x30e)](_0x389ff6*0.85)[_0x7244af(0x482)](0x0,0xff));}}_0x2f2e3c[_0x7244af(0x26d)](),_0x2f2e3c['push'](_0x2f2e3c[_0x7244af(0x2bd)]()),_0x2f2e3c[_0x7244af(0x2fb)](_0x2f2e3c['shift']());const _0x370075=new Bitmap(0x64,0x60);_0x370075[_0x7244af(0x496)](_0x2f2e3c),_0x370075[_0x7244af(0x275)]=![];if(ImageManager[_0x7244af(0x36f)])console['log'](_0x7244af(0x59d));return this[_0x7244af(0x245)]=this[_0x7244af(0x245)]||[],this[_0x7244af(0x245)]['push'](_0x370075),_0x370075;},ImageManager[_0x3cb96a(0x4eb)]=function(){const _0x2cd4d5=_0x3cb96a;if(this[_0x2cd4d5(0x2fe)]&&this[_0x2cd4d5(0x2fe)][_0x2cd4d5(0x59e)]>=ImageManager[_0x2cd4d5(0x292)]){const _0x1c17b5=this['_cached_WeatherEffects_CherryBlossoms'];return _0x1c17b5[Math[_0x2cd4d5(0x2db)](Math['random']()*_0x1c17b5[_0x2cd4d5(0x59e)])];}const _0x23ceb3=ColorManager[_0x2cd4d5(0x328)],_0x35f239=ColorManager[_0x2cd4d5(0x4a7)],_0x2a9933=ColorManager[_0x2cd4d5(0x5a2)],_0x350bf1=_0x23ceb3[Math[_0x2cd4d5(0x2db)](Math[_0x2cd4d5(0x1fb)]()*_0x23ceb3[_0x2cd4d5(0x59e)])],_0x3ff1fa=_0x35f239[Math[_0x2cd4d5(0x2db)](Math[_0x2cd4d5(0x1fb)]()*_0x35f239['length'])],_0x421835=_0x2a9933[Math[_0x2cd4d5(0x2db)](Math[_0x2cd4d5(0x1fb)]()*_0x2a9933[_0x2cd4d5(0x59e)])],_0x1a012d=new Bitmap(0x34,0x23);_0x1a012d[_0x2cd4d5(0x1c4)](_0x350bf1,_0x3ff1fa,_0x421835),_0x1a012d[_0x2cd4d5(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x2cd4d5(0x582)]('cherryblossoms');return this['_cached_WeatherEffects_CherryBlossoms']=this[_0x2cd4d5(0x2fe)]||[],this[_0x2cd4d5(0x2fe)]['push'](_0x1a012d),_0x1a012d;},ImageManager[_0x3cb96a(0x347)]=function(){const _0xfdc9af=_0x3cb96a;if(this[_0xfdc9af(0x475)]&&ColorManager[_0xfdc9af(0x404)]['length']<=0x0){const _0x33e9cb=this[_0xfdc9af(0x475)];return _0x33e9cb[Math[_0xfdc9af(0x2db)](Math[_0xfdc9af(0x1fb)]()*_0x33e9cb[_0xfdc9af(0x59e)])];}const _0x5e9c1d=ColorManager[_0xfdc9af(0x404)]['pop']();let _0x5440e8=ColorManager['hexToArray'](_0x5e9c1d);const _0x4e0447=[];while(_0x4e0447[_0xfdc9af(0x59e)]<0x6){const _0x5d18c9=ColorManager[_0xfdc9af(0x2b3)](_0x5440e8);_0x4e0447[_0xfdc9af(0x2fb)](_0x5d18c9),_0x5440e8=_0x5440e8[_0xfdc9af(0x50b)](_0x23b461=>Math['ceil'](_0x23b461*0.85)[_0xfdc9af(0x482)](0x0,0xff));}_0x4e0447[_0xfdc9af(0x26d)](),_0x4e0447[_0xfdc9af(0x2fb)](_0x4e0447[_0xfdc9af(0x2bd)]()),_0x4e0447['push'](_0x4e0447['shift']());const _0x4d86b0=new Bitmap(0x64,0x60);_0x4d86b0[_0xfdc9af(0x4ff)](_0x4e0447),_0x4d86b0[_0xfdc9af(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0xfdc9af(0x298));return this[_0xfdc9af(0x475)]=this[_0xfdc9af(0x475)]||[],this['_cached_WeatherEffects_GreenLeaves'][_0xfdc9af(0x2fb)](_0x4d86b0),_0x4d86b0;},ImageManager[_0x3cb96a(0x1e7)]=function(){const _0x3a4481=_0x3cb96a;if(this[_0x3a4481(0x2d3)]&&this[_0x3a4481(0x2d3)][_0x3a4481(0x59e)]>=ImageManager[_0x3a4481(0x292)]){if('YijsN'==='Outvw')_0x3d918e[_0x3a4481(0x4a1)](_0x15bbb9,!![],_0x3239a0);else{const _0x436b56=this['_cached_WeatherEffects_DandelionSeeds'];return _0x436b56[Math[_0x3a4481(0x2db)](Math[_0x3a4481(0x1fb)]()*_0x436b56[_0x3a4481(0x59e)])];}}const _0x18e744=ColorManager[_0x3a4481(0x56c)],_0x1eb966=ColorManager[_0x3a4481(0x332)],_0x578642=ColorManager[_0x3a4481(0x207)],_0x481c8b=_0x18e744[Math['floor'](Math[_0x3a4481(0x1fb)]()*_0x18e744[_0x3a4481(0x59e)])],_0x1d6122=_0x1eb966[Math[_0x3a4481(0x2db)](Math[_0x3a4481(0x1fb)]()*_0x1eb966[_0x3a4481(0x59e)])],_0x4c0690=_0x578642[Math[_0x3a4481(0x2db)](Math[_0x3a4481(0x1fb)]()*_0x578642[_0x3a4481(0x59e)])],_0x4babc3=new Bitmap(0x40,0x64);_0x4babc3['drawDandelionSeed'](_0x481c8b,_0x1d6122,_0x4c0690),_0x4babc3[_0x3a4481(0x275)]=![];if(ImageManager[_0x3a4481(0x36f)])console[_0x3a4481(0x582)](_0x3a4481(0x577));return this['_cached_WeatherEffects_DandelionSeeds']=this[_0x3a4481(0x2d3)]||[],this['_cached_WeatherEffects_DandelionSeeds']['push'](_0x4babc3),_0x4babc3;},ImageManager[_0x3cb96a(0x52e)]=function(){const _0x78c44a=_0x3cb96a;if(this[_0x78c44a(0x213)]&&this['_cached_WeatherEffects_WhiteClouds'][_0x78c44a(0x59e)]>=ImageManager[_0x78c44a(0x292)]){if(_0x78c44a(0x309)===_0x78c44a(0x309)){const _0x32a452=this[_0x78c44a(0x213)];return _0x32a452[Math['floor'](Math[_0x78c44a(0x1fb)]()*_0x32a452['length'])];}else{const _0x4a7301=_0x52154d(_0x1c608b['$1']);_0x4a7301!==_0x20fdf7[_0x366c66]['version']&&(_0x15bbfe('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x207dbb,_0x4a7301)),_0x1ab812[_0x78c44a(0x391)]());}}const _0x34e448=ColorManager[_0x78c44a(0x520)],_0x588187=ColorManager[_0x78c44a(0x20f)],_0x3e3412=ColorManager['WEATHER_CLOUD_WHITE_COLORS'],_0x1272ac=_0x34e448[Math[_0x78c44a(0x2db)](Math[_0x78c44a(0x1fb)]()*_0x34e448[_0x78c44a(0x59e)])],_0xb28067=_0x588187[Math[_0x78c44a(0x2db)](Math[_0x78c44a(0x1fb)]()*_0x588187[_0x78c44a(0x59e)])],_0x4e4f28=_0x3e3412[Math[_0x78c44a(0x2db)](Math[_0x78c44a(0x1fb)]()*_0x3e3412[_0x78c44a(0x59e)])],_0x56b2a8=new Bitmap(0x1f4,0x1f4);_0x56b2a8[_0x78c44a(0x35d)](0xfa,0x15e,0x4b,_0x1272ac,0x10,0x14),_0x56b2a8[_0x78c44a(0x35d)](0xfa,0xfa,0x64,_0x4e4f28,0x40,0x19),_0x56b2a8['drawCloud'](0xfa,0xfa,0x3c,_0xb28067,0x10,0x14),_0x56b2a8[_0x78c44a(0x275)]=![];if(ImageManager[_0x78c44a(0x36f)])console[_0x78c44a(0x582)](_0x78c44a(0x497));return this[_0x78c44a(0x213)]=this[_0x78c44a(0x213)]||[],this['_cached_WeatherEffects_WhiteClouds'][_0x78c44a(0x2fb)](_0x56b2a8),_0x56b2a8;},ImageManager['weatherEffectsSmokeFog']=function(){const _0x14fafb=_0x3cb96a;if(this[_0x14fafb(0x487)]&&this[_0x14fafb(0x487)][_0x14fafb(0x59e)]>=ImageManager[_0x14fafb(0x292)]){if(_0x14fafb(0x4d7)!==_0x14fafb(0x503)){const _0x4a116b=this['_cached_WeatherEffects_SmokeFog'];return _0x4a116b[Math['floor'](Math['random']()*_0x4a116b[_0x14fafb(0x59e)])];}else{const _0x336695=this['_cached_WeatherEffects_LightOrbs'];return _0x336695[_0x2819cf[_0x14fafb(0x2db)](_0x551eec[_0x14fafb(0x1fb)]()*_0x336695[_0x14fafb(0x59e)])];}}const _0x4d0f4a=ColorManager[_0x14fafb(0x238)],_0x1860a2=_0x4d0f4a[0x3],_0x29ba7c=_0x4d0f4a[0x2],_0x28d52d=_0x4d0f4a[0x1],_0x50c6e6=new Bitmap(0x3e8,0x3e8);_0x50c6e6['drawCloud'](0x1f4,0x28a,0xaf,_0x1860a2,0x10,0x14),_0x50c6e6[_0x14fafb(0x35d)](0x1f4,0x1f4,0xc8,_0x28d52d,0x40,0x19),_0x50c6e6[_0x14fafb(0x35d)](0x1f4,0x15e,0xa0,_0x29ba7c,0x10,0x14),_0x50c6e6[_0x14fafb(0x275)]=![];if(ImageManager[_0x14fafb(0x36f)])console[_0x14fafb(0x582)](_0x14fafb(0x497));return this[_0x14fafb(0x487)]=this[_0x14fafb(0x487)]||[],this['_cached_WeatherEffects_SmokeFog'][_0x14fafb(0x2fb)](_0x50c6e6),_0x50c6e6;},ImageManager[_0x3cb96a(0x218)]=function(){const _0x39d82b=_0x3cb96a;if(this[_0x39d82b(0x33f)]&&this[_0x39d82b(0x33f)]['length']>=ImageManager[_0x39d82b(0x292)]){const _0x34b166=this[_0x39d82b(0x33f)];return _0x34b166[Math[_0x39d82b(0x2db)](Math[_0x39d82b(0x1fb)]()*_0x34b166[_0x39d82b(0x59e)])];}const _0x5947b3=ColorManager[_0x39d82b(0x43d)],_0x54d595=0.75;let _0x2bf1d4=ColorManager[_0x39d82b(0x29d)](_0x5947b3[Math[_0x39d82b(0x2db)](Math['random']()*_0x5947b3[_0x39d82b(0x59e)])],_0x54d595),_0x4a85b3=ColorManager[_0x39d82b(0x29d)](_0x5947b3[Math[_0x39d82b(0x2db)](Math[_0x39d82b(0x1fb)]()*_0x5947b3['length'])],_0x54d595),_0x1b1ee6=ColorManager[_0x39d82b(0x29d)](_0x5947b3[Math['floor'](Math[_0x39d82b(0x1fb)]()*_0x5947b3[_0x39d82b(0x59e)])],_0x54d595);const _0x5d10dd=new Bitmap(0x1f4,0x1f4);_0x5d10dd[_0x39d82b(0x35d)](0xfa,0x15e,0x4b,_0x2bf1d4,0x10,0x14),_0x5d10dd[_0x39d82b(0x35d)](0xfa,0xfa,0x64,_0x1b1ee6,0x40,0x19),_0x5d10dd['drawCloud'](0xfa,0xfa,0x3c,_0x4a85b3,0x10,0x14),_0x5d10dd[_0x39d82b(0x275)]=![];if(ImageManager[_0x39d82b(0x36f)])console['log'](_0x39d82b(0x5d8));return this[_0x39d82b(0x33f)]=this[_0x39d82b(0x33f)]||[],this[_0x39d82b(0x33f)][_0x39d82b(0x2fb)](_0x5d10dd),_0x5d10dd;},ImageManager[_0x3cb96a(0x380)]=function(){const _0x2ca4be=_0x3cb96a;if(this[_0x2ca4be(0x398)]&&this[_0x2ca4be(0x398)][_0x2ca4be(0x59e)]>=ImageManager[_0x2ca4be(0x292)]){const _0x1e3666=this[_0x2ca4be(0x398)];return _0x1e3666[Math[_0x2ca4be(0x2db)](Math[_0x2ca4be(0x1fb)]()*_0x1e3666[_0x2ca4be(0x59e)])];}const _0xd0564b=ColorManager[_0x2ca4be(0x2e6)],_0x61f69a=0.85;let _0x55c446=ColorManager['adjustHexColor'](_0xd0564b[Math[_0x2ca4be(0x2db)](Math[_0x2ca4be(0x1fb)]()*_0xd0564b[_0x2ca4be(0x59e)])],_0x61f69a),_0x5d0878=ColorManager[_0x2ca4be(0x29d)](_0xd0564b[Math['floor'](Math['random']()*_0xd0564b[_0x2ca4be(0x59e)])],_0x61f69a),_0x256173=ColorManager[_0x2ca4be(0x29d)](_0xd0564b[Math[_0x2ca4be(0x2db)](Math[_0x2ca4be(0x1fb)]()*_0xd0564b[_0x2ca4be(0x59e)])],_0x61f69a);const _0x41f114=new Bitmap(0x1f4,0x1f4);_0x41f114[_0x2ca4be(0x35d)](0xfa,0x15e,0x4b,_0x55c446,0x10,0x14),_0x41f114[_0x2ca4be(0x35d)](0xfa,0xfa,0x64,_0x256173,0x40,0x19),_0x41f114[_0x2ca4be(0x35d)](0xfa,0xfa,0x3c,_0x5d0878,0x10,0x14),_0x41f114[_0x2ca4be(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x2ca4be(0x582)](_0x2ca4be(0x1d7));return this[_0x2ca4be(0x398)]=this['_cached_WeatherEffects_HeatClouds']||[],this[_0x2ca4be(0x398)]['push'](_0x41f114),_0x41f114;},ImageManager[_0x3cb96a(0x5b9)]=function(){const _0x3783ef=_0x3cb96a;if(this['_cached_WeatherEffects_SnowClouds']&&this[_0x3783ef(0x372)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0xb58e70=this[_0x3783ef(0x372)];return _0xb58e70[Math['floor'](Math[_0x3783ef(0x1fb)]()*_0xb58e70[_0x3783ef(0x59e)])];}const _0x14b0b3=ColorManager[_0x3783ef(0x50d)],_0x3c6cd6=1.2;let _0x27f4ee=ColorManager[_0x3783ef(0x29d)](_0x14b0b3[Math[_0x3783ef(0x2db)](Math[_0x3783ef(0x1fb)]()*_0x14b0b3[_0x3783ef(0x59e)])],_0x3c6cd6),_0x1f1c2e=ColorManager[_0x3783ef(0x29d)](_0x14b0b3[Math['floor'](Math[_0x3783ef(0x1fb)]()*_0x14b0b3[_0x3783ef(0x59e)])],_0x3c6cd6),_0x7cbe36=ColorManager[_0x3783ef(0x29d)](_0x14b0b3[Math[_0x3783ef(0x2db)](Math[_0x3783ef(0x1fb)]()*_0x14b0b3[_0x3783ef(0x59e)])],_0x3c6cd6);const _0x26fca0=new Bitmap(0x1f4,0x1f4);_0x26fca0[_0x3783ef(0x35d)](0xfa,0x15e,0x4b,_0x27f4ee,0x10,0x14),_0x26fca0[_0x3783ef(0x35d)](0xfa,0xfa,0x64,_0x7cbe36,0x40,0x19),_0x26fca0[_0x3783ef(0x35d)](0xfa,0xfa,0x3c,_0x1f1c2e,0x10,0x14),_0x26fca0['_customModified']=![];if(ImageManager[_0x3783ef(0x36f)])console['log'](_0x3783ef(0x248));return this[_0x3783ef(0x372)]=this[_0x3783ef(0x372)]||[],this['_cached_WeatherEffects_SnowClouds'][_0x3783ef(0x2fb)](_0x26fca0),_0x26fca0;},ImageManager[_0x3cb96a(0x515)]=function(){const _0x25c8a6=_0x3cb96a;if(this['_cached_WeatherEffects_IceFog']&&this[_0x25c8a6(0x486)][_0x25c8a6(0x59e)]>=ImageManager[_0x25c8a6(0x292)]){const _0x4c1765=this[_0x25c8a6(0x486)];return _0x4c1765[Math['floor'](Math[_0x25c8a6(0x1fb)]()*_0x4c1765[_0x25c8a6(0x59e)])];}const _0x377878=ColorManager['WEATHER_FROST_COLORS'],_0xa632e0=1.3;let _0x587283=ColorManager[_0x25c8a6(0x29d)](_0x377878[Math['floor'](Math[_0x25c8a6(0x1fb)]()*_0x377878['length'])],_0xa632e0),_0x592336=ColorManager[_0x25c8a6(0x29d)](_0x377878[Math[_0x25c8a6(0x2db)](Math[_0x25c8a6(0x1fb)]()*_0x377878[_0x25c8a6(0x59e)])],_0xa632e0),_0x4885b7=ColorManager[_0x25c8a6(0x29d)](_0x377878[Math[_0x25c8a6(0x2db)](Math[_0x25c8a6(0x1fb)]()*_0x377878[_0x25c8a6(0x59e)])],_0xa632e0);const _0x13b0ab=new Bitmap(0x3e8,0x3e8);_0x13b0ab[_0x25c8a6(0x35d)](0x1f4,0x28a,0xaf,_0x587283,0x10,0x14),_0x13b0ab[_0x25c8a6(0x35d)](0x1f4,0x1f4,0xc8,_0x4885b7,0x40,0x19),_0x13b0ab[_0x25c8a6(0x35d)](0x1f4,0x15e,0xa0,_0x592336,0x10,0x14),_0x13b0ab[_0x25c8a6(0x275)]=![];if(ImageManager[_0x25c8a6(0x36f)])console[_0x25c8a6(0x582)]('icefog');return this[_0x25c8a6(0x486)]=this[_0x25c8a6(0x486)]||[],this['_cached_WeatherEffects_IceFog'][_0x25c8a6(0x2fb)](_0x13b0ab),_0x13b0ab;},ImageManager[_0x3cb96a(0x571)]=function(){const _0xf58c23=_0x3cb96a;if(this['_cached_WeatherEffects_PurpleHaze']&&this['_cached_WeatherEffects_PurpleHaze'][_0xf58c23(0x59e)]>=ImageManager[_0xf58c23(0x292)]){const _0x24c173=this['_cached_WeatherEffects_PurpleHaze'];return _0x24c173[Math[_0xf58c23(0x2db)](Math[_0xf58c23(0x1fb)]()*_0x24c173[_0xf58c23(0x59e)])];}let _0x18adc6=ColorManager[_0xf58c23(0x2b3)]([Math[_0xf58c23(0x5e6)](0x80)+0x80,0x18,Math[_0xf58c23(0x5e6)](0x80)+0x80]),_0x415585=ColorManager[_0xf58c23(0x2b3)]([Math[_0xf58c23(0x5e6)](0x80)+0x80,0x30,Math[_0xf58c23(0x5e6)](0x80)+0x80]),_0x596579=ColorManager[_0xf58c23(0x2b3)]([Math[_0xf58c23(0x5e6)](0x80)+0x80,0x60,Math['randomInt'](0x80)+0x80]);const _0x20935e=new Bitmap(0x3e8,0x3e8);_0x20935e[_0xf58c23(0x35d)](0x1f4,0x28a,0xaf,_0x18adc6,0x10,0x14),_0x20935e[_0xf58c23(0x35d)](0x1f4,0x1f4,0xc8,_0x596579,0x40,0x19),_0x20935e[_0xf58c23(0x35d)](0x1f4,0x15e,0xa0,_0x415585,0x10,0x14),_0x20935e[_0xf58c23(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0xf58c23(0x1bb));return this[_0xf58c23(0x3e8)]=this['_cached_WeatherEffects_PurpleHaze']||[],this[_0xf58c23(0x3e8)][_0xf58c23(0x2fb)](_0x20935e),_0x20935e;},ImageManager[_0x3cb96a(0x594)]=function(){const _0x42ad13=_0x3cb96a;if(this[_0x42ad13(0x2e8)]&&this['_cached_WeatherEffects_Thunderclouds'][_0x42ad13(0x59e)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x42ad13(0x1ee)!==_0x42ad13(0x1ee)){if(this['_cached_WeatherEffects_ShootingStars']&&this[_0x42ad13(0x365)][_0x42ad13(0x59e)]>=_0x4821ad[_0x42ad13(0x292)]*0x3){const _0x3e16a9=this[_0x42ad13(0x365)];return _0x3e16a9[_0x41b7a1['floor'](_0x177933[_0x42ad13(0x1fb)]()*_0x3e16a9[_0x42ad13(0x59e)])];}const _0x451523=_0x5117c4[_0x42ad13(0x5e6)](0x80)+0x80,_0x21e523=_0x3b940b[_0x42ad13(0x5e6)](0x80)+0x80,_0x578ba1=_0x570162['randomInt'](0x80)+0x80,_0x7bd18f=_0x42ad13(0x31b)['format'](_0x451523,_0x21e523,_0x578ba1),_0x97fe15=_0x42ad13(0x4fc)['format'](_0x451523,_0x21e523,_0x578ba1),_0x1de7c0=_0x202e1e[_0x42ad13(0x5e6)](0x32)+0x32,_0x3f4fb1=0x4,_0x2a3c2c=new _0x2f7232(_0x1de7c0*0x2,_0x3f4fb1);_0x2a3c2c[_0x42ad13(0x408)](0x0,0x0,_0x1de7c0,_0x3f4fb1,_0x7bd18f,_0x97fe15),_0x2a3c2c['_customModified']=![];if(_0x3b659c[_0x42ad13(0x36f)])_0x59367d[_0x42ad13(0x582)](_0x42ad13(0x1e6));return this['_cached_WeatherEffects_ShootingStars']=this[_0x42ad13(0x365)]||[],this['_cached_WeatherEffects_ShootingStars']['push'](_0x2a3c2c),_0x2a3c2c;}else{const _0x1f8703=this[_0x42ad13(0x2e8)];return _0x1f8703[Math[_0x42ad13(0x2db)](Math['random']()*_0x1f8703[_0x42ad13(0x59e)])];}}let _0x3d16d5=ColorManager['arrayToHex']([Math['randomInt'](0x20)+0x10,0x18,Math['randomInt'](0x20)+0x10]),_0x9730b4=ColorManager[_0x42ad13(0x2b3)]([Math[_0x42ad13(0x5e6)](0x30)+0x20,0x30,Math[_0x42ad13(0x5e6)](0x30)+0x20]),_0x4ded02=ColorManager[_0x42ad13(0x2b3)]([Math[_0x42ad13(0x5e6)](0x40)+0x30,0x60,Math[_0x42ad13(0x5e6)](0x40)+0x30]);const _0x37aade=new Bitmap(0x3e8,0x3e8);_0x37aade[_0x42ad13(0x35d)](0x1f4,0x28a,0xaf,_0x3d16d5,0x10,0x14),_0x37aade[_0x42ad13(0x35d)](0x1f4,0x1f4,0xc8,_0x4ded02,0x40,0x19),_0x37aade['drawCloud'](0x1f4,0x15e,0xa0,_0x9730b4,0x10,0x14),_0x37aade[_0x42ad13(0x275)]=![];if(ImageManager[_0x42ad13(0x36f)])console[_0x42ad13(0x582)](_0x42ad13(0x48a));return this[_0x42ad13(0x2e8)]=this[_0x42ad13(0x2e8)]||[],this['_cached_WeatherEffects_Thunderclouds'][_0x42ad13(0x2fb)](_0x37aade),_0x37aade;},ImageManager[_0x3cb96a(0x2aa)]=function(){const _0x27b68b=_0x3cb96a;if(this[_0x27b68b(0x5fe)]&&this[_0x27b68b(0x5fe)]['length']>=ImageManager[_0x27b68b(0x292)]){if(_0x27b68b(0x377)===_0x27b68b(0x377)){const _0x232fd2=this[_0x27b68b(0x5fe)];return _0x232fd2[Math[_0x27b68b(0x2db)](Math[_0x27b68b(0x1fb)]()*_0x232fd2[_0x27b68b(0x59e)])];}else{if(!this['_flags'])return![];if(!this['_flags']['longevity'])return![];return this[_0x27b68b(0x5ca)]===this['data']()[_0x27b68b(0x5ca)];}}const _0x467e1c=Math[_0x27b68b(0x5e6)](0x20)+0x40,_0x1b807e=Math[_0x27b68b(0x5e6)](0x20)+0x60,_0x1f1fdf=Math[_0x27b68b(0x5e6)](0x20)+0x80;let _0x4a2c0e=ColorManager[_0x27b68b(0x2b3)]([_0x467e1c,_0x467e1c,_0x467e1c]),_0x9a5ac4=ColorManager[_0x27b68b(0x2b3)]([_0x1b807e,_0x1b807e,_0x1b807e]),_0x3d4a0b=ColorManager[_0x27b68b(0x2b3)]([_0x1f1fdf,_0x1f1fdf,_0x1f1fdf]);const _0x16029a=new Bitmap(0x1f4,0x1f4);_0x16029a[_0x27b68b(0x35d)](0xfa,0x15e,0x4b,_0x4a2c0e,0x10,0x14),_0x16029a[_0x27b68b(0x35d)](0xfa,0xfa,0x64,_0x3d4a0b,0x40,0x19),_0x16029a[_0x27b68b(0x35d)](0xfa,0xfa,0x3c,_0x9a5ac4,0x10,0x14),_0x16029a[_0x27b68b(0x275)]=![];if(ImageManager[_0x27b68b(0x36f)])console['log'](_0x27b68b(0x24c));return this[_0x27b68b(0x5fe)]=this[_0x27b68b(0x5fe)]||[],this[_0x27b68b(0x5fe)][_0x27b68b(0x2fb)](_0x16029a),_0x16029a;},ImageManager[_0x3cb96a(0x527)]=function(){const _0x2fa48c=_0x3cb96a;if(this[_0x2fa48c(0x41b)]&&this['_cached_WeatherEffects_Mist'][_0x2fa48c(0x59e)]>=ImageManager[_0x2fa48c(0x292)]){const _0x19cff6=this[_0x2fa48c(0x41b)];return _0x19cff6[Math[_0x2fa48c(0x2db)](Math['random']()*_0x19cff6[_0x2fa48c(0x59e)])];}const _0x55d626=ColorManager[_0x2fa48c(0x520)],_0x379e86=ColorManager[_0x2fa48c(0x20f)],_0x4ec809=ColorManager[_0x2fa48c(0x5aa)],_0x145c7d=_0x55d626[Math[_0x2fa48c(0x2db)](Math[_0x2fa48c(0x1fb)]()*_0x55d626[_0x2fa48c(0x59e)])],_0x5a3af8=_0x379e86[Math[_0x2fa48c(0x2db)](Math[_0x2fa48c(0x1fb)]()*_0x379e86['length'])],_0x4f6203=_0x4ec809[Math['floor'](Math[_0x2fa48c(0x1fb)]()*_0x4ec809['length'])],_0x1f7e1c=new Bitmap(0x3e8,0x3e8);_0x1f7e1c[_0x2fa48c(0x35d)](0x1f4,0x28a,0xaf,_0x145c7d,0x10,0x14),_0x1f7e1c[_0x2fa48c(0x35d)](0x1f4,0x1f4,0xc8,_0x4f6203,0x40,0x19),_0x1f7e1c['drawCloud'](0x1f4,0x15e,0xa0,_0x5a3af8,0x10,0x14),_0x1f7e1c[_0x2fa48c(0x275)]=![];if(ImageManager[_0x2fa48c(0x36f)])console[_0x2fa48c(0x582)](_0x2fa48c(0x497));return this[_0x2fa48c(0x41b)]=this[_0x2fa48c(0x41b)]||[],this[_0x2fa48c(0x41b)][_0x2fa48c(0x2fb)](_0x1f7e1c),_0x1f7e1c;},ImageManager[_0x3cb96a(0x5a0)]=function(){const _0x4c8672=_0x3cb96a;if(this[_0x4c8672(0x4d6)]&&this['_cached_WeatherEffects_DustStorm'][_0x4c8672(0x59e)]>=ImageManager[_0x4c8672(0x292)]){const _0x60cc6f=this[_0x4c8672(0x4d6)];return _0x60cc6f[Math['floor'](Math['random']()*_0x60cc6f[_0x4c8672(0x59e)])];}const _0x545633=ColorManager[_0x4c8672(0x43d)][_0x4c8672(0x44e)](),_0x439615=_0x545633[Math[_0x4c8672(0x2db)](Math[_0x4c8672(0x1fb)]()*_0x545633[_0x4c8672(0x59e)])],_0x161c0c=_0x545633[Math[_0x4c8672(0x2db)](Math['random']()*_0x545633[_0x4c8672(0x59e)])],_0x3f0035=_0x545633[Math[_0x4c8672(0x2db)](Math['random']()*_0x545633[_0x4c8672(0x59e)])],_0x4563eb=new Bitmap(0x1f4,0x1f4);_0x4563eb[_0x4c8672(0x35d)](0xfa,0x15e,0x4b,_0x439615,0x6,0x14),_0x4563eb['drawCloud'](0xfa,0xfa,0x64,_0x3f0035,0xc,0x19),_0x4563eb[_0x4c8672(0x35d)](0xfa,0xfa,0x3c,_0x161c0c,0x6,0x14);const _0x957508=_0x4563eb[_0x4c8672(0x197)],_0x3d3797=_0x4563eb[_0x4c8672(0x27f)],_0x33dde2=0x2;let _0x55f2b9=0x80;while(_0x55f2b9--){const _0x176196=Math[_0x4c8672(0x5e6)](_0x957508-_0x33dde2*0x2)+_0x33dde2,_0x2eb3e4=Math[_0x4c8672(0x5e6)](_0x3d3797-_0x33dde2*0x2)+_0x33dde2,_0xbd12c2=_0x545633[Math['floor'](Math[_0x4c8672(0x1fb)]()*_0x545633[_0x4c8672(0x59e)])],_0x287ab0=Math[_0x4c8672(0x5e6)](_0x33dde2)+0x1;_0x4563eb[_0x4c8672(0x546)]=Math[_0x4c8672(0x5e6)](0x40)+0xc0,_0x4563eb[_0x4c8672(0x1c8)](_0x176196,_0x2eb3e4,_0x287ab0,_0xbd12c2);}_0x4563eb['_customModified']=![];if(ImageManager[_0x4c8672(0x36f)])console[_0x4c8672(0x582)](_0x4c8672(0x46a));return this[_0x4c8672(0x4d6)]=this[_0x4c8672(0x4d6)]||[],this[_0x4c8672(0x4d6)]['push'](_0x4563eb),_0x4563eb;},ImageManager[_0x3cb96a(0x4ea)]=function(){const _0x1fccd2=_0x3cb96a;if(this[_0x1fccd2(0x305)]&&this[_0x1fccd2(0x305)][_0x1fccd2(0x59e)]>=ImageManager[_0x1fccd2(0x292)]){if(_0x1fccd2(0x4b3)!=='TJMZV'){const _0x2d3772=this[_0x1fccd2(0x305)];return _0x2d3772[Math[_0x1fccd2(0x2db)](Math['random']()*_0x2d3772['length'])];}else{_0x3584f5=_0x3d4da1['substring'](0x1)['split']('');_0x1e515c[_0x1fccd2(0x59e)]===0x3&&(_0x320879=[_0x40d433[0x0],_0x240a14[0x0],_0x1139a0[0x1],_0x3762e8[0x1],_0x24bbc5[0x2],_0x11674a[0x2]]);while(_0x4846d1[_0x1fccd2(0x59e)]>0x6)_0x82327d[_0x1fccd2(0x529)]();return _0x4289cb='0x'+_0xc3099e[_0x1fccd2(0x45c)](''),[(_0x26b0c5>>0x10&0xff)[_0x1fccd2(0x482)](0x0,0xff),(_0x1ac4e4>>0x8&0xff)[_0x1fccd2(0x482)](0x0,0xff),(_0x5a3ba0&0xff)[_0x1fccd2(0x482)](0x0,0xff)];}}const _0x10e801=ColorManager[_0x1fccd2(0x43d)][_0x1fccd2(0x44e)](),_0xa739f9=1.5,_0xa3bc82=ColorManager['adjustHexColor'](_0x10e801[Math['floor'](Math[_0x1fccd2(0x1fb)]()*_0x10e801[_0x1fccd2(0x59e)])],_0xa739f9),_0x5e91cf=ColorManager['adjustHexColor'](_0x10e801[Math['floor'](Math[_0x1fccd2(0x1fb)]()*_0x10e801[_0x1fccd2(0x59e)])],_0xa739f9),_0x2af854=ColorManager[_0x1fccd2(0x29d)](_0x10e801[Math[_0x1fccd2(0x2db)](Math[_0x1fccd2(0x1fb)]()*_0x10e801[_0x1fccd2(0x59e)])],_0xa739f9),_0xcdad38=new Bitmap(0x3e8,0x3e8);_0xcdad38[_0x1fccd2(0x35d)](0x1f4,0x28a,0xaf,_0xa3bc82,0x10,0x14),_0xcdad38['drawCloud'](0x1f4,0x1f4,0xc8,_0x2af854,0x40,0x19),_0xcdad38[_0x1fccd2(0x35d)](0x1f4,0x15e,0xa0,_0x5e91cf,0x10,0x14),_0xcdad38[_0x1fccd2(0x275)]=![];if(ImageManager[_0x1fccd2(0x36f)])console[_0x1fccd2(0x582)]('dustclouds');return this[_0x1fccd2(0x305)]=this[_0x1fccd2(0x305)]||[],this[_0x1fccd2(0x305)][_0x1fccd2(0x2fb)](_0xcdad38),_0xcdad38;},ImageManager['weatherEffectsSandClouds']=function(){const _0x4bd1af=_0x3cb96a;if(this[_0x4bd1af(0x2cc)]&&this['_cached_WeatherEffects_SandClouds'][_0x4bd1af(0x59e)]>=ImageManager[_0x4bd1af(0x292)]){const _0x8449d2=this[_0x4bd1af(0x2cc)];return _0x8449d2[Math['floor'](Math[_0x4bd1af(0x1fb)]()*_0x8449d2[_0x4bd1af(0x59e)])];}const _0x313d99=ColorManager[_0x4bd1af(0x43d)]['clone'](),_0x4d015c=1.8,_0x5ba854=ColorManager[_0x4bd1af(0x29d)](_0x313d99[Math[_0x4bd1af(0x2db)](Math[_0x4bd1af(0x1fb)]()*_0x313d99[_0x4bd1af(0x59e)])],_0x4d015c),_0x2bc5eb=ColorManager[_0x4bd1af(0x29d)](_0x313d99[Math[_0x4bd1af(0x2db)](Math[_0x4bd1af(0x1fb)]()*_0x313d99[_0x4bd1af(0x59e)])],_0x4d015c),_0x4c022f=ColorManager[_0x4bd1af(0x29d)](_0x313d99[Math[_0x4bd1af(0x2db)](Math[_0x4bd1af(0x1fb)]()*_0x313d99[_0x4bd1af(0x59e)])],_0x4d015c),_0x60e8be=new Bitmap(0x3e8,0x3e8);_0x60e8be[_0x4bd1af(0x35d)](0x1f4,0x28a,0xaf,_0x5ba854,0x10,0x14),_0x60e8be[_0x4bd1af(0x35d)](0x1f4,0x1f4,0xc8,_0x4c022f,0x40,0x19),_0x60e8be[_0x4bd1af(0x35d)](0x1f4,0x15e,0xa0,_0x2bc5eb,0x10,0x14),_0x60e8be[_0x4bd1af(0x275)]=![];if(ImageManager[_0x4bd1af(0x36f)])console[_0x4bd1af(0x582)](_0x4bd1af(0x536));return this[_0x4bd1af(0x2cc)]=this[_0x4bd1af(0x2cc)]||[],this[_0x4bd1af(0x2cc)][_0x4bd1af(0x2fb)](_0x60e8be),_0x60e8be;},ImageManager[_0x3cb96a(0x5be)]=function(){const _0x120d6a=_0x3cb96a;if(this[_0x120d6a(0x2d4)]&&this[_0x120d6a(0x2d4)][_0x120d6a(0x59e)]>=ImageManager[_0x120d6a(0x292)]){if(_0x120d6a(0x1b3)!=='GKgtf'){const _0xdf60a7=this[_0x120d6a(0x2d4)];return _0xdf60a7[Math[_0x120d6a(0x2db)](Math['random']()*_0xdf60a7[_0x120d6a(0x59e)])];}else this[_0x120d6a(0x310)]=_0x497d5f[_0x120d6a(0x5e6)](0x168);}const _0x42b897=ColorManager['WEATHER_POLLEN_COLORS']['clone'](),_0x518952=0.8,_0x4c7975=ColorManager[_0x120d6a(0x29d)](_0x42b897[Math[_0x120d6a(0x2db)](Math[_0x120d6a(0x1fb)]()*_0x42b897['length'])],_0x518952),_0x330042=ColorManager[_0x120d6a(0x29d)](_0x42b897[Math['floor'](Math['random']()*_0x42b897['length'])],_0x518952),_0xd9864a=ColorManager[_0x120d6a(0x29d)](_0x42b897[Math[_0x120d6a(0x2db)](Math['random']()*_0x42b897['length'])],_0x518952),_0x491dd5=new Bitmap(0x1f4,0x1f4);_0x491dd5[_0x120d6a(0x35d)](0xfa,0x15e,0x4b,_0x4c7975,0x4,0x14),_0x491dd5[_0x120d6a(0x35d)](0xfa,0xfa,0x64,_0xd9864a,0x8,0x19),_0x491dd5['drawCloud'](0xfa,0xfa,0x3c,_0x330042,0x4,0x14);const _0x4dc594=_0x491dd5['width'],_0x4fd083=_0x491dd5[_0x120d6a(0x27f)],_0x529948=0x2;let _0x3f00ce=0x20;while(_0x3f00ce--){const _0x1b8d77=Math[_0x120d6a(0x5e6)](_0x4dc594-_0x529948*0x2)+_0x529948,_0x43d867=Math[_0x120d6a(0x5e6)](_0x4fd083-_0x529948*0x2)+_0x529948;let _0x3f72d5=_0x42b897[Math[_0x120d6a(0x2db)](Math[_0x120d6a(0x1fb)]()*_0x42b897[_0x120d6a(0x59e)])];_0x3f72d5=ColorManager[_0x120d6a(0x29d)](_0x3f72d5,_0x518952);const _0x8d35d8=Math[_0x120d6a(0x5e6)](_0x529948)+0x1;_0x491dd5['paintOpacity']=Math[_0x120d6a(0x5e6)](0x40)+0xa0,_0x491dd5[_0x120d6a(0x1c8)](_0x1b8d77,_0x43d867,_0x8d35d8,_0x3f72d5);}_0x491dd5[_0x120d6a(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x120d6a(0x582)]('pollen');return this[_0x120d6a(0x2d4)]=this[_0x120d6a(0x2d4)]||[],this[_0x120d6a(0x2d4)][_0x120d6a(0x2fb)](_0x491dd5),_0x491dd5;},ImageManager[_0x3cb96a(0x4dc)]=function(){const _0x4c9af5=_0x3cb96a;if(this['_cached_WeatherEffects_ToxicGas']&&this[_0x4c9af5(0x1a8)][_0x4c9af5(0x59e)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x4c9af5(0x236)!==_0x4c9af5(0x236)){if(this[_0x4c9af5(0x1e0)][_0x4c9af5(0x509)]&&this['type']!==_0x4c9af5(0x57b))return this[_0x4c9af5(0x300)]();else{if(this[_0x4c9af5(0x1e0)][_0x4c9af5(0x233)]&&this[_0x4c9af5(0x5ca)]!==_0x4c9af5(0x3ba))return this[_0x4c9af5(0x2fc)]();}this[_0x4c9af5(0x1e0)][_0x4c9af5(0x401)]&&this[_0x4c9af5(0x565)]();}else{const _0x235031=this[_0x4c9af5(0x1a8)];return _0x235031[Math[_0x4c9af5(0x2db)](Math[_0x4c9af5(0x1fb)]()*_0x235031['length'])];}}const _0x12fcee='#00ff00',_0x5696d0=0.75,_0x25abf6=ColorManager[_0x4c9af5(0x29d)](_0x12fcee,_0x5696d0),_0x4777a8=ColorManager[_0x4c9af5(0x29d)](_0x25abf6,_0x5696d0),_0x1a2ffd=ColorManager[_0x4c9af5(0x29d)](_0x4777a8,_0x5696d0),_0x5156af=new Bitmap(0x3e8,0x3e8);_0x5156af[_0x4c9af5(0x35d)](0x1f4,0x28a,0xaf,_0x1a2ffd,0x10,0x14),_0x5156af[_0x4c9af5(0x35d)](0x1f4,0x1f4,0xc8,_0x25abf6,0x40,0x19),_0x5156af[_0x4c9af5(0x35d)](0x1f4,0x15e,0xa0,_0x4777a8,0x10,0x14),_0x5156af[_0x4c9af5(0x275)]=![];if(ImageManager[_0x4c9af5(0x36f)])console['log'](_0x4c9af5(0x411));return this['_cached_WeatherEffects_ToxicGas']=this[_0x4c9af5(0x1a8)]||[],this['_cached_WeatherEffects_ToxicGas'][_0x4c9af5(0x2fb)](_0x5156af),_0x5156af;},ImageManager[_0x3cb96a(0x56e)]=function(){const _0x171921=_0x3cb96a;if(this[_0x171921(0x409)]&&ColorManager[_0x171921(0x253)][_0x171921(0x59e)]<=0x0){const _0x2d224a=this[_0x171921(0x409)];return _0x2d224a[Math['floor'](Math[_0x171921(0x1fb)]()*_0x2d224a['length'])];}const _0x416452=ColorManager[_0x171921(0x253)]['pop'](),_0x5074ca=0.85,_0x2598c6=ColorManager[_0x171921(0x29d)](_0x416452,_0x5074ca),_0x1f675e=ColorManager['adjustHexColor'](_0x2598c6,_0x5074ca),_0x2ae380=ColorManager[_0x171921(0x29d)](_0x1f675e,_0x5074ca),_0x291480=new Bitmap(0x3e8,0x3e8);_0x291480[_0x171921(0x35d)](0x1f4,0x28a,0xaf,_0x2ae380,0x10,0x14),_0x291480[_0x171921(0x35d)](0x1f4,0x1f4,0xc8,_0x2598c6,0x40,0x19),_0x291480[_0x171921(0x35d)](0x1f4,0x15e,0xa0,_0x1f675e,0x10,0x14),_0x291480['_customModified']=![];if(ImageManager[_0x171921(0x36f)])console[_0x171921(0x582)](_0x171921(0x26e));return this[_0x171921(0x409)]=this[_0x171921(0x409)]||[],this[_0x171921(0x409)][_0x171921(0x2fb)](_0x291480),_0x291480;},ImageManager[_0x3cb96a(0x364)]=function(){const _0x544959=_0x3cb96a;if(this[_0x544959(0x5f0)]&&ColorManager['WEATHER_RAINBOW_CLOUD_COLORS'][_0x544959(0x59e)]<=0x0){const _0x5298c3=this[_0x544959(0x5f0)];return _0x5298c3[Math['floor'](Math[_0x544959(0x1fb)]()*_0x5298c3['length'])];}const _0x2a5d6d=ColorManager[_0x544959(0x470)][_0x544959(0x529)](),_0x58ecf0=0.85,_0x140098=ColorManager[_0x544959(0x29d)](_0x2a5d6d,_0x58ecf0),_0x265fb1=ColorManager[_0x544959(0x29d)](_0x140098,_0x58ecf0),_0x3b97af=ColorManager[_0x544959(0x29d)](_0x265fb1,_0x58ecf0),_0x34ff48=new Bitmap(0x1f4,0x1f4);_0x34ff48[_0x544959(0x35d)](0xfa,0x15e,0x4b,_0x3b97af,0x10,0x14),_0x34ff48['drawCloud'](0xfa,0xfa,0x64,_0x140098,0x40,0x19),_0x34ff48[_0x544959(0x35d)](0xfa,0xfa,0x3c,_0x265fb1,0x10,0x14),_0x34ff48['_customModified']=![];if(ImageManager[_0x544959(0x36f)])console[_0x544959(0x582)]('rainbowclouds');return this[_0x544959(0x5f0)]=this[_0x544959(0x5f0)]||[],this[_0x544959(0x5f0)][_0x544959(0x2fb)](_0x34ff48),_0x34ff48;},ImageManager['weatherEffectsRainbowOrbs']=function(){const _0x33dfbc=_0x3cb96a;if(this['_cached_WeatherEffects_RainbowOrbs']&&ColorManager[_0x33dfbc(0x5cc)]['length']<=0x0){if('HohUY'===_0x33dfbc(0x29e)){const _0x3c2f5d=this[_0x33dfbc(0x403)];return _0x3c2f5d[Math[_0x33dfbc(0x2db)](Math['random']()*_0x3c2f5d['length'])];}else _0x5b2d68[_0x33dfbc(0x50a)](_0x14b4b4,_0x571520),_0x42b316[_0x33dfbc(0x5ca)]=_0x33dfbc(0x5ad),_0x5d964b[_0x33dfbc(0x5b2)][_0x33dfbc(0x29c)](_0x3a980f);}const _0x3cef38=ColorManager[_0x33dfbc(0x5cc)][_0x33dfbc(0x529)](),_0x271c50=0x20,_0x14b3cb=new Bitmap(_0x271c50,_0x271c50),_0xda212d=Math[_0x33dfbc(0x2db)](_0x271c50/0x2);_0x14b3cb[_0x33dfbc(0x208)](_0xda212d,_0xda212d,_0xda212d,0x168,_0x3cef38,0x0,0x1,0x0),_0x14b3cb[_0x33dfbc(0x376)](_0xda212d-0x1,_0xda212d-0x1,0x2,0x2,_0x3cef38),_0x14b3cb[_0x33dfbc(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x33dfbc(0x582)](_0x33dfbc(0x346));return this[_0x33dfbc(0x403)]=this['_cached_WeatherEffects_RainbowOrbs']||[],this[_0x33dfbc(0x403)][_0x33dfbc(0x2fb)](_0x14b3cb),_0x14b3cb;},ImageManager['weatherEffectsLightOrbs']=function(){const _0x2eb3dc=_0x3cb96a;if(this[_0x2eb3dc(0x43e)]&&this[_0x2eb3dc(0x43e)][_0x2eb3dc(0x59e)]>=ImageManager[_0x2eb3dc(0x292)]){const _0xa72160=this[_0x2eb3dc(0x43e)];return _0xa72160[Math[_0x2eb3dc(0x2db)](Math[_0x2eb3dc(0x1fb)]()*_0xa72160[_0x2eb3dc(0x59e)])];}const _0x2adfe0=ColorManager[_0x2eb3dc(0x26a)],_0x4c6ae2=_0x2adfe0[Math[_0x2eb3dc(0x2db)](Math[_0x2eb3dc(0x1fb)]()*_0x2adfe0['length'])];let _0x4d01ab=Math[_0x2eb3dc(0x5e6)](0x10)+0x10;if(_0x4d01ab%0x2!==0x0)_0x4d01ab+=0x1;const _0x9e32f3=new Bitmap(_0x4d01ab,_0x4d01ab),_0x5e4c66=Math[_0x2eb3dc(0x2db)](_0x4d01ab/0x2);_0x9e32f3[_0x2eb3dc(0x208)](_0x5e4c66,_0x5e4c66,_0x5e4c66,0x168,_0x4c6ae2,0x0,0x1,0x0),_0x9e32f3[_0x2eb3dc(0x376)](_0x5e4c66-0x1,_0x5e4c66-0x1,0x2,0x2,_0x4c6ae2),_0x9e32f3[_0x2eb3dc(0x275)]=![];if(ImageManager[_0x2eb3dc(0x36f)])console[_0x2eb3dc(0x582)](_0x2eb3dc(0x3c5));return this[_0x2eb3dc(0x43e)]=this[_0x2eb3dc(0x43e)]||[],this['_cached_WeatherEffects_LightOrbs'][_0x2eb3dc(0x2fb)](_0x9e32f3),_0x9e32f3;},ImageManager[_0x3cb96a(0x371)]=function(){const _0x279534=_0x3cb96a;if(this[_0x279534(0x199)]&&this[_0x279534(0x199)][_0x279534(0x59e)]>=ImageManager[_0x279534(0x292)]){const _0x32db17=this['_cached_WeatherEffects_DarkOrbs'];return _0x32db17[Math['floor'](Math[_0x279534(0x1fb)]()*_0x32db17[_0x279534(0x59e)])];}const _0x261037=ColorManager[_0x279534(0x4f9)],_0x4fbc6e=_0x261037[Math['floor'](Math[_0x279534(0x1fb)]()*_0x261037[_0x279534(0x59e)])];let _0x5a86a6=Math['randomInt'](0x10)+0x10;if(_0x5a86a6%0x2!==0x0)_0x5a86a6+=0x1;const _0x45f792=new Bitmap(_0x5a86a6,_0x5a86a6),_0x354644=Math[_0x279534(0x2db)](_0x5a86a6/0x2);_0x45f792[_0x279534(0x208)](_0x354644,_0x354644,_0x354644,0x168,_0x4fbc6e,0x0,0x1,0x0),_0x45f792[_0x279534(0x376)](_0x354644-0x1,_0x354644-0x1,0x2,0x2,_0x4fbc6e),_0x45f792[_0x279534(0x275)]=![];if(ImageManager[_0x279534(0x36f)])console[_0x279534(0x582)](_0x279534(0x375));return this[_0x279534(0x199)]=this['_cached_WeatherEffects_DarkOrbs']||[],this['_cached_WeatherEffects_DarkOrbs'][_0x279534(0x2fb)](_0x45f792),_0x45f792;},ImageManager[_0x3cb96a(0x225)]=function(){const _0x4ba74d=_0x3cb96a;if(this['_cached_WeatherEffects_DiamondDust']&&this['_cached_WeatherEffects_DiamondDust'][_0x4ba74d(0x59e)]>=ImageManager[_0x4ba74d(0x292)]){if(_0x4ba74d(0x533)!=='nzNRy'){if(this['_cached_WeatherEffects_Balloons']&&_0x197423[_0x4ba74d(0x428)]['length']<=0x0){const _0x147c7c=this['_cached_WeatherEffects_Balloons'];return _0x147c7c[_0x5ec9da['floor'](_0x43cf29['random']()*_0x147c7c[_0x4ba74d(0x59e)])];}const _0x1152b0=_0x1bf315[_0x4ba74d(0x428)][_0x4ba74d(0x529)](),_0x3dca26=_0x464118[_0x4ba74d(0x29d)](_0x1152b0,0.8),_0x30b957=[_0x1152b0,_0x3dca26],_0x32b141=new _0x21eb1b(0x64,0x24);_0x32b141['drawBalloon'](_0x30b957),_0x32b141[_0x4ba74d(0x275)]=![];if(_0x447d97['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x31097b['log'](_0x4ba74d(0x1e3));return this[_0x4ba74d(0x425)]=this[_0x4ba74d(0x425)]||[],this[_0x4ba74d(0x425)][_0x4ba74d(0x2fb)](_0x32b141),_0x32b141;}else{const _0x5a45c8=this[_0x4ba74d(0x54e)];return _0x5a45c8[Math['floor'](Math[_0x4ba74d(0x1fb)]()*_0x5a45c8['length'])];}}const _0x5ccd23=ColorManager[_0x4ba74d(0x50d)],_0x50c656=1.3;let _0x596109=ColorManager[_0x4ba74d(0x29d)](_0x5ccd23[Math['floor'](Math[_0x4ba74d(0x1fb)]()*_0x5ccd23[_0x4ba74d(0x59e)])],_0x50c656),_0x45a118=ColorManager[_0x4ba74d(0x29d)](_0x5ccd23[Math['floor'](Math['random']()*_0x5ccd23[_0x4ba74d(0x59e)])],_0x50c656),_0x576790=ColorManager[_0x4ba74d(0x29d)](_0x5ccd23[Math['floor'](Math[_0x4ba74d(0x1fb)]()*_0x5ccd23[_0x4ba74d(0x59e)])],_0x50c656);const _0x2f50fa=new Bitmap(0x1f4,0x1f4);_0x2f50fa[_0x4ba74d(0x35d)](0xfa,0x15e,0x4b,_0x596109,0x4,0x14),_0x2f50fa[_0x4ba74d(0x35d)](0xfa,0xfa,0x64,_0x576790,0x8,0x19),_0x2f50fa[_0x4ba74d(0x35d)](0xfa,0xfa,0x3c,_0x45a118,0x4,0x14);const _0x148938=_0x2f50fa[_0x4ba74d(0x197)],_0x38d8cf=_0x2f50fa[_0x4ba74d(0x27f)],_0x24b85f=0x2;let _0x29650b=0x20;while(_0x29650b--){if('nZVbN'!=='nZVbN')this[_0x4ba74d(0x4b7)](),this[_0x4ba74d(0x421)](),this['rebornActions']();else{const _0x4a5ef4=Math[_0x4ba74d(0x5e6)](_0x148938-_0x24b85f*0x2)+_0x24b85f,_0x19ade3=Math['randomInt'](_0x38d8cf-_0x24b85f*0x2)+_0x24b85f;let _0x58764d=_0x5ccd23[Math[_0x4ba74d(0x2db)](Math[_0x4ba74d(0x1fb)]()*_0x5ccd23[_0x4ba74d(0x59e)])];_0x58764d=ColorManager[_0x4ba74d(0x29d)](_0x58764d,_0x50c656);const _0x3f3a6d=Math[_0x4ba74d(0x5e6)](_0x24b85f)+0x1;_0x2f50fa['paintOpacity']=Math['randomInt'](0x40)+0xa0,_0x2f50fa[_0x4ba74d(0x1c8)](_0x4a5ef4,_0x19ade3,_0x3f3a6d,_0x58764d);}}const _0x3644ea=_0x24b85f*0x3,_0x3d2b76=_0x3644ea/0x2;_0x29650b=0x8;while(_0x29650b--){if(_0x4ba74d(0x1b0)===_0x4ba74d(0x306)){const _0x261a74=this[_0x4ba74d(0x1ef)];return _0x261a74[_0x268c5c[_0x4ba74d(0x2db)](_0x44b5ee[_0x4ba74d(0x1fb)]()*_0x261a74[_0x4ba74d(0x59e)])];}else{const _0x3fbba3=Math[_0x4ba74d(0x5e6)](_0x148938-_0x3644ea*0x2)+_0x3644ea,_0xcbe546=Math[_0x4ba74d(0x5e6)](_0x38d8cf-_0x3644ea*0x2)+_0x3644ea;let _0x3285df=_0x5ccd23[Math[_0x4ba74d(0x2db)](Math[_0x4ba74d(0x1fb)]()*_0x5ccd23[_0x4ba74d(0x59e)])];_0x3285df=ColorManager[_0x4ba74d(0x29d)](_0x3285df,_0x50c656),_0x2f50fa['paintOpacity']=Math[_0x4ba74d(0x5e6)](0x40)+0xa0,_0x2f50fa['drawStar'](_0x3fbba3,_0xcbe546,_0x3285df,_0x3285df,0x4,_0x3644ea,_0x3d2b76);}}_0x2f50fa[_0x4ba74d(0x275)]=![];if(ImageManager[_0x4ba74d(0x36f)])console[_0x4ba74d(0x582)](_0x4ba74d(0x589));return this[_0x4ba74d(0x54e)]=this[_0x4ba74d(0x54e)]||[],this['_cached_WeatherEffects_DiamondDust'][_0x4ba74d(0x2fb)](_0x2f50fa),_0x2f50fa;},ImageManager[_0x3cb96a(0x21f)]=function(){const _0x140fcd=_0x3cb96a;if(this[_0x140fcd(0x44c)]&&this[_0x140fcd(0x44c)]['length']>=ImageManager[_0x140fcd(0x292)]){const _0x41f8e9=this['_cached_WeatherEffects_CrumblingCave'];return _0x41f8e9[Math[_0x140fcd(0x2db)](Math['random']()*_0x41f8e9[_0x140fcd(0x59e)])];}const _0x31988e=ColorManager[_0x140fcd(0x43d)],_0x3eb1a6=_0x31988e[Math[_0x140fcd(0x2db)](Math[_0x140fcd(0x1fb)]()*_0x31988e[_0x140fcd(0x59e)])],_0x2f9500=_0x31988e[Math['floor'](Math[_0x140fcd(0x1fb)]()*_0x31988e[_0x140fcd(0x59e)])],_0x6a04d0=_0x31988e[Math[_0x140fcd(0x2db)](Math[_0x140fcd(0x1fb)]()*_0x31988e[_0x140fcd(0x59e)])],_0x5bab00=new Bitmap(0x1f4,0x1f4);_0x5bab00[_0x140fcd(0x35d)](0xfa,0x15e,0x4b,_0x3eb1a6,0x4,0x14),_0x5bab00['drawCloud'](0xfa,0xfa,0x64,_0x6a04d0,0x8,0x19),_0x5bab00['drawCloud'](0xfa,0xfa,0x3c,_0x2f9500,0x4,0x14);const _0x3c05c9=_0x5bab00['width'],_0x47104d=_0x5bab00[_0x140fcd(0x27f)],_0x37e50e=0x4;let _0x28ff66=0x80;while(_0x28ff66--){if(_0x140fcd(0x4fd)===_0x140fcd(0x2f7))_0x587bb9[_0x140fcd(0x50a)](_0xd89601,_0x245300),_0x5604cc[_0x140fcd(0x5ca)]=_0x140fcd(0x359),_0x5bae4e[_0x140fcd(0x5b2)]['applyPluginCmdSettings'](_0x365c49);else{const _0x48cdf7=Math['randomInt'](_0x3c05c9-_0x37e50e*0x2)+_0x37e50e,_0x34ced3=Math['randomInt'](_0x47104d-_0x37e50e*0x2)+_0x37e50e;let _0x4517cd=_0x31988e[Math[_0x140fcd(0x2db)](Math[_0x140fcd(0x1fb)]()*_0x31988e[_0x140fcd(0x59e)])];const _0x1bff60=Math[_0x140fcd(0x5e6)](_0x37e50e)+0x1;_0x5bab00[_0x140fcd(0x546)]=Math[_0x140fcd(0x5e6)](0x40)+0xa0,_0x5bab00[_0x140fcd(0x1c8)](_0x48cdf7,_0x34ced3,_0x1bff60,_0x4517cd);}}_0x5bab00[_0x140fcd(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x140fcd(0x582)]('crumblingcave');return this['_cached_WeatherEffects_CrumblingCave']=this[_0x140fcd(0x44c)]||[],this[_0x140fcd(0x44c)]['push'](_0x5bab00),_0x5bab00;},ImageManager[_0x3cb96a(0x493)]=function(){const _0x1b0896=_0x3cb96a;if(this['_cached_WeatherEffects_Aurora']&&this['_cached_WeatherEffects_Aurora']['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']*0x5){const _0x254f26=this['_cached_WeatherEffects_Aurora'];return _0x254f26[Math[_0x1b0896(0x2db)](Math[_0x1b0896(0x1fb)]()*_0x254f26[_0x1b0896(0x59e)])];}const _0x25d704=Math[_0x1b0896(0x5e6)](0xc0)+0x40,_0x155020=Math[_0x1b0896(0x5e6)](0xc0)+0x40,_0x3ff28f=Math[_0x1b0896(0x5e6)](0xc0)+0x40,_0xbe05f8=_0x1b0896(0x31b)[_0x1b0896(0x5a3)](_0x25d704,_0x155020,_0x3ff28f),_0xd3c16f=_0x1b0896(0x4fc)[_0x1b0896(0x5a3)](_0x25d704,_0x155020,_0x3ff28f),_0x1d1a9c=new Bitmap(0x1f4,0x1f4),_0x5bf08a=_0x1d1a9c[_0x1b0896(0x197)],_0x144c8f=_0x1d1a9c[_0x1b0896(0x27f)],_0x9e303b=Math['randomInt'](0xf4240),_0x6ce72c=Math['random']()*0.03+0.02;for(let _0x384256=0x0;_0x384256<_0x144c8f;_0x384256++){if(_0x1b0896(0x53d)===_0x1b0896(0x53d)){const _0x1c6273=(_0x384256+_0x9e303b)*_0x6ce72c;let _0xc3de6d=_0x5bf08a-Math[_0x1b0896(0x2db)](Math[_0x1b0896(0x31f)](_0x1c6273)*0xa)-0x28;const _0x24b474=_0x384256;_0x1d1a9c[_0x1b0896(0x546)]=(0x1-Math['abs'](_0x384256-_0x144c8f/0x2)/(_0x144c8f/0x2))*0xc0,_0x1d1a9c['gradientFillRect'](_0xc3de6d,_0x24b474,Math[_0x1b0896(0x5e6)](0x14)+0xa,0x1,_0xd3c16f,_0xbe05f8);let _0x9a94=Math[_0x1b0896(0x30e)](Math[_0x1b0896(0x572)]((_0x384256+_0x9e303b)*_0x6ce72c)*0x5)+0xa;_0xc3de6d-=_0x9a94,_0x1d1a9c['gradientFillRect'](_0xc3de6d,_0x24b474,_0x9a94,0x1,_0xd3c16f,_0xd3c16f),_0x9a94=Math[_0x1b0896(0x30e)](Math[_0x1b0896(0x31f)]((_0x384256+_0x9e303b)*_0x6ce72c)*0x3c)+0xa0,_0xc3de6d-=_0x9a94;const _0x1955de=Math[_0x1b0896(0x5e6)](0x3c);_0xc3de6d+=_0x1955de,_0x1d1a9c[_0x1b0896(0x408)](_0xc3de6d,_0x24b474,_0x9a94-_0x1955de,0x1,_0xbe05f8,_0xd3c16f);}else _0x9ee747['ConvertParams'](_0x14721a,_0xe9a4b4),_0x2e68aa['type']=_0x1b0896(0x528),_0x479610['WeatherEffects'][_0x1b0896(0x29c)](_0x4ee155);}_0x1d1a9c[_0x1b0896(0x275)]=![];if(ImageManager[_0x1b0896(0x36f)])console['log']('aurora');return this[_0x1b0896(0x435)]=this[_0x1b0896(0x435)]||[],this['_cached_WeatherEffects_Aurora'][_0x1b0896(0x2fb)](_0x1d1a9c),_0x1d1a9c;},ImageManager[_0x3cb96a(0x25f)]=function(){const _0x38ec3a=_0x3cb96a;if(this['_cached_WeatherEffects_ShootingStars']&&this[_0x38ec3a(0x365)][_0x38ec3a(0x59e)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']*0x3){const _0x37fddd=this[_0x38ec3a(0x365)];return _0x37fddd[Math[_0x38ec3a(0x2db)](Math[_0x38ec3a(0x1fb)]()*_0x37fddd[_0x38ec3a(0x59e)])];}const _0x8e7a1f=Math[_0x38ec3a(0x5e6)](0x80)+0x80,_0x4e466b=Math['randomInt'](0x80)+0x80,_0x40656e=Math['randomInt'](0x80)+0x80,_0x52fd97='rgba(%1,\x20%2,\x20%3,\x200)'[_0x38ec3a(0x5a3)](_0x8e7a1f,_0x4e466b,_0x40656e),_0x328028=_0x38ec3a(0x4fc)[_0x38ec3a(0x5a3)](_0x8e7a1f,_0x4e466b,_0x40656e),_0x630a1c=Math[_0x38ec3a(0x5e6)](0x32)+0x32,_0x51fe0b=0x4,_0x459722=new Bitmap(_0x630a1c*0x2,_0x51fe0b);_0x459722['gradientFillRect'](0x0,0x0,_0x630a1c,_0x51fe0b,_0x52fd97,_0x328028),_0x459722['_customModified']=![];if(ImageManager[_0x38ec3a(0x36f)])console[_0x38ec3a(0x582)]('shootingstars');return this['_cached_WeatherEffects_ShootingStars']=this['_cached_WeatherEffects_ShootingStars']||[],this[_0x38ec3a(0x365)][_0x38ec3a(0x2fb)](_0x459722),_0x459722;},ImageManager[_0x3cb96a(0x48b)]=function(){const _0x33a630=_0x3cb96a;if(this['_cached_WeatherEffects_Sparkle'])return this[_0x33a630(0x323)];const _0x18f082=0x20,_0x3c6115=new Bitmap(_0x18f082,_0x18f082),_0x3ba1fa=_0x33a630(0x581);_0x3c6115[_0x33a630(0x57a)](_0x18f082/0x2,_0x18f082/0x2,_0x3ba1fa,_0x3ba1fa,0x4,_0x18f082/0x2,_0x18f082/0x8),_0x3c6115[_0x33a630(0x275)]=![];if(ImageManager[_0x33a630(0x36f)])console[_0x33a630(0x582)](_0x33a630(0x3ba));return this[_0x33a630(0x323)]=_0x3c6115,_0x3c6115;},ImageManager['weatherEffectsAcidRain']=function(){const _0x35b153=_0x3cb96a;if(this['_cached_WeatherEffects_AcidRain']&&this[_0x35b153(0x395)]['length']>=ImageManager[_0x35b153(0x292)]){if(_0x35b153(0x3ce)!=='lDQBH'){this[_0x35b153(0x451)]=this[_0x35b153(0x52c)]()['sprite'][_0x35b153(0x33c)];const _0xe4f54d=this[_0x35b153(0x52c)]()[_0x35b153(0x42f)]['lifespanVariance'],_0x4010d5=_0x47c88f['WeatherEffects']['MakeVariance'](_0xe4f54d);this[_0x35b153(0x451)]=_0xebd144['max'](0x1,_0x11fb71['ceil'](this[_0x35b153(0x451)]+_0x4010d5)),this[_0x35b153(0x1e8)]=this[_0x35b153(0x451)],this[_0x35b153(0x4a8)]!==this[_0x35b153(0x5ca)]&&(this[_0x35b153(0x4a8)]=this[_0x35b153(0x5ca)],this[_0x35b153(0x451)]=_0x582c89['randomInt'](this[_0x35b153(0x451)])+0x1);}else{const _0x5a03ba=this[_0x35b153(0x395)];return _0x5a03ba[Math[_0x35b153(0x2db)](Math[_0x35b153(0x1fb)]()*_0x5a03ba[_0x35b153(0x59e)])];}}const _0x44fd15=new Bitmap(0x1f4,0x1f4),_0x474c65=_0x35b153(0x5bf),_0x3373f1=_0x35b153(0x54c),_0x51ffa6=_0x44fd15[_0x35b153(0x197)],_0x1ae754=_0x44fd15[_0x35b153(0x27f)],_0x48aa1e=0x3c,_0x162f47=_0x48aa1e/0x2,_0x984c5e=0x2;let _0x2235eb=0x10;while(_0x2235eb--){if(_0x35b153(0x573)===_0x35b153(0x573)){const _0xd1fa1d=Math[_0x35b153(0x5e6)](_0x51ffa6-_0x48aa1e)+_0x48aa1e,_0xe2095e=Math[_0x35b153(0x5e6)](_0x1ae754-_0x984c5e)+_0x984c5e;_0x44fd15['paintOpacity']=Math[_0x35b153(0x5e6)](0x40)+0xc0,_0x44fd15[_0x35b153(0x408)](_0xd1fa1d,_0xe2095e,_0x162f47,0x2,_0x474c65,_0x3373f1),_0x44fd15['fillRect'](_0xd1fa1d+_0x162f47,_0xe2095e,_0x162f47,0x2,_0x3373f1);}else{const _0x1ba62c=_0x417c75['randomInt'](_0x4b292a-_0xd00efc*0x2)+_0x1325d9,_0x39dfdf=_0x5948ec[_0x35b153(0x5e6)](_0x1d6bb2-_0x24e831*0x2)+_0x48aefd,_0x52d92e=_0x498977[_0x35b153(0x5e6)](_0xd0e5aa/0x2)+_0x8994bd/0x2;_0x26ac44[_0x35b153(0x546)]=_0x342ebf['randomInt'](0x40)+0xc0,_0x299615[_0x35b153(0x1c8)](_0x1ba62c,_0x39dfdf,_0x52d92e,_0x35b153(0x3a6)),_0x5d9dc3[_0x35b153(0x198)](_0x1ba62c,_0x39dfdf,_0x52d92e-0x2),_0x17d7e1[_0x35b153(0x1c8)](_0x1ba62c+_0x52d92e/0x3,_0x39dfdf-_0x52d92e/0x3,_0x52d92e/0x3,_0x35b153(0x22c));}}_0x44fd15[_0x35b153(0x275)]=![];if(ImageManager[_0x35b153(0x36f)])console[_0x35b153(0x582)]('acidrain');return this[_0x35b153(0x395)]=this[_0x35b153(0x395)]||[],this[_0x35b153(0x395)][_0x35b153(0x2fb)](_0x44fd15),_0x44fd15;},ImageManager[_0x3cb96a(0x3f6)]=function(){const _0x401ee2=_0x3cb96a;if(this[_0x401ee2(0x3b0)]&&this[_0x401ee2(0x3b0)][_0x401ee2(0x59e)]>=ImageManager[_0x401ee2(0x292)]){if('SfRfS'==='SfRfS'){const _0x247aef=this[_0x401ee2(0x3b0)];return _0x247aef[Math['floor'](Math[_0x401ee2(0x1fb)]()*_0x247aef[_0x401ee2(0x59e)])];}else for(const _0x4310a3 of _0x123bd0){this['getGeneratedWeatherParticle'](_0x4310a3);}}const _0x1db7f2=new Bitmap(0x1f4,0x1f4),_0x4348bf=_0x401ee2(0x549),_0x561e20='rgba(255,64,64,1)',_0x151216=_0x1db7f2[_0x401ee2(0x197)],_0x19522b=_0x1db7f2[_0x401ee2(0x27f)],_0x8471a8=0x64,_0xca8dcd=_0x8471a8/0x2,_0x16031a=0x3;let _0x3ac1f4=0x10;while(_0x3ac1f4--){if(_0x401ee2(0x3a5)!==_0x401ee2(0x3a5))[_0x401ee2(0x3c8),_0x401ee2(0x426)][_0x401ee2(0x4ca)](_0x1c5c0d)&&_0x505aa2[_0x401ee2(0x4a1)](_0x15d882,![],_0x4f753a),[_0x401ee2(0x474),'both'][_0x401ee2(0x4ca)](_0x28534b)&&_0x5d6af2[_0x401ee2(0x4a1)](_0x4e03cf,!![],_0x44bdad);else{const _0x449297=Math[_0x401ee2(0x5e6)](_0x151216-_0x8471a8)+_0x8471a8,_0x33e82d=Math[_0x401ee2(0x5e6)](_0x19522b-_0x16031a)+_0x16031a;_0x1db7f2[_0x401ee2(0x546)]=Math[_0x401ee2(0x5e6)](0x40)+0xc0,_0x1db7f2['gradientFillRect'](_0x449297,_0x33e82d,_0xca8dcd,0x2,_0x4348bf,_0x561e20),_0x1db7f2[_0x401ee2(0x376)](_0x449297+_0xca8dcd,_0x33e82d,_0xca8dcd,0x2,_0x561e20);}}_0x1db7f2[_0x401ee2(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x401ee2(0x582)](_0x401ee2(0x32d));return this[_0x401ee2(0x3b0)]=this[_0x401ee2(0x3b0)]||[],this[_0x401ee2(0x3b0)][_0x401ee2(0x2fb)](_0x1db7f2),_0x1db7f2;},ImageManager['weatherEffectsConfetti']=function(){const _0x5e8d8a=_0x3cb96a;if(this[_0x5e8d8a(0x2a2)]&&ColorManager[_0x5e8d8a(0x485)][_0x5e8d8a(0x59e)]<=0x0){if(_0x5e8d8a(0x3f2)!==_0x5e8d8a(0x38d)){const _0x3c1c37=this['_cached_WeatherEffects_Confetti'];return _0x3c1c37[Math[_0x5e8d8a(0x2db)](Math[_0x5e8d8a(0x1fb)]()*_0x3c1c37[_0x5e8d8a(0x59e)])];}else{if(this[_0x5e8d8a(0x3b1)]&&this['_cached_WeatherEffects_HouseDust']['length']>=_0x1cc523[_0x5e8d8a(0x292)]){const _0x3f1a4d=this[_0x5e8d8a(0x3b1)];return _0x3f1a4d[_0x1c1fe8[_0x5e8d8a(0x2db)](_0x4c1f32[_0x5e8d8a(0x1fb)]()*_0x3f1a4d[_0x5e8d8a(0x59e)])];}const _0x4e332a=new _0x369f51(0x1f4,0x1f4),_0x1bf7e7=_0x4e332a[_0x5e8d8a(0x197)],_0x445259=_0x4e332a[_0x5e8d8a(0x27f)],_0x5910dc=_0x2f4fed[_0x5e8d8a(0x5aa)][_0x5e8d8a(0x44e)](),_0x323227=1.5,_0xfc93e2=0x1;let _0x10a75a=0x20;while(_0x10a75a--){const _0x5aeba2=_0x2dbc90[_0x5e8d8a(0x5e6)](_0x1bf7e7-_0xfc93e2*0x2)+_0xfc93e2,_0x37e8c6=_0x2e5657[_0x5e8d8a(0x5e6)](_0x445259-_0xfc93e2*0x2)+_0xfc93e2;let _0x40a050=_0x5910dc[_0x5b9cce[_0x5e8d8a(0x2db)](_0x21c256[_0x5e8d8a(0x1fb)]()*_0x5910dc[_0x5e8d8a(0x59e)])];_0x40a050=_0x564176[_0x5e8d8a(0x29d)](_0x40a050,_0x323227);const _0x35fc88=_0x25e1b1[_0x5e8d8a(0x5e6)](_0xfc93e2)+0x1;_0x4e332a[_0x5e8d8a(0x546)]=_0x527ff7[_0x5e8d8a(0x5e6)](0x40)+0xa0,_0x4e332a[_0x5e8d8a(0x1c8)](_0x5aeba2,_0x37e8c6,_0x35fc88,_0x40a050);}_0x4e332a[_0x5e8d8a(0x275)]=![];if(_0x120646['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0xa9e9c1['log'](_0x5e8d8a(0x4b5));return this[_0x5e8d8a(0x3b1)]=this['_cached_WeatherEffects_HouseDust']||[],this[_0x5e8d8a(0x3b1)]['push'](_0x4e332a),_0x4e332a;}}this[_0x5e8d8a(0x2a2)]=this[_0x5e8d8a(0x2a2)]||[];const _0x10eddd=ColorManager['WEATHER_CONFETTI_COLORS'][_0x5e8d8a(0x529)](),_0x3a8a95=_0x5e8d8a(0x4b0);{const _0xde8c1c=0x8,_0x350ffe=new Bitmap(_0xde8c1c*0x2,_0xde8c1c*0x2);_0x350ffe[_0x5e8d8a(0x1c8)](_0xde8c1c,_0xde8c1c,_0xde8c1c,_0x3a8a95),_0x350ffe['drawCircle'](_0xde8c1c,_0xde8c1c,_0xde8c1c-0x1,_0x10eddd),_0x350ffe[_0x5e8d8a(0x275)]=![],this[_0x5e8d8a(0x2a2)]['push'](_0x350ffe);}{if('vVehl'===_0x5e8d8a(0x543)){const _0x4fb842=this[_0x5e8d8a(0x52c)]()[_0x5e8d8a(0x3b4)]['hueVariations']||[];if(_0x4fb842['length']<=0x0)_0x4fb842[_0x5e8d8a(0x2fb)](0x0);this[_0x5e8d8a(0x3c4)]=_0x4fb842[_0x5c9194[_0x5e8d8a(0x2db)](_0x43951a[_0x5e8d8a(0x1fb)]()*_0x4fb842[_0x5e8d8a(0x59e)])],this[_0x5e8d8a(0x2bc)](this['_baseHue']);}else{const _0x28eae8=new Bitmap(0x10,0x8);_0x28eae8[_0x5e8d8a(0x376)](0x0,0x0,0x10,0x8,_0x3a8a95),_0x28eae8['fillRect'](0x1,0x1,0xe,0x6,_0x10eddd),_0x28eae8[_0x5e8d8a(0x275)]=![],this[_0x5e8d8a(0x2a2)][_0x5e8d8a(0x2fb)](_0x28eae8);}}const _0x87210e=new Bitmap(0x10,0x10);_0x87210e['drawStar'](0x8,0x8,_0x3a8a95,_0x3a8a95,0x5,0x8,0x4),_0x87210e[_0x5e8d8a(0x57a)](0x8,0x8,_0x10eddd,_0x10eddd,0x5,0x7,0x3),_0x87210e[_0x5e8d8a(0x275)]=![];if(ImageManager[_0x5e8d8a(0x36f)])console[_0x5e8d8a(0x582)](_0x5e8d8a(0x359));return this[_0x5e8d8a(0x2a2)][_0x5e8d8a(0x2fb)](_0x87210e),_0x87210e;},ImageManager[_0x3cb96a(0x1b2)]=function(){const _0x2a5bb8=_0x3cb96a;if(this['_cached_WeatherEffects_SunBeam']&&ColorManager[_0x2a5bb8(0x3df)][_0x2a5bb8(0x59e)]<=0x0){const _0x4dd2fd=this[_0x2a5bb8(0x3f9)];return _0x4dd2fd[Math['floor'](Math['random']()*_0x4dd2fd[_0x2a5bb8(0x59e)])];}const _0x4a4ec6=ColorManager['WEATHER_SUNBEAM_COLORS'][_0x2a5bb8(0x529)](),_0x29e0c2=new Bitmap(0x3e8,0x3e8),_0x154d68=_0x29e0c2['width']/0x2;return _0x29e0c2[_0x2a5bb8(0x208)](_0x154d68,_0x154d68,_0x154d68,0x168,_0x4a4ec6,0x0,0x1,0x0),_0x29e0c2['_customModified']=![],this[_0x2a5bb8(0x3f9)]=this[_0x2a5bb8(0x3f9)]||[],this['_cached_WeatherEffects_SunBeam'][_0x2a5bb8(0x2fb)](_0x29e0c2),_0x29e0c2;},ImageManager['weatherEffectsPrismBeams']=function(){const _0x16310e=_0x3cb96a;if(this[_0x16310e(0x276)]&&ColorManager['WEATHER_PRISMBEAM_COLORS'][_0x16310e(0x59e)]<=0x0){const _0x50d7f1=this[_0x16310e(0x276)];return _0x50d7f1[Math[_0x16310e(0x2db)](Math['random']()*_0x50d7f1[_0x16310e(0x59e)])];}const _0x2733ea=ColorManager[_0x16310e(0x226)][_0x16310e(0x529)](),_0x1f49f9=new Bitmap(0x3e8,0x3e8),_0x4c801a=_0x1f49f9[_0x16310e(0x197)]/0x2;return _0x1f49f9[_0x16310e(0x208)](_0x4c801a,_0x4c801a,_0x4c801a,0x168,_0x2733ea,0x0,0x1,0x0),_0x1f49f9[_0x16310e(0x275)]=![],this[_0x16310e(0x276)]=this[_0x16310e(0x276)]||[],this[_0x16310e(0x276)][_0x16310e(0x2fb)](_0x1f49f9),_0x1f49f9;},ImageManager['weatherEffectsArcticBeams']=function(){const _0x5c4270=_0x3cb96a;if(this[_0x5c4270(0x50f)]&&ColorManager[_0x5c4270(0x3a4)]['length']<=0x0){const _0x264849=this[_0x5c4270(0x50f)];return _0x264849[Math[_0x5c4270(0x2db)](Math['random']()*_0x264849[_0x5c4270(0x59e)])];}let _0xe11037=ColorManager['WEATHER_ARCTIC_BEAM_COLORS'][_0x5c4270(0x529)]();_0xe11037=ColorManager[_0x5c4270(0x29d)](_0xe11037,1.2);const _0x769141=new Bitmap(0x3e8,0x3e8),_0x5e27a8=_0x769141[_0x5c4270(0x197)]/0x2;return _0x769141[_0x5c4270(0x208)](_0x5e27a8,_0x5e27a8,_0x5e27a8,0x168,_0xe11037,0x0,0x1,0x0),_0x769141['_customModified']=![],this[_0x5c4270(0x50f)]=this[_0x5c4270(0x50f)]||[],this[_0x5c4270(0x50f)][_0x5c4270(0x2fb)](_0x769141),_0x769141;},ImageManager[_0x3cb96a(0x595)]=function(){const _0x102c88=_0x3cb96a;if(this['_cached_WeatherEffects_LensFlare']&&this['_cached_WeatherEffects_LensFlare'][_0x102c88(0x59e)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x102c88(0x244)!==_0x102c88(0x44d)){const _0x3f339d=this[_0x102c88(0x1a2)];return _0x3f339d[Math[_0x102c88(0x2db)](Math[_0x102c88(0x1fb)]()*_0x3f339d[_0x102c88(0x59e)])];}else{const _0x1ea571=this[_0x102c88(0x3d7)];_0x4dc975=_0x3c7ec1||[_0x102c88(0x22f),'#880000'],_0x1ea571[_0x102c88(0x1a5)](),_0x1ea571[_0x102c88(0x3cf)](0x0,0.11738,-0.11738,0x0,99.6785,-39.5524),_0x1ea571[_0x102c88(0x3a3)]=_0x102c88(0x4b0),_0x1ea571[_0x102c88(0x540)]=0xa;const _0x2a91cd=_0x1ea571['createLinearGradient'](0x0,this[_0x102c88(0x27f)],this['width']*0x2,this[_0x102c88(0x27f)]*0x14);_0x2a91cd[_0x102c88(0x537)](0x0,_0x3e2a33[0x0]),_0x2a91cd[_0x102c88(0x537)](0x1,_0x2bdb01[0x1]),_0x1ea571[_0x102c88(0x45a)]=_0x2a91cd,(_0x1ea571['beginPath'](),_0x1ea571[_0x102c88(0x494)](489.1,324.8),_0x1ea571[_0x102c88(0x28f)](492.6,324.4,516.9,356.8,515.5,360.1),_0x1ea571['bezierCurveTo'](514.1,363.4,473.9,368.2,471.8,365.3),_0x1ea571['bezierCurveTo'](469.7,362.5,485.6,325.2,489.1,324.8)),_0x1ea571[_0x102c88(0x5bc)](),_0x1ea571['stroke'](),(_0x1ea571[_0x102c88(0x2fd)](),_0x1ea571[_0x102c88(0x494)](622.6,156.7),_0x1ea571[_0x102c88(0x28f)](622.6,230.8,556.4,341.5,488.3,341.5),_0x1ea571['bezierCurveTo'](418.2,341.5,0x162,230.8,0x162,156.7),_0x1ea571[_0x102c88(0x28f)](0x162,82.6,414.2,14.3,488.3,14.3),_0x1ea571[_0x102c88(0x28f)](562.4,14.3,622.6,82.6,622.6,156.7)),_0x1ea571[_0x102c88(0x5bc)](),_0x1ea571[_0x102c88(0x296)](),_0x1ea571['lineWidth']=0x5,(_0x1ea571['beginPath'](),_0x1ea571[_0x102c88(0x494)](0x1de,0x156),_0x1ea571[_0x102c88(0x28f)](486.5,340.3,492.4,338.5,503.5,341.1),_0x1ea571[_0x102c88(0x28f)](482.2,561.7,393.8,609.5,366.7,789.6),_0x1ea571[_0x102c88(0x28f)](366.2,792.9,368.2,806.3,371.3,831.2)),_0x1ea571[_0x102c88(0x296)](),_0x1ea571[_0x102c88(0x1aa)](),this['paintOpacity']=0x80,this['drawCircle'](this['width']*0x7/0x8,this[_0x102c88(0x27f)]*0x1/0x4,0x4,'white');}}const _0x6beb6d=Math[_0x102c88(0x2d0)]($dataSystem['advanced'][_0x102c88(0x39d)],$dataSystem[_0x102c88(0x405)][_0x102c88(0x45e)])||0x1,_0x34bdb4=Math[_0x102c88(0x29b)](_0x6beb6d*_0x6beb6d+_0x6beb6d*_0x6beb6d),_0x35d328=Math[_0x102c88(0x5e6)](_0x34bdb4*0x1/0x3)+_0x34bdb4*0x2/0x3,_0x28467a=Math[_0x102c88(0x5e6)](0xc8)+0x64,_0x3c4b4a=new Bitmap(_0x35d328,_0x28467a*0x2);_0x3c4b4a[_0x102c88(0x376)](0x0,0x0,_0x35d328,_0x35d328,_0x102c88(0x4b0));const _0x5137d1=_0x3c4b4a[_0x102c88(0x197)]/0x2,_0x6609bb=_0x3c4b4a[_0x102c88(0x27f)],_0x30ca65=_0x5137d1-_0x28467a,_0x2049c1=_0x6609bb/0x2;let _0x517db6=Math[_0x102c88(0x5e6)](0xa)+0x6;const _0x387eb9=_0x30ca65/_0x517db6;for(let _0x9fa6c2=0x0;_0x9fa6c2<_0x517db6;_0x9fa6c2++){if(_0x102c88(0x30b)===_0x102c88(0x30b)){if(Math[_0x102c88(0x1fb)]()<0.4-_0x9fa6c2*0.04)continue;let _0x4563ff=Math[_0x102c88(0x5e6)](_0x28467a*(_0x9fa6c2*0.75)/_0x517db6)+_0x28467a*0x1/_0x517db6;const _0x411bcb=_0x5137d1+_0x9fa6c2*_0x387eb9;_0x3c4b4a[_0x102c88(0x546)]=Math['randomInt'](0x40)+0xc0,_0x3c4b4a[_0x102c88(0x3dc)](_0x411bcb,_0x2049c1,_0x4563ff);}else{const _0x4b6b17=this['_cached_WeatherEffects_CrumblingCave'];return _0x4b6b17[_0x458340[_0x102c88(0x2db)](_0x421c65[_0x102c88(0x1fb)]()*_0x4b6b17[_0x102c88(0x59e)])];}}const _0x36626d=_0x35d328-_0x28467a;_0x3c4b4a['paintOpacity']=Math[_0x102c88(0x5e6)](0x10)+0x10,_0x3c4b4a[_0x102c88(0x414)](_0x36626d,_0x2049c1,_0x28467a),_0x3c4b4a[_0x102c88(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x102c88(0x582)](_0x102c88(0x513));return this[_0x102c88(0x1a2)]=this[_0x102c88(0x1a2)]||[],this[_0x102c88(0x1a2)]['push'](_0x3c4b4a),_0x3c4b4a;},ImageManager[_0x3cb96a(0x4de)]=function(){const _0x35aa64=_0x3cb96a;if(this['_cached_WeatherEffects_MoonBeam']&&ColorManager[_0x35aa64(0x412)][_0x35aa64(0x59e)]<=0x0){if('cXfqB'===_0x35aa64(0x1d0)){const _0x25eab1=this[_0x35aa64(0x49f)];return _0x25eab1[Math['floor'](Math[_0x35aa64(0x1fb)]()*_0x25eab1['length'])];}else _0x3f8e88['ConvertParams'](_0x2fcd53,_0x2c8b08),_0x51dc7e[_0x35aa64(0x5ca)]=_0x35aa64(0x26e),_0x1a1b98[_0x35aa64(0x5b2)][_0x35aa64(0x29c)](_0x406e29);}let _0x28cd70=ColorManager[_0x35aa64(0x412)][_0x35aa64(0x529)]();_0x28cd70=ColorManager['adjustHexColor'](_0x28cd70,1.2);const _0x1832ba=new Bitmap(0x3e8,0x3e8),_0x23a436=_0x1832ba[_0x35aa64(0x197)]/0x2;return _0x1832ba[_0x35aa64(0x208)](_0x23a436,_0x23a436,_0x23a436,0x168,_0x28cd70,0x0,0x1,0x0),_0x1832ba[_0x35aa64(0x275)]=![],this[_0x35aa64(0x49f)]=this['_cached_WeatherEffects_MoonBeam']||[],this[_0x35aa64(0x49f)][_0x35aa64(0x2fb)](_0x1832ba),_0x1832ba;},ImageManager['weatherEffectsUltravioletBeams']=function(){const _0x164404=_0x3cb96a;if(this[_0x164404(0x258)]&&ColorManager[_0x164404(0x456)][_0x164404(0x59e)]<=0x0){if(_0x164404(0x5e0)==='FTyBJ'){const _0x46f0e6=this[_0x164404(0x258)];return _0x46f0e6[Math['floor'](Math[_0x164404(0x1fb)]()*_0x46f0e6[_0x164404(0x59e)])];}else _0x3d3624[_0x164404(0x5fc)](_0x28f0d1,![],_0x28d503);}const _0x569e06=ColorManager['WEATHER_UV_BEAM_COLORS'][_0x164404(0x529)](),_0x652e0d=new Bitmap(0x3e8,0x3e8),_0x2ff80b=_0x652e0d[_0x164404(0x197)]/0x2;return _0x652e0d[_0x164404(0x208)](_0x2ff80b,_0x2ff80b,_0x2ff80b,0x168,_0x569e06,0x0,0x1,0x0),_0x652e0d[_0x164404(0x275)]=![],this[_0x164404(0x258)]=this[_0x164404(0x258)]||[],this[_0x164404(0x258)][_0x164404(0x2fb)](_0x652e0d),_0x652e0d;},ImageManager['weatherEffectsRadioactiveBeams']=function(){const _0x463925=_0x3cb96a;if(this[_0x463925(0x26b)]&&ColorManager[_0x463925(0x23a)][_0x463925(0x59e)]<=0x0){const _0x8797fa=this[_0x463925(0x26b)];return _0x8797fa[Math[_0x463925(0x2db)](Math[_0x463925(0x1fb)]()*_0x8797fa[_0x463925(0x59e)])];}const _0x4b1799=ColorManager[_0x463925(0x23a)][_0x463925(0x529)](),_0x2266b9=new Bitmap(0x3e8,0x3e8),_0x4809b3=_0x2266b9['width']/0x2;return _0x2266b9[_0x463925(0x208)](_0x4809b3,_0x4809b3,_0x4809b3,0x168,_0x4b1799,0x0,0x1,0x0),_0x2266b9[_0x463925(0x275)]=![],this[_0x463925(0x26b)]=this[_0x463925(0x26b)]||[],this[_0x463925(0x26b)]['push'](_0x2266b9),_0x2266b9;},ImageManager[_0x3cb96a(0x4ac)]=function(){const _0x1c99d9=_0x3cb96a;if(this[_0x1c99d9(0x3b1)]&&this[_0x1c99d9(0x3b1)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x29dbf2=this[_0x1c99d9(0x3b1)];return _0x29dbf2[Math['floor'](Math['random']()*_0x29dbf2[_0x1c99d9(0x59e)])];}const _0x3668a9=new Bitmap(0x1f4,0x1f4),_0x488ad7=_0x3668a9['width'],_0x52ac8e=_0x3668a9[_0x1c99d9(0x27f)],_0x2eaf06=ColorManager['WEATHER_CLOUD_WHITE_COLORS'][_0x1c99d9(0x44e)](),_0xaad6ef=1.5,_0x32c043=0x1;let _0x137c2e=0x20;while(_0x137c2e--){const _0x551dee=Math['randomInt'](_0x488ad7-_0x32c043*0x2)+_0x32c043,_0xe1f6d0=Math[_0x1c99d9(0x5e6)](_0x52ac8e-_0x32c043*0x2)+_0x32c043;let _0x53186c=_0x2eaf06[Math[_0x1c99d9(0x2db)](Math[_0x1c99d9(0x1fb)]()*_0x2eaf06[_0x1c99d9(0x59e)])];_0x53186c=ColorManager[_0x1c99d9(0x29d)](_0x53186c,_0xaad6ef);const _0x3a6718=Math[_0x1c99d9(0x5e6)](_0x32c043)+0x1;_0x3668a9['paintOpacity']=Math['randomInt'](0x40)+0xa0,_0x3668a9[_0x1c99d9(0x1c8)](_0x551dee,_0xe1f6d0,_0x3a6718,_0x53186c);}_0x3668a9['_customModified']=![];if(ImageManager[_0x1c99d9(0x36f)])console[_0x1c99d9(0x582)](_0x1c99d9(0x4b5));return this['_cached_WeatherEffects_HouseDust']=this[_0x1c99d9(0x3b1)]||[],this[_0x1c99d9(0x3b1)][_0x1c99d9(0x2fb)](_0x3668a9),_0x3668a9;},ImageManager['weatherEffectsFlameHaze']=function(){const _0x295cd7=_0x3cb96a;if(this[_0x295cd7(0x26f)]&&this[_0x295cd7(0x26f)][_0x295cd7(0x59e)]>=ImageManager[_0x295cd7(0x292)]){if(_0x295cd7(0x4b9)!==_0x295cd7(0x3ec)){const _0x497e23=this['_cached_WeatherEffects_FlameHaze'];return _0x497e23[Math[_0x295cd7(0x2db)](Math[_0x295cd7(0x1fb)]()*_0x497e23['length'])];}else _0x7bfc11[_0x295cd7(0x396)](_0xc34192,!![],_0x4b8aaa,_0xb882);}const _0x57dbde=ColorManager['WEATHER_FLAME_COLORS'][_0x295cd7(0x44e)](),_0x32228d=_0x57dbde[Math[_0x295cd7(0x2db)](Math[_0x295cd7(0x1fb)]()*_0x57dbde[_0x295cd7(0x59e)])];_0x57dbde['remove'](_0x32228d);const _0x3a17a0=_0x57dbde[Math[_0x295cd7(0x2db)](Math[_0x295cd7(0x1fb)]()*_0x57dbde[_0x295cd7(0x59e)])];_0x57dbde[_0x295cd7(0x203)](_0x3a17a0);const _0x17efa9=_0x57dbde[Math[_0x295cd7(0x2db)](Math['random']()*_0x57dbde[_0x295cd7(0x59e)])];_0x57dbde[_0x295cd7(0x203)](_0x17efa9);const _0x2f0993=new Bitmap(0x3e8,0x3e8);_0x2f0993['drawCloud'](0x1f4,0x28a,0xaf,_0x17efa9,0x10,0x14),_0x2f0993[_0x295cd7(0x35d)](0x1f4,0x1f4,0xc8,_0x32228d,0x40,0x19),_0x2f0993[_0x295cd7(0x35d)](0x1f4,0x15e,0xa0,_0x3a17a0,0x10,0x14),_0x2f0993[_0x295cd7(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x295cd7(0x582)](_0x295cd7(0x479));return this[_0x295cd7(0x26f)]=this[_0x295cd7(0x26f)]||[],this[_0x295cd7(0x26f)][_0x295cd7(0x2fb)](_0x2f0993),_0x2f0993;},ImageManager[_0x3cb96a(0x37c)]=function(){const _0xbd32ef=_0x3cb96a;if(this[_0xbd32ef(0x598)]&&this[_0xbd32ef(0x598)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']*0x3){const _0x18582b=this[_0xbd32ef(0x598)];return _0x18582b[Math[_0xbd32ef(0x2db)](Math[_0xbd32ef(0x1fb)]()*_0x18582b[_0xbd32ef(0x59e)])];}const _0x2db3a8=Math['max']($dataSystem[_0xbd32ef(0x405)][_0xbd32ef(0x39d)],$dataSystem[_0xbd32ef(0x405)][_0xbd32ef(0x45e)])||0x1,_0x516baf=new Bitmap(_0x2db3a8,_0x2db3a8),_0x55a3b8=_0xbd32ef(0x581);_0x516baf[_0xbd32ef(0x57a)](_0x2db3a8/0x2,_0x2db3a8/0x2,_0x55a3b8,_0x55a3b8,0x4,0x10,0x4),_0x516baf[_0xbd32ef(0x30c)][_0xbd32ef(0x5f7)](0.5,0.5),_0x516baf['_context'][_0xbd32ef(0x3e6)](_0x2db3a8,_0x2db3a8/0x2),_0x516baf[_0xbd32ef(0x522)](),_0x516baf[_0xbd32ef(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0xbd32ef(0x582)](_0xbd32ef(0x1f6));return this['_cached_WeatherEffects_Spiderbolt']=this[_0xbd32ef(0x598)]||[],this[_0xbd32ef(0x598)][_0xbd32ef(0x2fb)](_0x516baf),_0x516baf;},ImageManager[_0x3cb96a(0x1d9)]=function(){const _0x44b99b=_0x3cb96a;if(this[_0x44b99b(0x2e5)]&&this[_0x44b99b(0x2e5)][_0x44b99b(0x59e)]>=ImageManager[_0x44b99b(0x292)]*0x3){const _0x3af11e=this[_0x44b99b(0x2e5)];return _0x3af11e[Math['floor'](Math['random']()*_0x3af11e[_0x44b99b(0x59e)])];}const _0xa5cf4=_0x44b99b(0x557),_0x4976ab=_0x44b99b(0x3ef);let _0x3d2702=Math['randomInt'](0x1e)+0x1e;if(_0x3d2702%0x2!==0x0)_0x3d2702+=0x1;const _0x24c9b6=0x2,_0x242b1e=new Bitmap(_0x3d2702,_0x24c9b6);_0x242b1e['paintOpacity']=Math[_0x44b99b(0x5e6)](0x40)+0xc0,_0x242b1e[_0x44b99b(0x408)](0x0,0x0,_0x3d2702/0x2,_0x24c9b6,_0xa5cf4,_0x4976ab),_0x242b1e['fillRect'](_0x3d2702/0x2,0x0,_0x3d2702/0x2,_0x24c9b6,_0x4976ab),_0x242b1e['_customModified']=![];if(ImageManager[_0x44b99b(0x36f)])console[_0x44b99b(0x582)](_0x44b99b(0x591));return this[_0x44b99b(0x2e5)]=this['_cached_WeatherEffects_WaterDrop']||[],this[_0x44b99b(0x2e5)][_0x44b99b(0x2fb)](_0x242b1e),_0x242b1e;},ImageManager[_0x3cb96a(0x278)]=function(){const _0x3ddc7e=_0x3cb96a;if(this['_cached_WeatherEffects_SoapBubbles']&&ColorManager[_0x3ddc7e(0x602)][_0x3ddc7e(0x59e)]<=0x0){const _0x2f3a9d=this['_cached_WeatherEffects_SoapBubbles'];return _0x2f3a9d[Math[_0x3ddc7e(0x2db)](Math[_0x3ddc7e(0x1fb)]()*_0x2f3a9d[_0x3ddc7e(0x59e)])];}const _0x4cd94a=ColorManager[_0x3ddc7e(0x602)][_0x3ddc7e(0x529)](),_0x5dadc4=new Bitmap(0x18,0x18),_0x539fc6=0xc,_0x46d885=_0x539fc6/0x3;return _0x5dadc4[_0x3ddc7e(0x1c8)](_0x539fc6,_0x539fc6,_0x539fc6,_0x4cd94a),_0x5dadc4[_0x3ddc7e(0x198)](_0x539fc6,_0x539fc6,_0x539fc6-0x2),_0x5dadc4[_0x3ddc7e(0x1c8)](_0x539fc6+_0x46d885,_0x539fc6-_0x46d885,_0x46d885,_0x3ddc7e(0x581)),_0x5dadc4[_0x3ddc7e(0x275)]=![],this[_0x3ddc7e(0x1c9)]=this[_0x3ddc7e(0x1c9)]||[],this[_0x3ddc7e(0x1c9)][_0x3ddc7e(0x2fb)](_0x5dadc4),_0x5dadc4;},ImageManager['weatherEffectsSmokeClouds']=function(){const _0x15a7da=_0x3cb96a;if(this[_0x15a7da(0x464)]&&this[_0x15a7da(0x464)][_0x15a7da(0x59e)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x15a7da(0x3e4)===_0x15a7da(0x3e4)){const _0x515569=this[_0x15a7da(0x464)];return _0x515569[Math[_0x15a7da(0x2db)](Math['random']()*_0x515569[_0x15a7da(0x59e)])];}else{const _0x4d03ce=this['_cached_WeatherEffects_SmokeClouds'];return _0x4d03ce[_0x2739a7[_0x15a7da(0x2db)](_0x225380['random']()*_0x4d03ce[_0x15a7da(0x59e)])];}}const _0x50ebe9=ColorManager[_0x15a7da(0x238)],_0x3e0807=_0x50ebe9[0x3],_0x1db4e5=_0x50ebe9[0x2],_0x12ecb2=_0x50ebe9[0x1],_0x258d12=new Bitmap(0x1f4,0x1f4);_0x258d12[_0x15a7da(0x35d)](0xfa,0x15e,0x4b,_0x3e0807,0x10,0x14),_0x258d12[_0x15a7da(0x35d)](0xfa,0xfa,0x64,_0x12ecb2,0x40,0x19),_0x258d12['drawCloud'](0xfa,0xfa,0x3c,_0x1db4e5,0x10,0x14),_0x258d12[_0x15a7da(0x275)]=![];if(ImageManager[_0x15a7da(0x36f)])console[_0x15a7da(0x582)](_0x15a7da(0x31d));return this[_0x15a7da(0x464)]=this['_cached_WeatherEffects_SmokeClouds']||[],this['_cached_WeatherEffects_SmokeClouds'][_0x15a7da(0x2fb)](_0x258d12),_0x258d12;},ImageManager[_0x3cb96a(0x2ae)]=function(){const _0x51717c=_0x3cb96a;if(this['_cached_WeatherEffects_Sleet']&&this[_0x51717c(0x39f)][_0x51717c(0x59e)]>=ImageManager[_0x51717c(0x292)]){const _0x1fc5ad=this[_0x51717c(0x39f)];return _0x1fc5ad[Math[_0x51717c(0x2db)](Math[_0x51717c(0x1fb)]()*_0x1fc5ad[_0x51717c(0x59e)])];}const _0xd501e2=ColorManager[_0x51717c(0x50d)],_0x2f7cda=1.3;let _0x49cf03=ColorManager[_0x51717c(0x29d)](_0xd501e2[Math['floor'](Math[_0x51717c(0x1fb)]()*_0xd501e2[_0x51717c(0x59e)])],_0x2f7cda),_0x5b7529=ColorManager['adjustHexColor'](_0xd501e2[Math[_0x51717c(0x2db)](Math[_0x51717c(0x1fb)]()*_0xd501e2['length'])],_0x2f7cda),_0x13b7f2=ColorManager[_0x51717c(0x29d)](_0xd501e2[Math[_0x51717c(0x2db)](Math['random']()*_0xd501e2[_0x51717c(0x59e)])],_0x2f7cda);const _0x3cdc70=new Bitmap(0x1f4,0x1f4);_0x3cdc70[_0x51717c(0x35d)](0xfa,0x15e,0x4b,_0x49cf03,0x4,0x14),_0x3cdc70['drawCloud'](0xfa,0xfa,0x64,_0x13b7f2,0x8,0x19),_0x3cdc70[_0x51717c(0x35d)](0xfa,0xfa,0x3c,_0x5b7529,0x4,0x14);const _0x2a0c5b=_0x3cdc70['width'],_0x3bf9f9=_0x3cdc70[_0x51717c(0x27f)],_0x1cbd61=0x4;let _0x25a0f1=0x10;while(_0x25a0f1--){const _0x2ef6e5=Math['randomInt'](_0x2a0c5b-_0x1cbd61*0x2)+_0x1cbd61,_0x31da52=Math[_0x51717c(0x5e6)](_0x3bf9f9-_0x1cbd61*0x2)+_0x1cbd61;let _0x376796=_0xd501e2[Math[_0x51717c(0x2db)](Math[_0x51717c(0x1fb)]()*_0xd501e2[_0x51717c(0x59e)])];_0x376796=ColorManager[_0x51717c(0x29d)](_0x376796,_0x2f7cda),_0x3cdc70[_0x51717c(0x546)]=Math['randomInt'](0x40)+0xc0,_0x3cdc70['drawStar'](_0x2ef6e5,_0x31da52,_0x376796,_0x376796,0x4,_0x1cbd61,_0x1cbd61/0x2);}_0x3cdc70[_0x51717c(0x275)]=![];if(ImageManager[_0x51717c(0x36f)])console[_0x51717c(0x582)](_0x51717c(0x1f3));return this['_cached_WeatherEffects_Sleet']=this['_cached_WeatherEffects_Sleet']||[],this[_0x51717c(0x39f)][_0x51717c(0x2fb)](_0x3cdc70),_0x3cdc70;},ImageManager[_0x3cb96a(0x3ca)]=function(){const _0x1616b6=_0x3cb96a;if(this[_0x1616b6(0x432)]&&this['_cached_WeatherEffects_Tempest'][_0x1616b6(0x59e)]>=ImageManager[_0x1616b6(0x292)]){const _0x273eca=this[_0x1616b6(0x432)];return _0x273eca[Math[_0x1616b6(0x2db)](Math['random']()*_0x273eca[_0x1616b6(0x59e)])];}const _0x5ecf67=Math['randomInt'](0x20)+0x40,_0xa32743=Math[_0x1616b6(0x5e6)](0x20)+0x60,_0x3cdeec=Math[_0x1616b6(0x5e6)](0x20)+0x80;let _0xe72ff9=ColorManager[_0x1616b6(0x2b3)]([_0x5ecf67,_0x5ecf67,_0x5ecf67]),_0xd86fef=ColorManager[_0x1616b6(0x2b3)]([_0xa32743,_0xa32743,_0xa32743]),_0x43ff73=ColorManager[_0x1616b6(0x2b3)]([_0x3cdeec,_0x3cdeec,_0x3cdeec]);const _0x1f8989=new Bitmap(0x3e8,0x3e8);_0x1f8989[_0x1616b6(0x35d)](0x1f4,0x28a,0xaf,_0xe72ff9,0x10,0x14),_0x1f8989['drawCloud'](0x1f4,0x1f4,0xc8,_0x43ff73,0x40,0x19),_0x1f8989[_0x1616b6(0x35d)](0x1f4,0x15e,0xa0,_0xd86fef,0x10,0x14),_0x1f8989[_0x1616b6(0x275)]=![];if(ImageManager[_0x1616b6(0x36f)])console[_0x1616b6(0x582)](_0x1616b6(0x550));return this[_0x1616b6(0x432)]=this['_cached_WeatherEffects_Tempest']||[],this[_0x1616b6(0x432)][_0x1616b6(0x2fb)](_0x1f8989),_0x1f8989;},ImageManager['weatherEffectsGrassyGust']=function(){const _0x1d631e=_0x3cb96a;if(this['_cached_WeatherEffects_GrassyGust']&&ColorManager[_0x1d631e(0x23b)]['length']<=0x0){if('VBqza'===_0x1d631e(0x1b1)){const _0x486325=this[_0x1d631e(0x1ef)];return _0x486325[Math[_0x1d631e(0x2db)](Math[_0x1d631e(0x1fb)]()*_0x486325[_0x1d631e(0x59e)])];}else _0x45b0f3[_0x1d631e(0x50a)](_0x2f203e,_0xf1ccf0),_0x293613[_0x1d631e(0x5ca)]=_0x1d631e(0x223),_0x20c8dd['WeatherEffects'][_0x1d631e(0x29c)](_0x261dfe);}const _0x398d61=ColorManager['WEATHER_GRASSY_GUST_COLORS'][_0x1d631e(0x529)](),_0x3aa8d6=ColorManager[_0x1d631e(0x29d)](_0x398d61,0.5),_0x30f54d=0xc,_0x4039b9=0x4,_0x298c38=new Bitmap(_0x30f54d,_0x4039b9);_0x298c38[_0x1d631e(0x376)](0x0,0x0,_0x30f54d,_0x4039b9/0x2,_0x398d61),_0x298c38[_0x1d631e(0x376)](0x0,_0x4039b9/0x2,_0x30f54d,_0x4039b9/0x2,_0x3aa8d6),_0x298c38[_0x1d631e(0x275)]=![];if(ImageManager[_0x1d631e(0x36f)])console[_0x1d631e(0x582)](_0x1d631e(0x4e9));return this[_0x1d631e(0x1ef)]=this[_0x1d631e(0x1ef)]||[],this[_0x1d631e(0x1ef)][_0x1d631e(0x2fb)](_0x298c38),_0x298c38;},ImageManager[_0x3cb96a(0x3ea)]=function(){const _0x471503=_0x3cb96a;if(this['_cached_WeatherEffects_Xtreme']&&this['_cached_WeatherEffects_Xtreme'][_0x471503(0x59e)]>=ImageManager[_0x471503(0x292)]){const _0x5bacbe=this['_cached_WeatherEffects_Xtreme'];return _0x5bacbe[Math[_0x471503(0x2db)](Math[_0x471503(0x1fb)]()*_0x5bacbe[_0x471503(0x59e)])];}const _0x4b1a75=_0x471503(0x581),_0xa8afd2=_0x471503(0x566),_0x3279ae=_0x471503(0x1a1),_0x1768cb=0x1f4,_0x1fdd12=new Bitmap(_0x1768cb,_0x1768cb);let _0x570b04=0x40;while(_0x570b04--){const _0xa37998=Math[_0x471503(0x5e6)](0x32)+0xa,_0x5c0332=Math[_0x471503(0x5e6)](0x32)+0x1b8,_0x345383=Math[_0x471503(0x5e6)](0x1e0)+0xa,_0x1234a2=(_0x5c0332-_0xa37998)/0x2,_0x25c088=Math[_0x471503(0x5e6)](0x3)+0x1c,_0x41ff16=ColorManager['hexToRgba'](_0x3279ae,0x0),_0x3cb5f0=ColorManager['hexToRgba'](_0x3279ae,Math['random']());_0x1fdd12['gradientFillRect'](_0xa37998,_0x345383,Math['floor'](_0x1234a2),_0x25c088,_0x41ff16,_0x3cb5f0),_0x1fdd12[_0x471503(0x408)](_0xa37998+Math[_0x471503(0x2db)](_0x1234a2),_0x345383,Math[_0x471503(0x30e)](_0x1234a2),_0x25c088,_0x3cb5f0,_0x41ff16);}_0x570b04=0x20;while(_0x570b04--){if(_0x471503(0x3ee)!==_0x471503(0x3ee)){if(this[_0x471503(0x432)]&&this[_0x471503(0x432)][_0x471503(0x59e)]>=_0x3a47c2[_0x471503(0x292)]){const _0x44b68f=this['_cached_WeatherEffects_Tempest'];return _0x44b68f[_0x2b2688[_0x471503(0x2db)](_0x506ee1['random']()*_0x44b68f[_0x471503(0x59e)])];}const _0xb2531a=_0x2bef69[_0x471503(0x5e6)](0x20)+0x40,_0x11dfe3=_0x4085d6['randomInt'](0x20)+0x60,_0x14685c=_0x27830c['randomInt'](0x20)+0x80;let _0xbf6cdb=_0x3bbff1['arrayToHex']([_0xb2531a,_0xb2531a,_0xb2531a]),_0x571c00=_0x4db62b[_0x471503(0x2b3)]([_0x11dfe3,_0x11dfe3,_0x11dfe3]),_0x23c3c1=_0x552948[_0x471503(0x2b3)]([_0x14685c,_0x14685c,_0x14685c]);const _0x23d91d=new _0x139bad(0x3e8,0x3e8);_0x23d91d['drawCloud'](0x1f4,0x28a,0xaf,_0xbf6cdb,0x10,0x14),_0x23d91d['drawCloud'](0x1f4,0x1f4,0xc8,_0x23c3c1,0x40,0x19),_0x23d91d[_0x471503(0x35d)](0x1f4,0x15e,0xa0,_0x571c00,0x10,0x14),_0x23d91d[_0x471503(0x275)]=![];if(_0x10e392[_0x471503(0x36f)])_0x12f636[_0x471503(0x582)](_0x471503(0x550));return this[_0x471503(0x432)]=this[_0x471503(0x432)]||[],this[_0x471503(0x432)][_0x471503(0x2fb)](_0x23d91d),_0x23d91d;}else{const _0xa58bfc=Math['randomInt'](0x32)+0x64,_0x231c62=Math[_0x471503(0x5e6)](0x32)+0x15e,_0x258ecc=Math[_0x471503(0x5e6)](0x1e0)+0xa,_0x15072b=(_0x231c62-_0xa58bfc)/0x2,_0xf6d27d=Math[_0x471503(0x5e6)](0x6)+0xa,_0x54d530=ColorManager[_0x471503(0x5eb)](_0xa8afd2,0x0),_0x500b62=ColorManager[_0x471503(0x5eb)](_0xa8afd2,Math[_0x471503(0x1fb)]());_0x1fdd12[_0x471503(0x408)](_0xa58bfc,_0x258ecc,Math[_0x471503(0x2db)](_0x15072b),_0xf6d27d,_0x54d530,_0x500b62),_0x1fdd12['gradientFillRect'](_0xa58bfc+Math[_0x471503(0x2db)](_0x15072b),_0x258ecc,Math['ceil'](_0x15072b),_0xf6d27d,_0x500b62,_0x54d530);}}_0x570b04=0x10;while(_0x570b04--){if(_0x471503(0x3a8)==='bDmgb')_0x106cde[_0x471503(0x356)][_0x471503(0x1cb)]['call'](this),this['_baseSprite'][_0x471503(0x436)](this[_0x471503(0x3b2)]);else{const _0xe2ed1=Math[_0x471503(0x5e6)](0x32)+0xa,_0x4698f5=Math[_0x471503(0x5e6)](0x32)+0x1b8,_0x1d8427=Math['randomInt'](0x1e0)+0xa,_0x35607c=(_0x4698f5-_0xe2ed1)/0x2,_0xb752e1=Math[_0x471503(0x5e6)](0x6)+0x5,_0x2447ac=ColorManager['hexToRgba'](_0x4b1a75,0x0),_0x15e97a=ColorManager['hexToRgba'](_0x4b1a75,0x1);_0x1fdd12[_0x471503(0x408)](_0xe2ed1,_0x1d8427,Math[_0x471503(0x2db)](_0x35607c),_0xb752e1,_0x2447ac,_0x15e97a),_0x1fdd12[_0x471503(0x408)](_0xe2ed1+Math['floor'](_0x35607c),_0x1d8427,Math[_0x471503(0x30e)](_0x35607c),_0xb752e1,_0x15e97a,_0x2447ac);}}const _0x482764=_0x471503(0x557),_0x26d419=_0x471503(0x3ef),_0x3969ca=0xc8,_0x466656=_0x3969ca/0x2,_0x545787=0x6;_0x570b04=0x10;while(_0x570b04--){if(_0x471503(0x530)!==_0x471503(0x530)){const _0x35459c=_0xeec8a6[_0x471503(0x5e6)](_0xec06be-_0x130431)+_0x56a637,_0x343da2=_0x29e8ae[_0x471503(0x5e6)](_0x39bc13-_0x33fc46)+_0x386f41;_0x5ce038[_0x471503(0x546)]=_0x54adbd[_0x471503(0x5e6)](0x40)+0xc0,_0x1b21aa[_0x471503(0x408)](_0x35459c,_0x343da2,_0x130c22,0x2,_0x2fb369,_0x2b7db2),_0x4cfcdd[_0x471503(0x376)](_0x35459c+_0x542f36,_0x343da2,_0x220cf4,0x2,_0x427677);}else{const _0x310f0e=Math['randomInt'](_0x1768cb-_0x3969ca)+_0x3969ca,_0x3a05ab=Math[_0x471503(0x5e6)](_0x1768cb-_0x545787)+_0x545787;_0x1fdd12['paintOpacity']=Math[_0x471503(0x5e6)](0x40)+0xc0,_0x1fdd12['gradientFillRect'](_0x310f0e,_0x3a05ab,_0x466656,0x2,_0x482764,_0x26d419),_0x1fdd12[_0x471503(0x376)](_0x310f0e+_0x466656,_0x3a05ab,_0x466656,0x2,_0x26d419);}}_0x1fdd12[_0x471503(0x275)]=![];if(ImageManager[_0x471503(0x36f)])console['log']('xtreme');return this[_0x471503(0x294)]=this[_0x471503(0x294)]||[],this[_0x471503(0x294)]['push'](_0x1fdd12),_0x1fdd12;},ImageManager[_0x3cb96a(0x4e8)]=function(){const _0xddfecd=_0x3cb96a;if(this[_0xddfecd(0x425)]&&ColorManager[_0xddfecd(0x428)]['length']<=0x0){const _0x550f6c=this['_cached_WeatherEffects_Balloons'];return _0x550f6c[Math['floor'](Math[_0xddfecd(0x1fb)]()*_0x550f6c[_0xddfecd(0x59e)])];}const _0x1ef0d8=ColorManager[_0xddfecd(0x428)][_0xddfecd(0x529)](),_0x26656b=ColorManager[_0xddfecd(0x29d)](_0x1ef0d8,0.8),_0x8ff009=[_0x1ef0d8,_0x26656b],_0x509148=new Bitmap(0x64,0x24);_0x509148[_0xddfecd(0x231)](_0x8ff009),_0x509148[_0xddfecd(0x275)]=![];if(ImageManager[_0xddfecd(0x36f)])console[_0xddfecd(0x582)]('balloon');return this[_0xddfecd(0x425)]=this[_0xddfecd(0x425)]||[],this[_0xddfecd(0x425)][_0xddfecd(0x2fb)](_0x509148),_0x509148;},ImageManager[_0x3cb96a(0x5a7)]=function(){const _0x1a5c21=_0x3cb96a;if(this[_0x1a5c21(0x1fd)]&&this[_0x1a5c21(0x1fd)][_0x1a5c21(0x59e)]>=ImageManager[_0x1a5c21(0x292)]){const _0x114e9e=this[_0x1a5c21(0x1fd)];return _0x114e9e[Math[_0x1a5c21(0x2db)](Math[_0x1a5c21(0x1fb)]()*_0x114e9e[_0x1a5c21(0x59e)])];}const _0x25fd39=_0x1a5c21(0x22f);let _0x38979b=Math['randomInt'](0x32)+0x64;if(_0x38979b%0x2!==0x0)_0x38979b+=0x1;const _0x40b6e5=new Bitmap(_0x38979b,0x8);_0x40b6e5[_0x1a5c21(0x341)](_0x25fd39),_0x40b6e5[_0x1a5c21(0x275)]=![];if(ImageManager[_0x1a5c21(0x36f)])console[_0x1a5c21(0x582)](_0x1a5c21(0x21c));return this[_0x1a5c21(0x1fd)]=this[_0x1a5c21(0x1fd)]||[],this[_0x1a5c21(0x1fd)][_0x1a5c21(0x2fb)](_0x40b6e5),_0x40b6e5;},ImageManager['weatherEffectsFireworksFlower']=function(){const _0x66956b=_0x3cb96a;if(this[_0x66956b(0x59f)]&&this[_0x66956b(0x59f)][_0x66956b(0x59e)]>=ImageManager[_0x66956b(0x292)]){if('QtmbN'===_0x66956b(0x2cb)){const _0x10c703=this[_0x66956b(0x59f)];return _0x10c703[Math[_0x66956b(0x2db)](Math[_0x66956b(0x1fb)]()*_0x10c703['length'])];}else{if(_0x4cb099[_0x66956b(0x49b)]())return;this[_0x66956b(0x383)]['x']=_0x9670f5[_0x66956b(0x1c1)]()*_0x1945c4['tileWidth'](),this['origin']['y']=_0x213c69[_0x66956b(0x585)]()*_0x978d3e[_0x66956b(0x570)]();}}const _0x55d283='#ff0000',_0x39aa7c=new Bitmap(0xc8,0xc8);_0x39aa7c[_0x66956b(0x302)](_0x55d283),_0x39aa7c[_0x66956b(0x275)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x66956b(0x582)](_0x66956b(0x57b));return this['_cached_WeatherEffects_FireworksFlower']=this['_cached_WeatherEffects_FireworksFlower']||[],this['_cached_WeatherEffects_FireworksFlower'][_0x66956b(0x2fb)](_0x39aa7c),_0x39aa7c;},ImageManager[_0x3cb96a(0x54f)]=function(){const _0x12c742=_0x3cb96a;if(this['_cached_WeatherEffects_ShadowBurst']&&ColorManager[_0x12c742(0x262)]['length']<=0x0){const _0x4d4d02=this['_cached_WeatherEffects_ShadowBurst'];return _0x4d4d02[Math[_0x12c742(0x2db)](Math['random']()*_0x4d4d02[_0x12c742(0x59e)])];}const _0x30d1af=ColorManager['WEATHER_SHADOW_BURST_COLORS'][_0x12c742(0x529)](),_0x107a23=new Bitmap(0x3e8,0x3e8),_0x262f72=_0x107a23[_0x12c742(0x197)]/0x2;_0x107a23[_0x12c742(0x208)](_0x262f72,_0x262f72,_0x262f72,0x168,_0x30d1af,0x0,0x1,0x0),_0x107a23[_0x12c742(0x275)]=![];if(ImageManager[_0x12c742(0x36f)])console['log']('shadowburst');return this[_0x12c742(0x22e)]=this[_0x12c742(0x22e)]||[],this[_0x12c742(0x22e)]['push'](_0x107a23),_0x107a23;},ImageManager['weatherEffectsCloudBurst']=function(){const _0x5b1a1d=_0x3cb96a;if(this[_0x5b1a1d(0x4ed)]&&this[_0x5b1a1d(0x4ed)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x5b1a1d(0x505)===_0x5b1a1d(0x505)){const _0x51cb31=this[_0x5b1a1d(0x4ed)];return _0x51cb31[Math[_0x5b1a1d(0x2db)](Math[_0x5b1a1d(0x1fb)]()*_0x51cb31['length'])];}else{if(this[_0x5b1a1d(0x464)]&&this[_0x5b1a1d(0x464)]['length']>=_0x297170[_0x5b1a1d(0x292)]){const _0x420a60=this['_cached_WeatherEffects_SmokeClouds'];return _0x420a60[_0x3ed138[_0x5b1a1d(0x2db)](_0x40b2ff[_0x5b1a1d(0x1fb)]()*_0x420a60[_0x5b1a1d(0x59e)])];}const _0x4c6e37=_0xb33024[_0x5b1a1d(0x238)],_0x39658c=_0x4c6e37[0x3],_0x3b5b32=_0x4c6e37[0x2],_0x591494=_0x4c6e37[0x1],_0x5a6904=new _0x3f5dbf(0x1f4,0x1f4);_0x5a6904[_0x5b1a1d(0x35d)](0xfa,0x15e,0x4b,_0x39658c,0x10,0x14),_0x5a6904[_0x5b1a1d(0x35d)](0xfa,0xfa,0x64,_0x591494,0x40,0x19),_0x5a6904[_0x5b1a1d(0x35d)](0xfa,0xfa,0x3c,_0x3b5b32,0x10,0x14),_0x5a6904[_0x5b1a1d(0x275)]=![];if(_0xaa611d['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x4d652b['log'](_0x5b1a1d(0x31d));return this[_0x5b1a1d(0x464)]=this[_0x5b1a1d(0x464)]||[],this[_0x5b1a1d(0x464)][_0x5b1a1d(0x2fb)](_0x5a6904),_0x5a6904;}}const _0x4c0ea2=new Bitmap(0x1f4,0x1f4);let _0x1dad4f=ColorManager[_0x5b1a1d(0x2b3)]([Math[_0x5b1a1d(0x5e6)](0x20)+0x10,0x18,Math[_0x5b1a1d(0x5e6)](0x20)+0x10]),_0x109d82=ColorManager[_0x5b1a1d(0x2b3)]([Math['randomInt'](0x30)+0x20,0x30,Math[_0x5b1a1d(0x5e6)](0x30)+0x20]),_0x31b5ab=ColorManager[_0x5b1a1d(0x2b3)]([Math[_0x5b1a1d(0x5e6)](0x40)+0x30,0x60,Math[_0x5b1a1d(0x5e6)](0x40)+0x30]);_0x4c0ea2['drawCloud'](0xfa,0x15e,0x4b,_0x1dad4f,0x10,0x14),_0x4c0ea2[_0x5b1a1d(0x35d)](0xfa,0xfa,0x64,_0x31b5ab,0x40,0x19),_0x4c0ea2[_0x5b1a1d(0x35d)](0xfa,0xfa,0x3c,_0x109d82,0x10,0x14);const _0x29ceca=_0x5b1a1d(0x557),_0x3a3414='rgba(255,255,255,1)',_0x9f29d2=_0x4c0ea2['width'],_0x548ca9=_0x4c0ea2['height'],_0x31aaf1=0x64,_0x22b56b=_0x31aaf1/0x2,_0x211f3f=0x2;let _0x5b14d7=0x20;while(_0x5b14d7--){const _0x36fb89=Math[_0x5b1a1d(0x5e6)](_0x9f29d2-_0x31aaf1)+_0x31aaf1,_0x3d8cbd=Math[_0x5b1a1d(0x5e6)](_0x548ca9-_0x211f3f)+_0x211f3f;_0x4c0ea2[_0x5b1a1d(0x546)]=Math[_0x5b1a1d(0x5e6)](0x40)+0xc0,_0x4c0ea2[_0x5b1a1d(0x408)](_0x36fb89,_0x3d8cbd,Math[_0x5b1a1d(0x30e)](_0x22b56b),_0x211f3f,_0x29ceca,_0x3a3414),_0x4c0ea2[_0x5b1a1d(0x376)](_0x36fb89+Math[_0x5b1a1d(0x30e)](_0x22b56b),_0x3d8cbd,Math[_0x5b1a1d(0x2db)](_0x22b56b),_0x211f3f,_0x3a3414);}_0x4c0ea2['_customModified']=![];if(ImageManager[_0x5b1a1d(0x36f)])console[_0x5b1a1d(0x582)](_0x5b1a1d(0x216));return this[_0x5b1a1d(0x4ed)]=this['_cached_WeatherEffects_CloudBurst']||[],this[_0x5b1a1d(0x4ed)][_0x5b1a1d(0x2fb)](_0x4c0ea2),_0x4c0ea2;},ImageManager[_0x3cb96a(0x265)]=function(){const _0x166eca=_0x3cb96a;if(this['_cached_WeatherEffects_RainbowArch'])return this['_cached_WeatherEffects_RainbowArch'];const _0x42a598=Math[_0x166eca(0x2d0)]($dataSystem[_0x166eca(0x405)][_0x166eca(0x39d)],$dataSystem[_0x166eca(0x405)][_0x166eca(0x45e)])||0x1,_0x4013f0=new Bitmap(_0x42a598,_0x42a598);_0x4013f0['drawRainbowArch'](_0x42a598/0x2,_0x42a598/0x2,_0x42a598/0x2),_0x4013f0[_0x166eca(0x275)]=![];if(ImageManager[_0x166eca(0x36f)])console['log'](_0x166eca(0x206));return this['_cached_WeatherEffects_RainbowArch']=_0x4013f0,_0x4013f0;},ImageManager[_0x3cb96a(0x31a)]=function(){const _0x997a4b=_0x3cb96a;if(this[_0x997a4b(0x37d)]){if('OxQMt'===_0x997a4b(0x5f8)){const _0xf1d0e0=_0x1dd8e9[_0x997a4b(0x5e6)](_0x505c5d-_0x19b486*0x2)+_0x392e69,_0x2d1764=_0x5388db['randomInt'](_0xec01e7-_0x1b930e*0x2)+_0x1606a4;let _0x4d8efe=_0x304d07[_0x1b5a07[_0x997a4b(0x2db)](_0x322e3b[_0x997a4b(0x1fb)]()*_0x279f31['length'])];_0x4d8efe=_0x4e84e2[_0x997a4b(0x29d)](_0x4d8efe,_0x4edffa);const _0x24ba9c=_0x177622[_0x997a4b(0x5e6)](_0x307f8d)+0x1;_0x5c1c4c[_0x997a4b(0x546)]=_0x63544c[_0x997a4b(0x5e6)](0x40)+0xa0,_0xacb176[_0x997a4b(0x1c8)](_0xf1d0e0,_0x2d1764,_0x24ba9c,_0x4d8efe);}else{const _0x3fbbf3=this[_0x997a4b(0x37d)];return _0x3fbbf3[Math['floor'](Math[_0x997a4b(0x1fb)]()*_0x3fbbf3[_0x997a4b(0x59e)])];}}this['_cached_WeatherEffects_Icons']=this[_0x997a4b(0x37d)]||[];const _0x1296b5=ImageManager['WEATHER_EFFECTS_ICON_GENERATED'];for(const _0x14cc26 of _0x1296b5){const _0x361191=new Bitmap(ImageManager['iconWidth'],ImageManager[_0x997a4b(0x418)]);_0x361191[_0x997a4b(0x5e5)]=0x1c,_0x361191[_0x997a4b(0x43a)](_0x14cc26,0x0,0x0,_0x361191[_0x997a4b(0x197)],_0x361191['height'],_0x997a4b(0x2c9)),_0x361191[_0x997a4b(0x275)]=![],this[_0x997a4b(0x37d)][_0x997a4b(0x2fb)](_0x361191);}if(ImageManager[_0x997a4b(0x36f)])console['log']('icons');const _0x5c4007=this[_0x997a4b(0x37d)];return _0x5c4007[Math[_0x997a4b(0x2db)](Math['random']()*_0x5c4007[_0x997a4b(0x59e)])];},ImageManager[_0x3cb96a(0x1b6)]=function(){const _0x209e07=_0x3cb96a;if(this[_0x209e07(0x1b7)]&&this['_cached_WeatherEffects_Fumes'][_0x209e07(0x59e)]>=ImageManager[_0x209e07(0x292)]){const _0x6560e6=this[_0x209e07(0x1b7)];return _0x6560e6[Math[_0x209e07(0x2db)](Math[_0x209e07(0x1fb)]()*_0x6560e6[_0x209e07(0x59e)])];}let _0x469619=ColorManager[_0x209e07(0x238)];const _0x58b0b0=_0x469619[Math[_0x209e07(0x2db)](Math[_0x209e07(0x1fb)]()*_0x469619['length'])];_0x469619=ColorManager[_0x209e07(0x43d)];const _0x427170=_0x469619[Math['floor'](Math[_0x209e07(0x1fb)]()*_0x469619['length'])];_0x469619=ColorManager[_0x209e07(0x5aa)];const _0x1e2565=_0x469619[Math['floor'](Math['random']()*_0x469619['length'])],_0x1b4fd7=new Bitmap(0x3e8,0x3e8);_0x1b4fd7['drawCloud'](0x1f4,0x258,0xaf,_0x58b0b0,0x40,0x14),_0x1b4fd7[_0x209e07(0x35d)](0x1f4,0x1f4,0xc8,_0x1e2565,0x40,0x19),_0x1b4fd7[_0x209e07(0x35d)](0x1f4,0x1c2,0xa0,_0x427170,0x40,0x1e),_0x1b4fd7[_0x209e07(0x275)]=![];if(ImageManager[_0x209e07(0x36f)])console[_0x209e07(0x582)](_0x209e07(0x5fa));return this[_0x209e07(0x1b7)]=this[_0x209e07(0x1b7)]||[],this[_0x209e07(0x1b7)][_0x209e07(0x2fb)](_0x1b4fd7),_0x1b4fd7;},Bitmap[_0x3cb96a(0x356)]['clearCircle']=function(_0x5c2356,_0x23a9af,_0xbb3ad5){const _0x5a0e12=_0x3cb96a,_0x4cab25=this[_0x5a0e12(0x3d7)];_0x4cab25[_0x5a0e12(0x1a5)](),_0x4cab25[_0x5a0e12(0x2b2)]='destination-out',_0x4cab25['beginPath'](),_0x4cab25[_0x5a0e12(0x336)](_0x5c2356,_0x23a9af,_0xbb3ad5,0x0,0x2*Math['PI'],![]),_0x4cab25[_0x5a0e12(0x5bc)](),_0x4cab25[_0x5a0e12(0x1aa)](),this[_0x5a0e12(0x3a1)][_0x5a0e12(0x4b1)]();},Bitmap[_0x3cb96a(0x356)][_0x3cb96a(0x433)]=function(_0x424c2e,_0x44910e,_0x4b59a8,_0x255cc3,_0x55a150,_0x2350a7){const _0x151058=_0x3cb96a,_0xbd6745=this[_0x151058(0x30c)];_0xbd6745['save'](),_0xbd6745[_0x151058(0x45a)]=_0x44910e,_0xbd6745['beginPath'](),_0xbd6745[_0x151058(0x494)](_0x424c2e[0x0],_0x424c2e[0x1]);for(var _0x58910a=0x2;_0x58910a<_0x424c2e[_0x151058(0x59e)];_0x58910a+=0x2){'lpnUG'==='lpnUG'?_0xbd6745['lineTo'](_0x424c2e[_0x58910a],_0x424c2e[_0x58910a+0x1]):(_0x25fbd1[_0x151058(0x50a)](_0x5bfd33,_0x4cff1d),_0x27331c[_0x151058(0x5ca)]=_0x151058(0x604),_0x16c87f[_0x151058(0x5b2)][_0x151058(0x29c)](_0x3bc9b8));}_0xbd6745['lineTo'](_0x424c2e[0x0],_0x424c2e[0x1]),_0xbd6745['strokeStyle']=_0x4b59a8,_0xbd6745[_0x151058(0x540)]=_0x255cc3,_0x2350a7&&_0xbd6745[_0x151058(0x296)](),_0xbd6745['globalAlpha']=_0x55a150,_0xbd6745['fill'](),_0xbd6745[_0x151058(0x4d8)]=0x1,_0xbd6745[_0x151058(0x1aa)]();},Bitmap['prototype']['drawPolyArc']=function(_0x4d172c,_0x2d3e5f,_0xa9ff17,_0x1ef706,_0x21fe2a,_0x599784,_0x567483,_0x48685e){const _0x4459f8=_0x3cb96a;_0x599784=_0x599784[_0x4459f8(0x482)](0.000001,0.999999);const _0x5384f1=this[_0x4459f8(0x3d7)];_0x5384f1['save']();const _0x38c007=_0x1ef706*(Math['PI']/0xb4),_0xc02192=_0xa9ff17*0x2;_0x5384f1[_0x4459f8(0x3e6)](_0x4d172c-_0xa9ff17,_0x2d3e5f-_0xa9ff17);const _0x3cb585=_0x5384f1[_0x4459f8(0x568)](_0xa9ff17,_0xa9ff17,_0x48685e,_0xa9ff17,_0xa9ff17,_0xa9ff17),_0x4be71f=ColorManager[_0x4459f8(0x5eb)](_0x21fe2a,_0x567483/0x2),_0x297886=ColorManager[_0x4459f8(0x5eb)](_0x21fe2a,_0x567483),_0x55150a=ColorManager[_0x4459f8(0x5eb)](_0x21fe2a,0x0);_0x3cb585['addColorStop'](0x0,_0x4be71f),_0x3cb585[_0x4459f8(0x537)](_0x599784/0x2,_0x297886),_0x3cb585[_0x4459f8(0x537)](_0x599784,_0x297886),_0x3cb585[_0x4459f8(0x537)](0x1,_0x55150a),_0x5384f1['fillStyle']=_0x3cb585,_0x5384f1[_0x4459f8(0x2fd)](),_0x5384f1[_0x4459f8(0x494)](_0xa9ff17,_0xa9ff17),_0x5384f1[_0x4459f8(0x1d4)](_0xc02192,_0xa9ff17),_0x5384f1[_0x4459f8(0x336)](_0xa9ff17,_0xa9ff17,_0xa9ff17,0x0,_0x38c007),_0x5384f1[_0x4459f8(0x1d4)](_0xa9ff17,_0xa9ff17),_0x5384f1[_0x4459f8(0x5bc)](),_0x5384f1[_0x4459f8(0x1a5)](),_0x5384f1[_0x4459f8(0x1aa)](),this[_0x4459f8(0x3a1)][_0x4459f8(0x4b1)]();},Bitmap[_0x3cb96a(0x356)][_0x3cb96a(0x42a)]=function(_0x4f0e70,_0x33651d,_0x19cc13,_0x10344d,_0x4135b4,_0x3b48db,_0x2101c8){const _0x4a6150=_0x3cb96a,_0x778597=_0x10344d/_0x19cc13,_0x5854cf=this[_0x4a6150(0x30c)];_0x5854cf['save'](),_0x5854cf[_0x4a6150(0x5f7)](0x1,_0x778597),this[_0x4a6150(0x208)](_0x4f0e70,_0x33651d/_0x778597,_0x19cc13,0x168,_0x4135b4,_0x3b48db,_0x2101c8,0x0),_0x5854cf[_0x4a6150(0x1aa)](),this[_0x4a6150(0x3a1)]['update']();},Bitmap[_0x3cb96a(0x356)][_0x3cb96a(0x35d)]=function(_0x4c8e26,_0x5e94df,_0x2afff9,_0x11416c,_0x1940b6,_0x5032f1){const _0x4e37ae=_0x3cb96a,_0x2e7629=this[_0x4e37ae(0x30c)];_0x2afff9=_0x2afff9||0x1;const _0x3cdfd5=_0x2afff9*0x3/0x5;_0x1940b6=_0x1940b6??0xff,_0x5032f1=_0x5032f1??0xa;const _0x427d15=ColorManager[_0x4e37ae(0x399)](_0x11416c),_0x3d4a28=_0x2e7629[_0x4e37ae(0x568)](_0x3cdfd5,_0x3cdfd5,0x0,_0x3cdfd5,_0x3cdfd5,_0x3cdfd5),_0x245410=_0x4e37ae(0x603)['format'](_0x427d15[0x0],_0x427d15[0x1],_0x427d15[0x2],_0x1940b6/0xff),_0xdafb1='rgba(%1,%2,%3,%4)'[_0x4e37ae(0x5a3)](_0x427d15[0x0],_0x427d15[0x1],_0x427d15[0x2],0x0);_0x3d4a28['addColorStop'](0x0,_0x245410),_0x3d4a28[_0x4e37ae(0x537)](0x1,_0xdafb1);const _0x61ee48=_0x3cdfd5*0x2,_0x52202e=ImageManager['getTemporaryContext'](_0x61ee48,_0x61ee48);_0x52202e['fillStyle']=_0x3d4a28,_0x52202e[_0x4e37ae(0x2fd)](),_0x52202e[_0x4e37ae(0x336)](_0x3cdfd5,_0x3cdfd5,_0x3cdfd5,0x0,Math['PI']*0x2,!![]),_0x52202e[_0x4e37ae(0x5bc)]();for(let _0x2f7c9f=0x0;_0x2f7c9f<_0x5032f1;_0x2f7c9f++){const _0x2f7fb5=Math['random']()*(Math['PI']*0x2),_0x1adfef=Math[_0x4e37ae(0x1fb)]()*Math[_0x4e37ae(0x572)](_0x2f7fb5)*_0x2afff9+(_0x4c8e26-_0x3cdfd5),_0x444cf6=Math[_0x4e37ae(0x1fb)]()*Math[_0x4e37ae(0x31f)](_0x2f7fb5)*_0x2afff9+(_0x5e94df-_0x3cdfd5);_0x2e7629['drawImage'](ImageManager[_0x4e37ae(0x476)](),_0x1adfef,_0x444cf6);}},Bitmap[_0x3cb96a(0x356)][_0x3cb96a(0x57a)]=function(_0x1f1e65,_0xbb689,_0x33fa65,_0x5959ad,_0x5b6403,_0x4770a6,_0x10bb20,_0x596b4e){const _0x2eeaa1=_0x3cb96a;_0x596b4e=_0x596b4e||0x3;const _0x21bc66=this[_0x2eeaa1(0x3d7)];let _0x34b045=Math['PI']/0x2*_0x596b4e,_0x48eca8=_0x1f1e65,_0x57f469=_0xbb689,_0x17be5a=Math['PI']/_0x5b6403;_0x21bc66[_0x2eeaa1(0x1a5)](),_0x21bc66[_0x2eeaa1(0x2fd)](),_0x21bc66[_0x2eeaa1(0x494)](_0x1f1e65,_0xbb689-_0x4770a6);for(let _0xee1346=0x0;_0xee1346<_0x5b6403;_0xee1346++){_0x48eca8=_0x1f1e65+Math['cos'](_0x34b045)*_0x4770a6,_0x57f469=_0xbb689+Math[_0x2eeaa1(0x572)](_0x34b045)*_0x4770a6,_0x21bc66[_0x2eeaa1(0x1d4)](_0x48eca8,_0x57f469),_0x34b045+=_0x17be5a,_0x48eca8=_0x1f1e65+Math[_0x2eeaa1(0x31f)](_0x34b045)*_0x10bb20,_0x57f469=_0xbb689+Math[_0x2eeaa1(0x572)](_0x34b045)*_0x10bb20,_0x21bc66['lineTo'](_0x48eca8,_0x57f469),_0x34b045+=_0x17be5a;}_0x21bc66[_0x2eeaa1(0x1d4)](_0x1f1e65,_0xbb689-_0x4770a6),_0x21bc66[_0x2eeaa1(0x554)](),_0x21bc66[_0x2eeaa1(0x540)]=0x0,_0x21bc66[_0x2eeaa1(0x540)]>0x1&&(_0x2eeaa1(0x322)===_0x2eeaa1(0x29f)?(_0x2779e6['ConvertParams'](_0x3c69c9,_0x5f0b19),_0x1b75b7[_0x2eeaa1(0x5ca)]=_0x2eeaa1(0x206),_0x3408fa['WeatherEffects'][_0x2eeaa1(0x29c)](_0x441a16)):(_0x21bc66['lineWidth']=_0x21bc66[_0x2eeaa1(0x540)]-0x1,_0x21bc66['strokeStyle']=_0x5959ad,_0x21bc66[_0x2eeaa1(0x296)]())),_0x21bc66['fillStyle']=_0x33fa65,_0x21bc66[_0x2eeaa1(0x5bc)](),_0x21bc66[_0x2eeaa1(0x1aa)](),this[_0x2eeaa1(0x3a1)]['update']();},Bitmap[_0x3cb96a(0x356)][_0x3cb96a(0x52f)]=function(){const _0x172833=_0x3cb96a,_0xeb0299=0x6,_0x2fa897=this['context'],_0x182542=this[_0x172833(0x197)]/0x2,_0x5e3822=this['height']/0x2;this['_maxLevel']=0x3,this['_branches']=0x2+Math[_0x172833(0x5e6)](0x2),this['_flakeRadius']=Math[_0x172833(0x547)](_0x182542,_0x5e3822)*0x2/0x3,this[_0x172833(0x4f7)]=Math['PI']*0x2*(Math[_0x172833(0x1fb)]()*0.15+0.7),this[_0x172833(0x544)]=Math[_0x172833(0x2d0)](Math[_0x172833(0x30e)](this[_0x172833(0x197)]/0xc),0x2),_0x2fa897['translate'](_0x182542,_0x5e3822);for(let _0x2852ba=0x0;_0x2852ba<_0xeb0299;_0x2852ba++){this['drawSnowflakeLine'](0x0),_0x2fa897[_0x172833(0x34f)](Math['PI']*0x2/_0xeb0299);}},Bitmap['prototype'][_0x3cb96a(0x2da)]=function(_0x4ca4c3){const _0x1a2580=_0x3cb96a;if(_0x4ca4c3>this[_0x1a2580(0x3ff)])return;const _0x2133fd=this[_0x1a2580(0x3d7)];_0x2133fd[_0x1a2580(0x3a3)]='#ffffff',_0x2133fd[_0x1a2580(0x540)]=0x3,_0x2133fd[_0x1a2580(0x2fd)](),_0x2133fd['moveTo'](0x0,0x0),_0x2133fd[_0x1a2580(0x1d4)](0x0+this[_0x1a2580(0x4e6)],0x0),_0x2133fd['stroke']();for(let _0x39057e=0x1;_0x39057e<this[_0x1a2580(0x575)]+0x1;_0x39057e++){_0x2133fd[_0x1a2580(0x1a5)](),_0x2133fd['translate'](this[_0x1a2580(0x4e6)]*_0x39057e/(this[_0x1a2580(0x575)]+0x1),0x0),_0x2133fd['scale'](0.5,0.5),_0x2133fd['save'](),_0x2133fd[_0x1a2580(0x34f)](this['_flakeAngle']),this[_0x1a2580(0x2da)](_0x4ca4c3+0x1),_0x2133fd[_0x1a2580(0x1aa)](),_0x2133fd[_0x1a2580(0x1a5)](),_0x2133fd[_0x1a2580(0x34f)](-this['_flakeAngle']),this[_0x1a2580(0x2da)](_0x4ca4c3+0x1),_0x2133fd[_0x1a2580(0x1aa)](),_0x2133fd['restore']();}},Bitmap[_0x3cb96a(0x356)][_0x3cb96a(0x4ee)]=function(_0x52cef8,_0x54e26f,_0x1baf65,_0x56b1bf){const _0x418611=_0x3cb96a;let _0x25f4fb=0x1e,_0x5a1348=Math[_0x418611(0x2db)](_0x56b1bf/0x6),_0x3287b6=0x10;const _0x5cb8d1=(0xff-_0x3287b6)/_0x5a1348,_0xa04ae2=(0xff-_0x25f4fb)/_0x5a1348,_0x4952fa=Math[_0x418611(0x2db)](_0x56b1bf/_0x5a1348),_0x1a5a16=_0x1baf65/0x10,_0x13e6fe=_0x54e26f;let _0x472cdb=Math[_0x418611(0x5e6)](0xf4240),_0x5ce580=0x10,_0xbe6c8f=_0x1baf65/0x2,_0x121b22=Math[_0x418611(0x2d0)](0x4,_0x1baf65/0x10);_0x52cef8-=_0x56b1bf;while(_0x5a1348--){_0x25f4fb+=_0xa04ae2,_0x121b22+=_0x1a5a16,_0x3287b6+=_0x5cb8d1,_0x52cef8+=_0x4952fa,_0x54e26f=_0x13e6fe+Math['cos'](_0x472cdb)*_0xbe6c8f/0x2,_0x472cdb+=Math['randomInt'](_0x5ce580)+_0x5ce580/0x2,_0x56b1bf-=_0x4952fa;if(_0x56b1bf<=0x0)break;const _0x1c82f5='rgba(255,\x20%1,\x200,\x201)'[_0x418611(0x5a3)](_0x25f4fb);this[_0x418611(0x546)]=_0x3287b6,this[_0x418611(0x1c8)](_0x52cef8,_0x54e26f,_0x121b22,_0x1c82f5);}this[_0x418611(0x546)]=0xf0,this[_0x418611(0x1c8)](_0x52cef8,_0x54e26f,_0x121b22*0x3/0x4,_0x418611(0x22c));},Bitmap[_0x3cb96a(0x356)][_0x3cb96a(0x522)]=function(){const _0x4114ab=_0x3cb96a,_0x383921=this[_0x4114ab(0x30c)],_0x4a0633=0xa,_0x7a3bf1=0x50,_0x6156db={'x':_0x4a0633,'y':this[_0x4114ab(0x27f)]/0x2},_0x554e02=0x8,_0x386b7b=this['width']-_0x4a0633,_0x2c5002=ColorManager['WEATHER_LIGHTNING_COLORS'][_0x4114ab(0x44e)](),_0x593560=_0x2c5002[Math[_0x4114ab(0x2db)](Math[_0x4114ab(0x1fb)]()*_0x2c5002['length'])],_0x5616c8=0x2,_0x1d4139=this['width']/0x5;_0x383921[_0x4114ab(0x2b2)]='lighter',_0x383921[_0x4114ab(0x3a3)]=_0x593560,_0x383921[_0x4114ab(0x495)]=_0x593560,_0x383921[_0x4114ab(0x45a)]=_0x593560;let _0xc8983b=[],_0x3b1a46=_0x6156db['x']+_0x386b7b;_0xc8983b[_0x4114ab(0x2fb)]({'x':_0x6156db['x'],'y':_0x6156db['y']}),_0xc8983b[_0x4114ab(0x2fb)]({'x':_0x386b7b+(Math[_0x4114ab(0x1fb)]()-0.9)*_0x7a3bf1,'y':Math[_0x4114ab(0x1fb)]()*(this[_0x4114ab(0x27f)]-0x64)+_0x7a3bf1});let _0x248f19=_0x1d4139;while(_0x3b1a46>_0x554e02){const _0x17e6b0=[];for(var _0x2e1f1a=0x0;_0x2e1f1a<_0xc8983b[_0x4114ab(0x59e)]-0x1;_0x2e1f1a++){var _0x5ca741=_0xc8983b[_0x2e1f1a],_0x4136d7=_0xc8983b[_0x2e1f1a+0x1],_0x33adb7=(_0x5ca741['y']+_0x4136d7['y'])/0x2,_0x382e97=_0x33adb7+(Math['random']()*0x2-0x1)*_0x248f19;_0x17e6b0[_0x4114ab(0x2fb)](_0x5ca741,{'x':(_0x5ca741['x']+_0x4136d7['x'])/0x2,'y':_0x382e97});}_0x17e6b0[_0x4114ab(0x2fb)](_0xc8983b[_0x4114ab(0x529)]()),_0xc8983b=_0x17e6b0,_0x248f19/=_0x5616c8,_0x3b1a46/=0x2;}_0x383921[_0x4114ab(0x2b2)]='lighter',_0x383921[_0x4114ab(0x4b4)]=0xf,_0x383921[_0x4114ab(0x2fd)]();for(var _0x2e1f1a=0x0;_0x2e1f1a<_0xc8983b[_0x4114ab(0x59e)];_0x2e1f1a++){_0x383921[_0x4114ab(0x1d4)](_0xc8983b[_0x2e1f1a]['x'],_0xc8983b[_0x2e1f1a]['y']);}let _0x2aab9e=0x3;while(_0x2aab9e--)_0x383921[_0x4114ab(0x296)]();_0x383921[_0x4114ab(0x1aa)](),this[_0x4114ab(0x3a1)][_0x4114ab(0x4b1)]();},Bitmap[_0x3cb96a(0x356)][_0x3cb96a(0x496)]=function(_0x2be484){const _0x502ccf=_0x3cb96a,_0x1579aa=this[_0x502ccf(0x30c)];_0x2be484=_0x2be484||[_0x502ccf(0x463),_0x502ccf(0x478),_0x502ccf(0x551),'#fac159'];const _0x3a6f39=_0x2be484[0x4]||_0x502ccf(0x4b0),_0xfa1fda=_0x2be484[0x5]||_0x502ccf(0x4b0);_0x1579aa[_0x502ccf(0x1a5)](),_0x1579aa['transform'](0x0,0.162467,-0.162467,0x0,101.142,-4.33347),_0x1579aa[_0x502ccf(0x45a)]=_0x2be484[0x0],(_0x1579aa['beginPath'](),_0x1579aa[_0x502ccf(0x494)](555.3,409.4),_0x1579aa['bezierCurveTo'](527.4,409.4,497.2,419.2,497.3,436.6),_0x1579aa[_0x502ccf(0x28f)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x1579aa[_0x502ccf(0x28f)](463.7,482.7,447.7,487.4,391.9,479.6),_0x1579aa[_0x502ccf(0x1d4)](383.8,481.2),_0x1579aa[_0x502ccf(0x1d4)](381.2,481.7),_0x1579aa[_0x502ccf(0x28f)](376.9,509.6,372.6,548.2,346.8,563.2),_0x1579aa['bezierCurveTo'](332.8,526.3,293.1,567.7,267.3,582.7),_0x1579aa[_0x502ccf(0x28f)](307.4,497.6,232.9,526.3,215.7,563.2),_0x1579aa['bezierCurveTo'](200.7,0x220,157.7,541.9,131.9,559.1),_0x1579aa[_0x502ccf(0x28f)](140.4,545.2,146.9,526.3,148.2,507.1),_0x1579aa[_0x502ccf(0x28f)](149.1,493.9,147.6,480.6,142.6,468.8),_0x1579aa[_0x502ccf(0x28f)](168.4,466.7,236.8,435.6,196.3,408.6),_0x1579aa[_0x502ccf(0x28f)](195.1,407.8,193.2,407.2,190.6,406.8),_0x1579aa[_0x502ccf(0x28f)](170.3,403.6,111.9,412.7,90.9,427.9),_0x1579aa[_0x502ccf(0x28f)](104.7,374.2,66.4,0x168,39.7,345.5),_0x1579aa[_0x502ccf(0x28f)](39.7,345.5,104.6,326.9,104.6,279.6),_0x1579aa[_0x502ccf(0x28f)](129.9,305.1,168.2,305.4,189.7,290.3),_0x1579aa[_0x502ccf(0x28f)](215.5,273.1,172.5,245.2,157.5,238.7),_0x1579aa[_0x502ccf(0x28f)](168.2,234.4,185.4,230.2,185.4,215.2),_0x1579aa[_0x502ccf(0x28f)](185.4,184.8,165.4,0x9d,146.1,0x8e),_0x1579aa[_0x502ccf(0x28f)](200.5,133.4,185.4,27.6,185.4,27.6),_0x1579aa['bezierCurveTo'](185.4,27.6,232.7,96.9,287.1,77.6),_0x1579aa[_0x502ccf(0x28f)](278.5,116.3,282.2,163.6,309.4,0xaa),_0x1579aa[_0x502ccf(0x28f)](319.9,172.5,346.7,161.4,346.7,161.4),_0x1579aa['bezierCurveTo'](343.2,202.2,345.5,215.3,369.4,215.3),_0x1579aa[_0x502ccf(0x28f)](392.3,215.3,413.3,0xaa,416.5,133.5),_0x1579aa[_0x502ccf(0x28f)](447.6,142.1,493.3,0x7e,527.7,89.4),_0x1579aa['bezierCurveTo'](527.2,90.9,502.6,170.4,533.7,206.5),_0x1579aa[_0x502ccf(0x28f)](504.5,211.4,477.2,236.8,474.1,0x100),_0x1579aa['bezierCurveTo'](0x1d8,269.2,481.3,279.6,509.4,278.3),_0x1579aa[_0x502ccf(0x28f)](512.3,278.2,515.3,277.9,518.6,277.5),_0x1579aa[_0x502ccf(0x28f)](510.4,326.9,593.3,323.5,593.3,323.5),_0x1579aa['bezierCurveTo'](561.3,347.2,541.7,0x172,555.3,409.4)),_0x1579aa[_0x502ccf(0x5bc)](),_0x1579aa['fillStyle']=_0x2be484[0x1],(_0x1579aa[_0x502ccf(0x2fd)](),_0x1579aa[_0x502ccf(0x494)](509.7,278.3),_0x1579aa[_0x502ccf(0x28f)](501.6,295.2,497.9,314.1,492.3,332.2),_0x1579aa['bezierCurveTo'](482.3,364.8,462.5,0x18e,0x1ae,408.1),_0x1579aa[_0x502ccf(0x28f)](422.2,410.5,413.9,411.5,406.4,414.8),_0x1579aa[_0x502ccf(0x28f)](377.9,427.1,370.6,0x1d2,344.4,482.5),_0x1579aa[_0x502ccf(0x28f)](307.2,0x1fa,259.1,472.5,215.5,477.7),_0x1579aa[_0x502ccf(0x28f)](191.1,480.7,170.2,495.6,148.3,507.2),_0x1579aa['bezierCurveTo'](149.2,0x1ee,147.7,480.7,142.7,468.9),_0x1579aa[_0x502ccf(0x28f)](168.5,466.8,236.9,435.7,196.4,408.7),_0x1579aa[_0x502ccf(0x28f)](195.2,407.9,193.3,407.3,190.7,406.9),_0x1579aa[_0x502ccf(0x28f)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x1579aa[_0x502ccf(0x28f)](104.8,374.3,66.5,360.1,39.8,345.6),_0x1579aa['bezierCurveTo'](39.8,345.6,104.7,0x147,104.7,279.7),_0x1579aa[_0x502ccf(0x28f)](0x82,305.2,168.3,305.5,189.8,290.4),_0x1579aa[_0x502ccf(0x28f)](215.6,273.2,172.6,245.3,157.6,238.8),_0x1579aa[_0x502ccf(0x28f)](168.3,234.5,185.5,230.3,185.5,215.3),_0x1579aa[_0x502ccf(0x28f)](185.5,184.9,165.5,157.1,146.2,142.1),_0x1579aa[_0x502ccf(0x28f)](200.6,133.5,185.5,27.7,185.5,27.7),_0x1579aa[_0x502ccf(0x28f)](185.5,27.7,232.8,0x61,287.2,77.7),_0x1579aa[_0x502ccf(0x28f)](278.6,116.4,282.3,163.7,309.5,170.1),_0x1579aa['bezierCurveTo'](0x140,172.6,346.8,161.5,346.8,161.5),_0x1579aa['bezierCurveTo'](343.3,202.3,345.6,215.4,369.5,215.4),_0x1579aa[_0x502ccf(0x28f)](392.4,215.4,413.4,170.1,416.6,133.6),_0x1579aa[_0x502ccf(0x28f)](447.7,142.2,493.4,126.1,527.8,89.5),_0x1579aa[_0x502ccf(0x28f)](527.3,0x5b,502.7,170.5,533.8,206.6),_0x1579aa[_0x502ccf(0x28f)](504.6,211.5,477.3,236.9,474.2,256.1),_0x1579aa[_0x502ccf(0x28f)](472.2,269.3,481.5,279.6,509.7,278.3)),_0x1579aa['fill'](),_0x1579aa[_0x502ccf(0x45a)]=_0x2be484[0x2],(_0x1579aa[_0x502ccf(0x2fd)](),_0x1579aa['moveTo'](533.9,206.6),_0x1579aa['bezierCurveTo'](504.7,211.5,477.4,236.9,474.3,256.1),_0x1579aa[_0x502ccf(0x28f)](461.6,260.5,449.1,265.3,435.6,271.5),_0x1579aa[_0x502ccf(0x28f)](420.6,278.4,403.5,280.9,390.2,290.6),_0x1579aa[_0x502ccf(0x28f)](0x173,304.6,364.5,329.8,357.1,352.4),_0x1579aa[_0x502ccf(0x28f)](349.7,0x177,337.4,399.6,314.4,405.8),_0x1579aa['bezierCurveTo'](290.1,412.3,0x10a,395.2,0xf1,393.4),_0x1579aa[_0x502ccf(0x28f)](223.2,392.1,206.8,398.4,190.7,406.9),_0x1579aa[_0x502ccf(0x28f)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x1579aa[_0x502ccf(0x28f)](104.8,374.3,66.5,360.1,39.8,345.6),_0x1579aa[_0x502ccf(0x28f)](39.8,345.6,104.7,0x147,104.7,279.7),_0x1579aa[_0x502ccf(0x28f)](0x82,305.2,168.3,305.5,189.8,290.4),_0x1579aa[_0x502ccf(0x28f)](215.6,273.2,172.6,245.3,157.6,238.8),_0x1579aa[_0x502ccf(0x28f)](168.3,234.5,185.5,230.3,185.5,215.3),_0x1579aa[_0x502ccf(0x28f)](185.5,184.9,165.5,157.1,146.2,142.1),_0x1579aa[_0x502ccf(0x28f)](200.6,133.5,185.5,27.7,185.5,27.7),_0x1579aa[_0x502ccf(0x28f)](185.5,27.7,232.8,0x61,287.2,77.7),_0x1579aa[_0x502ccf(0x28f)](278.6,116.4,282.3,163.7,309.5,170.1),_0x1579aa['bezierCurveTo'](0x140,172.6,346.8,161.5,346.8,161.5),_0x1579aa[_0x502ccf(0x28f)](343.3,202.3,345.6,215.4,369.5,215.4),_0x1579aa[_0x502ccf(0x28f)](392.4,215.4,413.4,170.1,416.6,133.6),_0x1579aa[_0x502ccf(0x28f)](447.7,142.2,493.4,126.1,527.8,89.5),_0x1579aa[_0x502ccf(0x28f)](527.4,0x5b,502.8,170.4,533.9,206.6)),_0x1579aa[_0x502ccf(0x5bc)](),_0x1579aa['fillStyle']=_0x2be484[0x3],(_0x1579aa[_0x502ccf(0x2fd)](),_0x1579aa['moveTo'](120.7,325.8),_0x1579aa[_0x502ccf(0x28f)](126.5,334.6,138.7,335.8,149.3,336.1),_0x1579aa[_0x502ccf(0x28f)](193.7,337.4,238.1,338.7,282.5,0x154),_0x1579aa[_0x502ccf(0x28f)](289.7,340.2,297.6,340.2,303.3,335.8),_0x1579aa[_0x502ccf(0x28f)](312.9,328.2,310.8,312.8,317.4,302.5),_0x1579aa[_0x502ccf(0x28f)](324.7,291.1,0x154,0x121,353.1,285.9),_0x1579aa[_0x502ccf(0x28f)](405.5,273.6,444.9,231.7,0x1e1,191.8),_0x1579aa[_0x502ccf(0x28f)](486.2,186.1,491.6,0xb4,493.5,172.5),_0x1579aa[_0x502ccf(0x28f)](498.1,154.8,479.9,137.4,461.6,136.9),_0x1579aa['bezierCurveTo'](443.3,136.5,426.8,0x94,414.2,161.3),_0x1579aa[_0x502ccf(0x28f)](401.7,174.6,398.5,197.8,383.5,208.2),_0x1579aa['bezierCurveTo'](368.5,218.6,339.2,214.6,325.5,202.5),_0x1579aa['bezierCurveTo'](317.3,195.2,313.8,184.1,307.6,0xaf),_0x1579aa[_0x502ccf(0x28f)](291.6,151.6,259.3,144.6,241.8,122.3),_0x1579aa[_0x502ccf(0x28f)](235.7,114.6,231.7,105.4,225.2,98.1),_0x1579aa[_0x502ccf(0x28f)](218.6,0x5b,0xd0,85.9,0xc7,89.8),_0x1579aa['bezierCurveTo'](186.5,95.3,186.2,112.6,188.1,126.1),_0x1579aa[_0x502ccf(0x28f)](192.5,0x9d,198.5,187.7,205.8,0xda),_0x1579aa[_0x502ccf(0x28f)](211.1,239.7,216.2,265.5,201.2,282.2),_0x1579aa[_0x502ccf(0x28f)](189.7,295.1,108.1,306.6,120.7,325.8)),_0x1579aa[_0x502ccf(0x5bc)](),_0x1579aa[_0x502ccf(0x3a3)]=_0xfa1fda,_0x1579aa[_0x502ccf(0x540)]=0x5,(_0x1579aa[_0x502ccf(0x2fd)](),_0x1579aa[_0x502ccf(0x494)](555.3,409.4),_0x1579aa[_0x502ccf(0x28f)](527.4,409.4,497.2,419.2,497.3,436.6),_0x1579aa[_0x502ccf(0x28f)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x1579aa[_0x502ccf(0x28f)](463.7,482.7,447.7,487.4,391.9,479.6),_0x1579aa['lineTo'](383.8,481.2),_0x1579aa['lineTo'](381.2,481.7),_0x1579aa[_0x502ccf(0x28f)](376.9,509.6,372.6,548.2,346.8,563.2),_0x1579aa[_0x502ccf(0x28f)](332.8,526.3,293.1,567.7,267.3,582.7),_0x1579aa[_0x502ccf(0x28f)](307.4,497.6,232.9,526.3,215.7,563.2),_0x1579aa[_0x502ccf(0x28f)](200.7,0x220,157.7,541.9,131.9,559.1),_0x1579aa[_0x502ccf(0x28f)](146.3,535.7,154.9,497.6,142.6,468.8),_0x1579aa[_0x502ccf(0x28f)](168.4,466.7,236.8,435.6,196.3,408.6),_0x1579aa[_0x502ccf(0x28f)](185.6,401.4,114.6,410.7,0x5b,427.9),_0x1579aa[_0x502ccf(0x28f)](104.8,374.2,66.5,0x168,39.8,345.5),_0x1579aa[_0x502ccf(0x28f)](39.8,345.5,104.7,326.9,104.7,279.6),_0x1579aa[_0x502ccf(0x28f)](0x82,305.1,168.3,305.4,189.8,290.3),_0x1579aa[_0x502ccf(0x28f)](215.6,273.1,172.6,245.2,157.6,238.7),_0x1579aa[_0x502ccf(0x28f)](168.3,234.4,185.5,230.2,185.5,215.2),_0x1579aa['bezierCurveTo'](185.5,184.8,165.5,0x9d,146.2,0x8e),_0x1579aa['bezierCurveTo'](200.6,133.4,185.5,27.6,185.5,27.6),_0x1579aa[_0x502ccf(0x28f)](185.5,27.6,232.8,96.9,287.2,77.6),_0x1579aa['bezierCurveTo'](278.6,116.3,282.3,163.6,309.5,0xaa),_0x1579aa[_0x502ccf(0x28f)](0x140,172.5,346.8,161.4,346.8,161.4),_0x1579aa[_0x502ccf(0x28f)](343.3,202.2,345.6,215.3,369.5,215.3),_0x1579aa[_0x502ccf(0x28f)](392.4,215.3,413.4,0xaa,416.6,133.5),_0x1579aa['bezierCurveTo'](447.7,142.1,493.4,0x7e,527.8,89.4),_0x1579aa['bezierCurveTo'](527.3,90.9,502.7,170.4,533.8,206.5),_0x1579aa[_0x502ccf(0x28f)](482.3,215.2,437.1,287.1,518.8,277.4),_0x1579aa['bezierCurveTo'](510.6,326.8,593.5,323.4,593.5,323.4),_0x1579aa['bezierCurveTo'](561.3,347.2,541.7,0x172,555.3,409.4)),_0x1579aa[_0x502ccf(0x296)](),_0x1579aa[_0x502ccf(0x45a)]=_0x3a6f39,(_0x1579aa[_0x502ccf(0x2fd)](),_0x1579aa['moveTo'](236.9,152.9),_0x1579aa['bezierCurveTo'](245.5,185.6,255.3,217.6,268.2,0xf9),_0x1579aa[_0x502ccf(0x28f)](281.4,281.1,296.5,312.4,310.8,344.1),_0x1579aa[_0x502ccf(0x28f)](338.4,0x195,369.3,464.6,393.1,527.2),_0x1579aa[_0x502ccf(0x28f)](0x18f,542.9,404.5,558.8,408.9,0x23f),_0x1579aa['bezierCurveTo'](0x19b,582.4,412.8,589.9,414.4,597.4),_0x1579aa[_0x502ccf(0x28f)](415.2,601.3,0x1a0,605.1,416.7,0x261),_0x1579aa[_0x502ccf(0x28f)](417.6,0x266,419.5,617.1,423.2,620.4),_0x1579aa[_0x502ccf(0x28f)](426.8,623.6,432.5,623.3,435.1,618.9),_0x1579aa[_0x502ccf(0x28f)](437.5,614.8,438.8,611.3,0x1b6,606.5),_0x1579aa['bezierCurveTo'](437.4,603.1,436.7,599.6,0x1b4,596.2),_0x1579aa[_0x502ccf(0x28f)](434.5,589.4,432.8,582.7,430.8,0x240),_0x1579aa[_0x502ccf(0x28f)](426.8,561.9,421.9,0x224,416.7,534.4),_0x1579aa['bezierCurveTo'](0x195,0x1f8,0x187,474.6,376.2,445.6),_0x1579aa[_0x502ccf(0x28f)](344.5,383.6,308.7,323.8,279.9,260.4),_0x1579aa[_0x502ccf(0x28f)](264.1,225.5,0xf8,189.7,237.6,152.8),_0x1579aa[_0x502ccf(0x28f)](237.5,152.3,236.7,152.5,236.9,152.9)),_0x1579aa[_0x502ccf(0x5bc)](),_0x1579aa[_0x502ccf(0x45a)]=_0x3a6f39,(_0x1579aa[_0x502ccf(0x2fd)](),_0x1579aa[_0x502ccf(0x494)](436.6,221.3),_0x1579aa[_0x502ccf(0x28f)](415.7,0xfa,403.1,0x11a,395.3,316.5),_0x1579aa[_0x502ccf(0x28f)](388.4,347.3,382.8,379.1,0x17c,410.6),_0x1579aa[_0x502ccf(0x28f)](378.2,430.6,377.5,0x1c3,378.3,471.1),_0x1579aa[_0x502ccf(0x28f)](378.6,477.6,388.6,477.7,388.5,471.1),_0x1579aa[_0x502ccf(0x28f)](388.2,453.4,387.8,435.8,388.7,418.1),_0x1579aa[_0x502ccf(0x28f)](389.4,0x194,390.9,389.9,392.1,375.8),_0x1579aa[_0x502ccf(0x28f)](395.2,341.9,398.1,308.4,409.7,276.1),_0x1579aa[_0x502ccf(0x28f)](416.6,256.9,426.2,238.9,437.7,222.1),_0x1579aa[_0x502ccf(0x28f)](438.3,221.2,437.1,220.6,436.6,221.3)),_0x1579aa[_0x502ccf(0x5bc)](),_0x1579aa['fillStyle']=_0x3a6f39,(_0x1579aa[_0x502ccf(0x2fd)](),_0x1579aa[_0x502ccf(0x494)](0x86,344.4),_0x1579aa['bezierCurveTo'](209.5,355.1,275.3,397.6,335.7,441.6),_0x1579aa['bezierCurveTo'](343.7,447.4,351.6,453.3,359.4,459.2),_0x1579aa[_0x502ccf(0x28f)](363.3,462.2,367.2,465.1,371.2,468.1),_0x1579aa[_0x502ccf(0x28f)](375.2,471.1,378.3,474.1,383.4,474.6),_0x1579aa[_0x502ccf(0x28f)](385.5,474.8,387.6,472.1,386.8,470.1),_0x1579aa['bezierCurveTo'](383.8,462.7,374.4,0x1ca,368.1,453.5),_0x1579aa[_0x502ccf(0x28f)](360.9,448.2,353.6,442.9,346.3,437.7),_0x1579aa[_0x502ccf(0x28f)](330.9,426.7,315.3,416.1,299.1,406.2),_0x1579aa[_0x502ccf(0x28f)](266.5,386.3,232.2,368.6,195.8,356.6),_0x1579aa[_0x502ccf(0x28f)](175.6,349.9,155.1,345.9,133.9,343.9),_0x1579aa[_0x502ccf(0x28f)](133.7,343.9,133.6,344.4,0x86,344.4)),_0x1579aa[_0x502ccf(0x5bc)](),_0x1579aa[_0x502ccf(0x45a)]=_0x3a6f39,(_0x1579aa[_0x502ccf(0x2fd)](),_0x1579aa[_0x502ccf(0x494)](458.7,294.7),_0x1579aa[_0x502ccf(0x28f)](458.7,294.7,0x1c9,295.4,0x1c6,296.6),_0x1579aa[_0x502ccf(0x28f)](0x1c3,297.8,446.6,299.5,441.2,301.6),_0x1579aa[_0x502ccf(0x28f)](435.8,303.7,429.4,306.2,422.4,309.1),_0x1579aa[_0x502ccf(0x28f)](415.4,0x138,407.8,315.5,400.2,319.5),_0x1579aa[_0x502ccf(0x28f)](399.3,0x140,398.5,320.4,397.6,320.9),_0x1579aa['lineTo'](396.2,321.7),_0x1579aa[_0x502ccf(0x1d4)](395.5,322.1),_0x1579aa[_0x502ccf(0x28f)](395.4,322.2,395.4,0x142,395.4,0x142),_0x1579aa[_0x502ccf(0x1d4)](395.3,321.8),_0x1579aa[_0x502ccf(0x1d4)](395.1,321.5),_0x1579aa[_0x502ccf(0x28f)](394.5,320.6,393.9,319.7,393.3,318.8),_0x1579aa[_0x502ccf(0x1d4)](392.4,317.5),_0x1579aa[_0x502ccf(0x1d4)](0x188,316.7),_0x1579aa['bezierCurveTo'](390.9,314.6,390.1,312.6,389.3,310.6),_0x1579aa[_0x502ccf(0x28f)](387.9,306.6,0x183,302.6,386.2,298.9),_0x1579aa[_0x502ccf(0x28f)](384.7,291.5,0x180,284.8,383.6,279.1),_0x1579aa[_0x502ccf(0x28f)](382.8,267.8,383.4,260.5,383.5,259.4),_0x1579aa[_0x502ccf(0x28f)](383.6,258.2,384.2,265.4,386.3,0x115),_0x1579aa[_0x502ccf(0x28f)](387.4,282.8,388.8,289.7,390.7,297.2),_0x1579aa[_0x502ccf(0x28f)](391.7,300.9,392.8,304.8,394.3,308.5),_0x1579aa[_0x502ccf(0x28f)](395.1,310.4,395.8,312.2,396.8,313.9),_0x1579aa[_0x502ccf(0x1d4)](397.1,314.6),_0x1579aa[_0x502ccf(0x28f)](397.1,314.7,397.1,314.6,397.1,314.7),_0x1579aa[_0x502ccf(0x1d4)](397.1,314.7),_0x1579aa[_0x502ccf(0x1d4)](397.1,314.7),_0x1579aa[_0x502ccf(0x1d4)](397.1,314.7),_0x1579aa[_0x502ccf(0x1d4)](397.1,314.7),_0x1579aa[_0x502ccf(0x1d4)](397.1,314.7),_0x1579aa[_0x502ccf(0x1d4)](397.4,314.5),_0x1579aa[_0x502ccf(0x28f)](405.3,310.3,413.3,307.1,420.6,304.6),_0x1579aa[_0x502ccf(0x28f)](427.9,302.1,434.6,300.3,440.2,298.9),_0x1579aa['bezierCurveTo'](445.8,297.5,450.4,296.5,453.6,295.8),_0x1579aa[_0x502ccf(0x28f)](456.9,295.1,458.7,294.7,458.7,294.7)),_0x1579aa[_0x502ccf(0x5bc)](),_0x1579aa[_0x502ccf(0x45a)]=_0x3a6f39,(_0x1579aa[_0x502ccf(0x2fd)](),_0x1579aa[_0x502ccf(0x494)](213.6,309.8),_0x1579aa[_0x502ccf(0x28f)](213.6,309.8,214.3,310.1,215.7,310.8),_0x1579aa[_0x502ccf(0x28f)](216.4,311.1,217.2,311.5,218.2,311.9),_0x1579aa[_0x502ccf(0x28f)](219.2,312.3,220.3,312.8,221.7,313.3),_0x1579aa['bezierCurveTo'](224.3,314.4,227.6,315.5,231.4,316.8),_0x1579aa[_0x502ccf(0x28f)](235.2,0x13e,239.6,319.4,244.4,320.8),_0x1579aa['bezierCurveTo'](254.1,323.6,265.8,326.5,278.7,330.5),_0x1579aa[_0x502ccf(0x28f)](285.1,332.6,291.8,334.9,298.6,0x152),_0x1579aa[_0x502ccf(0x28f)](305.4,0x155,312.2,344.8,318.5,349.8),_0x1579aa['bezierCurveTo'](319.9,350.9,321.2,0x160,322.5,353.2),_0x1579aa['bezierCurveTo'](323.1,353.8,323.8,354.4,324.4,354.9),_0x1579aa['bezierCurveTo'](0x145,355.5,325.6,356.1,326.1,356.7),_0x1579aa[_0x502ccf(0x28f)](326.4,0x165,326.7,357.3,0x147,357.6),_0x1579aa[_0x502ccf(0x1d4)](327.1,357.7),_0x1579aa[_0x502ccf(0x1d4)](327.1,357.7),_0x1579aa[_0x502ccf(0x1d4)](327.1,357.7),_0x1579aa[_0x502ccf(0x1d4)](327.1,357.7),_0x1579aa['lineTo'](327.1,357.8),_0x1579aa[_0x502ccf(0x28f)](327.1,357.9,327.2,357.9,327.2,0x166),_0x1579aa[_0x502ccf(0x28f)](327.2,0x166,327.2,0x166,327.3,357.9),_0x1579aa[_0x502ccf(0x1d4)](327.3,357.8),_0x1579aa[_0x502ccf(0x1d4)](327.3,357.8),_0x1579aa[_0x502ccf(0x1d4)](327.3,357.8),_0x1579aa[_0x502ccf(0x1d4)](327.3,357.7),_0x1579aa[_0x502ccf(0x1d4)](327.3,357.4),_0x1579aa['lineTo'](327.4,356.2),_0x1579aa['bezierCurveTo'](327.5,354.6,327.6,0x161,327.7,351.5),_0x1579aa[_0x502ccf(0x28f)](327.8,349.9,0x148,348.4,328.1,346.9),_0x1579aa[_0x502ccf(0x28f)](328.7,340.8,329.6,335.1,330.5,329.7),_0x1579aa['bezierCurveTo'](332.3,318.9,334.3,309.4,335.8,301.5),_0x1579aa[_0x502ccf(0x28f)](0x153,285.6,340.2,275.5,340.5,273.7),_0x1579aa[_0x502ccf(0x28f)](340.6,272.8,340.6,274.8,340.5,279.2),_0x1579aa['bezierCurveTo'](340.3,283.6,339.8,290.3,338.8,298.8),_0x1579aa['bezierCurveTo'](337.9,307.3,336.4,317.5,0x14f,328.9),_0x1579aa[_0x502ccf(0x28f)](334.3,334.6,333.6,340.6,333.2,346.8),_0x1579aa['bezierCurveTo'](333.1,348.4,0x14d,349.9,332.9,351.5),_0x1579aa[_0x502ccf(0x28f)](332.8,353.1,332.7,354.7,332.7,356.3),_0x1579aa[_0x502ccf(0x28f)](332.7,357.3,332.6,358.3,332.6,359.3),_0x1579aa['bezierCurveTo'](332.5,360.9,332.6,362.6,332.5,364.2),_0x1579aa[_0x502ccf(0x28f)](332.5,367.5,332.4,370.8,332.4,374.2),_0x1579aa['bezierCurveTo'](330.5,371.7,328.7,369.1,326.6,366.6),_0x1579aa[_0x502ccf(0x28f)](325.6,365.3,324.6,364.1,323.6,362.8),_0x1579aa['lineTo'](322.8,361.8),_0x1579aa['bezierCurveTo'](322.6,361.6,322.5,361.5,322.4,361.4),_0x1579aa[_0x502ccf(0x1d4)](321.6,360.6),_0x1579aa[_0x502ccf(0x28f)](321.1,360.1,320.6,359.5,0x140,0x167),_0x1579aa[_0x502ccf(0x1d4)](318.3,357.5),_0x1579aa['bezierCurveTo'](317.2,356.5,0x13c,355.5,314.8,354.6),_0x1579aa[_0x502ccf(0x28f)](308.9,0x15e,302.5,346.4,296.1,343.3),_0x1579aa['bezierCurveTo'](289.7,340.2,283.2,337.7,276.9,335.4),_0x1579aa[_0x502ccf(0x28f)](264.4,330.9,252.9,327.3,243.3,323.8),_0x1579aa[_0x502ccf(0x28f)](238.5,322.1,234.2,320.4,230.5,318.8),_0x1579aa[_0x502ccf(0x28f)](226.8,317.2,223.6,315.7,221.1,314.4),_0x1579aa[_0x502ccf(0x28f)](219.8,313.8,218.7,313.1,217.8,312.6),_0x1579aa['bezierCurveTo'](216.8,312.1,0xd8,311.6,215.4,311.2),_0x1579aa['bezierCurveTo'](214.3,310.2,213.6,309.8,213.6,309.8)),_0x1579aa[_0x502ccf(0x5bc)](),_0x1579aa[_0x502ccf(0x45a)]=_0x3a6f39,(_0x1579aa['beginPath'](),_0x1579aa[_0x502ccf(0x494)](235.1,251.7),_0x1579aa['bezierCurveTo'](235.1,251.7,236.5,252.2,238.9,253.2),_0x1579aa['bezierCurveTo'](241.3,254.2,244.9,255.7,249.1,257.8),_0x1579aa['bezierCurveTo'](253.4,259.9,258.3,262.4,263.8,265.3),_0x1579aa[_0x502ccf(0x28f)](269.3,268.1,275.3,271.2,281.7,273.9),_0x1579aa['bezierCurveTo'](282.5,274.3,283.3,274.6,284.1,274.9),_0x1579aa['bezierCurveTo'](284.5,275.1,284.9,275.2,285.3,275.4),_0x1579aa[_0x502ccf(0x1d4)](285.9,275.6),_0x1579aa[_0x502ccf(0x28f)](0x11e,275.6,285.9,275.6,285.9,275.6),_0x1579aa['lineTo'](0x11e,275.7),_0x1579aa[_0x502ccf(0x28f)](0x11e,275.7,0x11e,275.7,0x11e,275.6),_0x1579aa['lineTo'](0x11e,275.4),_0x1579aa[_0x502ccf(0x1d4)](0x11e,0x113),_0x1579aa[_0x502ccf(0x28f)](286.1,274.2,286.2,273.5,286.3,272.8),_0x1579aa[_0x502ccf(0x28f)](286.5,271.1,286.8,269.5,287.2,0x10c),_0x1579aa[_0x502ccf(0x28f)](288.7,261.8,291.1,256.8,293.2,252.7),_0x1579aa[_0x502ccf(0x28f)](295.4,248.6,297.3,245.4,298.8,243.1),_0x1579aa[_0x502ccf(0x28f)](300.3,240.8,301.2,239.4,301.5,238.9),_0x1579aa[_0x502ccf(0x28f)](301.8,238.5,301.4,239.7,300.5,242.1),_0x1579aa['bezierCurveTo'](299.6,244.5,298.2,248.1,296.6,252.6),_0x1579aa['bezierCurveTo'](0x127,257.1,293.2,262.5,292.1,268.5),_0x1579aa[_0x502ccf(0x28f)](0x124,269.2,291.9,0x10e,291.8,270.8),_0x1579aa[_0x502ccf(0x28f)](291.7,271.6,291.6,272.3,291.6,273.1),_0x1579aa[_0x502ccf(0x28f)](291.6,273.5,291.6,273.9,291.5,274.3),_0x1579aa[_0x502ccf(0x1d4)](291.5,274.9),_0x1579aa[_0x502ccf(0x28f)](291.5,275.1,291.5,275.2,291.5,275.6),_0x1579aa['bezierCurveTo'](291.5,277.1,291.5,278.5,291.5,0x118),_0x1579aa[_0x502ccf(0x28f)](291.5,280.8,291.5,281.7,291.5,282.5),_0x1579aa[_0x502ccf(0x1d4)](291.5,283.1),_0x1579aa[_0x502ccf(0x1d4)](291.5,283.4),_0x1579aa[_0x502ccf(0x1d4)](291.5,283.5),_0x1579aa[_0x502ccf(0x1d4)](291.4,283.5),_0x1579aa['lineTo'](291.3,283.4),_0x1579aa[_0x502ccf(0x1d4)](290.1,0x11b),_0x1579aa[_0x502ccf(0x28f)](288.5,282.4,286.9,281.9,285.2,281.3),_0x1579aa[_0x502ccf(0x28f)](284.8,281.2,284.3,0x119,0x11c,280.9),_0x1579aa[_0x502ccf(0x1d4)](283.3,280.6),_0x1579aa[_0x502ccf(0x1d4)](0x11a,280.1),_0x1579aa[_0x502ccf(0x28f)](281.1,279.8,280.3,279.4,279.5,279.1),_0x1579aa[_0x502ccf(0x28f)](272.7,276.2,266.7,272.7,261.4,269.4),_0x1579aa['bezierCurveTo'](256.1,266.1,251.5,262.9,247.6,260.2),_0x1579aa[_0x502ccf(0x28f)](243.7,257.5,240.6,255.4,238.4,253.9),_0x1579aa[_0x502ccf(0x28f)](236.3,252.5,235.1,251.7,235.1,251.7)),_0x1579aa['fill'](),_0x1579aa[_0x502ccf(0x45a)]=_0x3a6f39,(_0x1579aa['beginPath'](),_0x1579aa[_0x502ccf(0x494)](235.1,0x1d7),_0x1579aa[_0x502ccf(0x28f)](235.1,0x1d7,237.1,469.6,240.8,466.9),_0x1579aa[_0x502ccf(0x28f)](244.5,464.3,249.8,460.6,256.5,456.2),_0x1579aa[_0x502ccf(0x28f)](263.3,451.8,271.4,446.8,281.1,442.1),_0x1579aa[_0x502ccf(0x28f)](281.7,441.8,282.3,441.5,282.9,441.2),_0x1579aa[_0x502ccf(0x28f)](283.5,440.9,284.1,440.6,284.8,440.4),_0x1579aa['bezierCurveTo'](286.1,439.8,287.3,439.3,288.6,438.7),_0x1579aa[_0x502ccf(0x28f)](291.2,437.7,293.9,436.6,296.7,435.7),_0x1579aa[_0x502ccf(0x28f)](299.5,434.7,302.4,0x1b2,305.3,433.1),_0x1579aa['bezierCurveTo'](308.3,432.4,311.3,431.7,314.4,431.2),_0x1579aa[_0x502ccf(0x28f)](317.5,430.6,320.5,430.3,323.5,0x1ae),_0x1579aa[_0x502ccf(0x28f)](324.2,429.9,0x145,429.9,325.7,429.8),_0x1579aa[_0x502ccf(0x1d4)](326.3,429.8),_0x1579aa[_0x502ccf(0x28f)](326.4,429.8,326.4,429.8,326.4,429.8),_0x1579aa['lineTo'](326.4,429.8),_0x1579aa[_0x502ccf(0x1d4)](326.4,429.8),_0x1579aa['lineTo'](326.4,429.8),_0x1579aa[_0x502ccf(0x28f)](326.5,429.8,326.5,429.8,326.5,429.8),_0x1579aa['bezierCurveTo'](326.5,429.8,326.5,429.8,326.5,429.7),_0x1579aa[_0x502ccf(0x28f)](326.2,429.2,0x146,428.6,325.7,428.1),_0x1579aa[_0x502ccf(0x28f)](325.1,426.9,324.5,425.7,323.9,424.5),_0x1579aa[_0x502ccf(0x28f)](322.7,422.1,321.4,419.8,320.2,417.6),_0x1579aa[_0x502ccf(0x28f)](317.7,413.1,315.2,0x199,312.8,405.2),_0x1579aa[_0x502ccf(0x28f)](311.5,403.3,310.4,401.5,309.2,399.7),_0x1579aa[_0x502ccf(0x28f)](0x134,0x18e,306.8,396.3,305.7,394.7),_0x1579aa['bezierCurveTo'](301.2,388.4,297.1,383.5,294.1,0x17c),_0x1579aa['bezierCurveTo'](0x123,376.5,289.1,374.4,288.5,373.8),_0x1579aa[_0x502ccf(0x28f)](287.9,373.2,289.6,374.5,292.9,377.3),_0x1579aa[_0x502ccf(0x28f)](293.7,0x17a,294.7,378.8,295.6,379.8),_0x1579aa[_0x502ccf(0x28f)](296.6,380.7,297.7,381.8,298.9,382.9),_0x1579aa[_0x502ccf(0x28f)](300.1,0x180,301.2,385.3,302.5,386.6),_0x1579aa[_0x502ccf(0x28f)](303.8,387.9,305.1,389.4,306.5,390.9),_0x1579aa[_0x502ccf(0x28f)](0x138,397.1,318.2,404.9,0x144,414.3),_0x1579aa[_0x502ccf(0x28f)](324.7,415.5,325.5,416.6,326.2,417.9),_0x1579aa[_0x502ccf(0x28f)](326.9,419.1,327.6,420.3,328.3,421.6),_0x1579aa[_0x502ccf(0x28f)](0x149,422.8,329.7,424.1,330.4,425.4),_0x1579aa[_0x502ccf(0x28f)](330.7,0x1aa,331.1,426.7,331.4,427.4),_0x1579aa[_0x502ccf(0x28f)](0x14c,428.6,332.6,429.9,333.2,431.2),_0x1579aa[_0x502ccf(0x1d4)](334.1,433.1),_0x1579aa[_0x502ccf(0x1d4)](334.5,434.1),_0x1579aa[_0x502ccf(0x1d4)](334.7,434.6),_0x1579aa['lineTo'](334.8,434.7),_0x1579aa['lineTo'](334.8,434.8),_0x1579aa['bezierCurveTo'](334.8,434.8,334.8,434.8,334.7,434.8),_0x1579aa['lineTo'](334.4,434.8),_0x1579aa[_0x502ccf(0x28f)](0x14d,434.9,331.6,435.1,330.2,435.3),_0x1579aa[_0x502ccf(0x28f)](328.9,435.4,327.6,435.5,326.3,435.6),_0x1579aa[_0x502ccf(0x28f)](325.6,435.7,324.8,435.7,324.1,435.8),_0x1579aa[_0x502ccf(0x28f)](321.2,436.2,318.2,436.5,315.3,437.1),_0x1579aa['bezierCurveTo'](312.3,437.5,309.5,438.2,306.6,438.8),_0x1579aa['bezierCurveTo'](303.8,439.5,0x12d,440.2,298.3,441.1),_0x1579aa[_0x502ccf(0x28f)](295.6,441.9,0x125,442.9,290.4,443.7),_0x1579aa[_0x502ccf(0x28f)](289.1,444.2,287.9,444.7,286.6,445.2),_0x1579aa[_0x502ccf(0x28f)](0x11e,445.4,285.4,445.7,284.7,445.9),_0x1579aa[_0x502ccf(0x28f)](284.1,446.2,283.5,446.4,282.9,446.7),_0x1579aa[_0x502ccf(0x28f)](273.3,450.8,264.8,455.1,257.8,458.9),_0x1579aa[_0x502ccf(0x28f)](243.8,466.3,235.1,0x1d7,235.1,0x1d7)),_0x1579aa[_0x502ccf(0x5bc)](),_0x1579aa[_0x502ccf(0x45a)]=_0x3a6f39,(_0x1579aa[_0x502ccf(0x2fd)](),_0x1579aa['moveTo'](0xb1,376.4),_0x1579aa['bezierCurveTo'](0xb1,376.4,178.8,375.9,182.1,375.2),_0x1579aa[_0x502ccf(0x28f)](185.4,374.6,190.3,373.8,196.5,373.5),_0x1579aa['bezierCurveTo'](202.6,373.2,209.9,373.4,217.9,0x176),_0x1579aa[_0x502ccf(0x28f)](225.9,374.7,234.6,375.8,243.7,376.9),_0x1579aa[_0x502ccf(0x28f)](244.3,0x179,244.8,0x179,245.4,377.1),_0x1579aa[_0x502ccf(0x1d4)](245.8,377.1),_0x1579aa[_0x502ccf(0x1d4)](245.8,377.1),_0x1579aa[_0x502ccf(0x1d4)](245.8,377.1),_0x1579aa[_0x502ccf(0x1d4)](245.8,377.1),_0x1579aa[_0x502ccf(0x1d4)](245.9,377.1),_0x1579aa[_0x502ccf(0x28f)](245.9,377.1,245.9,377.1,245.9,0x179),_0x1579aa[_0x502ccf(0x1d4)](245.8,376.9),_0x1579aa['lineTo'](245.8,376.8),_0x1579aa[_0x502ccf(0x1d4)](245.4,376.3),_0x1579aa[_0x502ccf(0x28f)](244.7,375.5,244.1,374.7,243.5,0x176),_0x1579aa[_0x502ccf(0x28f)](242.2,372.5,240.9,0x173,239.6,369.6),_0x1579aa[_0x502ccf(0x28f)](234.4,0x16c,229.3,359.3,224.9,355.4),_0x1579aa['bezierCurveTo'](216.1,347.6,210.3,342.8,209.4,0x156),_0x1579aa['bezierCurveTo'](208.9,341.6,210.3,342.3,213.1,0x158),_0x1579aa[_0x502ccf(0x28f)](215.9,345.7,220.1,348.3,225.3,351.9),_0x1579aa[_0x502ccf(0x28f)](230.4,355.5,236.4,0x168,242.6,365.6),_0x1579aa[_0x502ccf(0x28f)](243.4,366.3,244.1,0x16f,244.9,367.8),_0x1579aa[_0x502ccf(0x28f)](245.7,368.6,246.4,369.3,247.2,370.1),_0x1579aa['bezierCurveTo'](0xf8,370.9,248.7,371.7,249.4,372.5),_0x1579aa[_0x502ccf(0x1d4)](0xfa,373.1),_0x1579aa[_0x502ccf(0x28f)](250.1,373.2,250.1,373.2,250.2,373.3),_0x1579aa[_0x502ccf(0x1d4)](250.4,373.6),_0x1579aa[_0x502ccf(0x1d4)](250.9,374.2),_0x1579aa[_0x502ccf(0x28f)](251.5,0x177,252.2,375.8,252.8,376.6),_0x1579aa[_0x502ccf(0x28f)](254.1,378.2,255.4,379.9,256.7,381.7),_0x1579aa[_0x502ccf(0x1d4)](257.7,0x17f),_0x1579aa[_0x502ccf(0x1d4)](258.2,383.7),_0x1579aa[_0x502ccf(0x1d4)](258.3,383.9),_0x1579aa[_0x502ccf(0x1d4)](258.3,383.9),_0x1579aa[_0x502ccf(0x1d4)](258.3,383.9),_0x1579aa['lineTo'](258.2,383.9),_0x1579aa[_0x502ccf(0x1d4)](257.8,383.9),_0x1579aa[_0x502ccf(0x28f)](256.7,383.8,255.6,383.7,254.6,383.6),_0x1579aa[_0x502ccf(0x28f)](252.4,383.4,250.2,383.2,0xf8,383.1),_0x1579aa['bezierCurveTo'](246.4,382.9,244.9,382.8,243.3,382.6),_0x1579aa[_0x502ccf(0x28f)](234.1,381.5,225.4,0x17c,217.6,378.8),_0x1579aa[_0x502ccf(0x28f)](209.7,377.6,202.7,376.7,196.7,376.3),_0x1579aa['bezierCurveTo'](190.7,375.9,185.9,375.9,182.5,0x178),_0x1579aa[_0x502ccf(0x28f)](178.9,376.3,0xb1,376.4,0xb1,376.4)),_0x1579aa[_0x502ccf(0x5bc)](),_0x1579aa['fillStyle']=_0x3a6f39,(_0x1579aa[_0x502ccf(0x2fd)](),_0x1579aa[_0x502ccf(0x494)](458.7,346.3),_0x1579aa['bezierCurveTo'](458.7,346.3,456.7,347.4,0x1c5,349.4),_0x1579aa[_0x502ccf(0x28f)](449.4,351.5,444.2,354.6,438.1,0x167),_0x1579aa[_0x502ccf(0x28f)](432.1,363.4,425.3,369.1,418.2,375.9),_0x1579aa[_0x502ccf(0x28f)](411.1,382.7,403.7,390.6,396.1,399.1),_0x1579aa['bezierCurveTo'](0x18a,401.5,391.9,403.9,389.8,406.2),_0x1579aa['bezierCurveTo'](388.1,408.1,386.5,0x19a,384.8,411.8),_0x1579aa[_0x502ccf(0x1d4)](383.6,413.2),_0x1579aa['lineTo'](383.4,413.4),_0x1579aa[_0x502ccf(0x1d4)](383.3,413.5),_0x1579aa[_0x502ccf(0x1d4)](383.3,413.4),_0x1579aa[_0x502ccf(0x1d4)](383.2,412.9),_0x1579aa[_0x502ccf(0x1d4)](0x17f,411.9),_0x1579aa[_0x502ccf(0x28f)](382.7,410.6,382.4,409.3,382.2,408.1),_0x1579aa[_0x502ccf(0x28f)](381.9,406.8,381.6,405.6,381.4,404.4),_0x1579aa['bezierCurveTo'](381.2,403.4,381.1,402.5,380.9,401.5),_0x1579aa[_0x502ccf(0x28f)](380.7,400.2,380.5,398.9,380.3,397.6),_0x1579aa[_0x502ccf(0x28f)](379.9,395.1,379.6,392.6,379.4,390.1),_0x1579aa[_0x502ccf(0x28f)](378.3,380.4,377.5,371.9,376.5,364.6),_0x1579aa['bezierCurveTo'](375.6,357.4,374.5,351.5,373.3,347.4),_0x1579aa['bezierCurveTo'](373.1,346.3,372.7,345.4,372.5,344.6),_0x1579aa[_0x502ccf(0x28f)](372.2,343.8,0x174,0x157,371.7,342.4),_0x1579aa[_0x502ccf(0x28f)](371.2,341.2,370.9,340.4,370.7,0x154),_0x1579aa[_0x502ccf(0x28f)](370.5,339.6,370.7,339.9,371.2,340.6),_0x1579aa[_0x502ccf(0x28f)](371.7,341.4,372.5,342.6,373.4,344.5),_0x1579aa[_0x502ccf(0x28f)](375.2,348.2,377.2,354.1,0x17b,361.7),_0x1579aa[_0x502ccf(0x28f)](380.8,369.3,382.4,378.4,384.1,388.5),_0x1579aa['bezierCurveTo'](384.5,0x187,0x181,393.6,385.4,396.2),_0x1579aa[_0x502ccf(0x28f)](385.6,397.5,385.9,398.8,386.1,400.1),_0x1579aa[_0x502ccf(0x28f)](386.5,0x192,386.4,401.3,386.4,401.5),_0x1579aa[_0x502ccf(0x1d4)](386.4,401.5),_0x1579aa['lineTo'](386.4,401.5),_0x1579aa[_0x502ccf(0x1d4)](386.5,401.4),_0x1579aa[_0x502ccf(0x1d4)](386.9,400.9),_0x1579aa[_0x502ccf(0x1d4)](0x183,400.8),_0x1579aa['lineTo'](387.5,400.2),_0x1579aa[_0x502ccf(0x1d4)](388.9,398.6),_0x1579aa[_0x502ccf(0x28f)](389.8,397.5,390.8,396.5,391.7,395.4),_0x1579aa[_0x502ccf(0x28f)](399.4,386.8,407.1,378.9,414.8,372.4),_0x1579aa['bezierCurveTo'](422.4,365.8,429.9,360.6,436.4,356.7),_0x1579aa[_0x502ccf(0x28f)](0x1bb,352.8,448.6,350.3,452.5,348.7),_0x1579aa[_0x502ccf(0x28f)](454.5,347.9,0x1c8,347.4,0x1c9,0x15b),_0x1579aa['bezierCurveTo'](458.1,346.5,458.7,346.3,458.7,346.3)),_0x1579aa[_0x502ccf(0x5bc)](),_0x1579aa['restore'](),this[_0x502ccf(0x3a1)]['update']();},Bitmap[_0x3cb96a(0x356)]['drawSakuraPetal']=function(_0x24edaa,_0x1d29bc,_0x455557){const _0x2f4a6c=_0x3cb96a,_0xc979ae=this[_0x2f4a6c(0x30c)];_0xc979ae[_0x2f4a6c(0x1a5)]();const _0x1f0327=_0xc979ae[_0x2f4a6c(0x3c3)](0x0,this[_0x2f4a6c(0x27f)]/0x2,this['width']/0x2,this[_0x2f4a6c(0x27f)]/0x2);_0x1f0327[_0x2f4a6c(0x537)](0x0,_0x24edaa||_0x2f4a6c(0x38e)),_0x1f0327[_0x2f4a6c(0x537)](0x1,_0x1d29bc||_0x2f4a6c(0x2fa)),_0xc979ae['fillStyle']=_0x1f0327,(_0xc979ae[_0x2f4a6c(0x2fd)](),_0xc979ae[_0x2f4a6c(0x494)](12.57908,31.191794),_0xc979ae[_0x2f4a6c(0x28f)](4.317875,26.790381,0x2,21.507626,0x2,21.507626),_0xc979ae[_0x2f4a6c(0x28f)](0x2,21.507626,5.544827,18.680225,7.844373,17.156388),_0xc979ae[_0x2f4a6c(0x28f)](5.6081,15.442017,2.28258,12.418619,2.28258,12.418619),_0xc979ae[_0x2f4a6c(0x28f)](2.28258,12.418619,4.929183,7.198899,13.612139,3.449718),_0xc979ae[_0x2f4a6c(0x28f)](30.630505,-3.805291,49.031689,18.529354,49.031689,18.529354),_0xc979ae['bezierCurveTo'](49.031689,18.529354,48.933179,18.511974,48.718891,18.575774),_0xc979ae[_0x2f4a6c(0x28f)](48.915856,18.610504,49.014335,18.627874,49.014335,18.627874),_0xc979ae[_0x2f4a6c(0x28f)](49.014335,18.627874,26.958007,38.905902,12.579092,31.191834)),_0xc979ae[_0x2f4a6c(0x5bc)](),_0xc979ae['strokeColor']=_0x455557||_0x2f4a6c(0x4b0),_0xc979ae['stroke'](),_0xc979ae[_0x2f4a6c(0x1a5)](),_0xc979ae[_0x2f4a6c(0x1aa)](),this['_baseTexture'][_0x2f4a6c(0x4b1)]();},Bitmap[_0x3cb96a(0x356)][_0x3cb96a(0x4ff)]=function(_0x30eb75){const _0x5134f5=_0x3cb96a,_0xc959ea=this['_context'];_0x30eb75=_0x30eb75||[_0x5134f5(0x49c),_0x5134f5(0x27b),_0x5134f5(0x5de),'#00aa00',_0x5134f5(0x584),_0x5134f5(0x4b0)],_0xc959ea[_0x5134f5(0x1a5)](),_0xc959ea[_0x5134f5(0x3cf)](0.044027,0.164312,-0.164312,0.044027,89.0097,-44.1852),_0xc959ea[_0x5134f5(0x45a)]=_0x30eb75[0x0],_0xc959ea[_0x5134f5(0x3a3)]=_0x30eb75[0x5],_0xc959ea[_0x5134f5(0x540)]=0xc,(_0xc959ea[_0x5134f5(0x2fd)](),_0xc959ea[_0x5134f5(0x494)](431.62,249.52),_0xc959ea[_0x5134f5(0x28f)](431.721833,257.349163,431.387983,265.177929,430.62,272.97),_0xc959ea[_0x5134f5(0x28f)](430.23,276.86,429.73,280.75,429.1,284.61),_0xc959ea[_0x5134f5(0x28f)](428.47,288.47,427.91,292.3,427.37,296.18),_0xc959ea['bezierCurveTo'](426.83,300.06,426.06,303.89,425.37,307.73),_0xc959ea['bezierCurveTo'](424.68,311.57,423.88,315.4,423.26,319.24),_0xc959ea['bezierCurveTo'](422.64,323.08,422.18,326.95,421.56,330.82),_0xc959ea['bezierCurveTo'](420.94,334.69,420.14,338.52,419.39,342.35),_0xc959ea[_0x5134f5(0x28f)](418.64,346.18,417.8,350.01,416.84,353.81),_0xc959ea[_0x5134f5(0x28f)](415.88,357.61,414.75,361.36,413.6,365.1),_0xc959ea[_0x5134f5(0x28f)](411.28,372.57,408.73,379.96,406.25,387.35),_0xc959ea['bezierCurveTo'](405.01,391.06,403.73,394.77,402.15,398.35),_0xc959ea[_0x5134f5(0x28f)](400.57,401.93,398.73,405.42,396.87,408.87),_0xc959ea['bezierCurveTo'](395.01,412.32,0x189,415.72,0x187,419.05),_0xc959ea[_0x5134f5(0x28f)](0x185,422.38,386.74,425.65,384.38,428.79),_0xc959ea[_0x5134f5(0x28f)](379.581436,434.992727,374.447096,440.928264,0x171,446.57),_0xc959ea[_0x5134f5(0x28f)](363.63,452.25,358.11,457.81,352.4,463.16),_0xc959ea[_0x5134f5(0x28f)](349.56,465.85,346.63,468.42,343.72,471.04),_0xc959ea[_0x5134f5(0x1d4)](0x14f,478.86),_0xc959ea[_0x5134f5(0x1d4)](326.28,486.68),_0xc959ea[_0x5134f5(0x1d4)](321.9,490.58),_0xc959ea[_0x5134f5(0x28f)](320.42,491.87,318.9,493.12,317.31,494.31),_0xc959ea[_0x5134f5(0x28f)](314.158788,496.68913,310.840189,498.838031,307.38,500.74),_0xc959ea[_0x5134f5(0x28f)](305.65,501.74,303.88,502.55,302.15,503.43),_0xc959ea['lineTo'](296.92,506.07),_0xc959ea[_0x5134f5(0x28f)](293.43,507.82,289.92,509.53,286.29,511.07),_0xc959ea[_0x5134f5(0x28f)](282.677226,512.628282,278.985531,513.996813,275.23,515.17),_0xc959ea[_0x5134f5(0x28f)](271.49,516.37,267.75,517.45,0x108,518.58),_0xc959ea[_0x5134f5(0x28f)](260.227016,519.72514,256.38621,520.633574,252.5,521.3),_0xc959ea['bezierCurveTo'](248.595082,521.810403,244.66662,522.120808,240.73,522.23),_0xc959ea[_0x5134f5(0x1d4)](234.87,522.46),_0xc959ea[_0x5134f5(0x1d4)](231.93,522.57),_0xc959ea[_0x5134f5(0x28f)](231.042639,522.560274,230.157021,522.650849,229.29,522.84),_0xc959ea[_0x5134f5(0x1d4)](229.29,522.84),_0xc959ea['lineTo'](229.12,522.84),_0xc959ea[_0x5134f5(0x1d4)](228.9,522.84),_0xc959ea[_0x5134f5(0x28f)](226.0396,522.722573,223.221208,522.110173,220.57,521.03),_0xc959ea[_0x5134f5(0x1d4)](220.44,520.98),_0xc959ea['bezierCurveTo'](219.08661,520.382693,217.816088,519.612985,216.66,518.69),_0xc959ea[_0x5134f5(0x28f)](216.085072,518.218253,215.537516,517.714102,215.02,517.18),_0xc959ea[_0x5134f5(0x1d4)](213.61,515.56),_0xc959ea['lineTo'](213.51,515.44),_0xc959ea['lineTo'](213.44,515.27),_0xc959ea[_0x5134f5(0x1d4)](213.44,515.22),_0xc959ea['bezierCurveTo'](212.708687,513.436313,211.887639,511.69075,210.98,509.99),_0xc959ea[_0x5134f5(0x28f)](210.09,508.23,209.21,506.46,208.39,504.65),_0xc959ea[_0x5134f5(0x28f)](206.643417,501.02829,205.395407,497.186707,204.68,493.23),_0xc959ea[_0x5134f5(0x28f)](204.146127,489.249079,204.125962,485.21606,204.62,481.23),_0xc959ea[_0x5134f5(0x28f)](205.081051,477.294323,205.748639,473.385598,206.62,469.52),_0xc959ea[_0x5134f5(0x28f)](207.49288,465.764819,207.886016,461.9141,207.79,458.06),_0xc959ea[_0x5134f5(0x28f)](207.513295,454.195646,206.860201,450.36751,205.84,446.63),_0xc959ea[_0x5134f5(0x28f)](204.99,443.31,204.17,439.98,203.25,436.68),_0xc959ea['bezierCurveTo'](203.12,436.2,202.99,435.68,202.85,435.26),_0xc959ea[_0x5134f5(0x1d4)](199.49,0x1a8),_0xc959ea[_0x5134f5(0x1d4)](196.33,412.63),_0xc959ea[_0x5134f5(0x28f)](195.241308,408.813871,194.412739,404.928284,193.85,0x191),_0xc959ea[_0x5134f5(0x28f)](192.79,393.13,192.48,385.3,192.02,377.41),_0xc959ea[_0x5134f5(0x28f)](191.77,369.41,192.93,361.55,194.4,353.82),_0xc959ea['lineTo'](196.71,342.26),_0xc959ea[_0x5134f5(0x28f)](197.47,338.41,198.18,334.55,198.81,330.69),_0xc959ea[_0x5134f5(0x28f)](199.44,326.83,200.07,322.93,200.45,319.07),_0xc959ea['bezierCurveTo'](200.83,315.21,0xc9,311.25,201.45,307.31),_0xc959ea['bezierCurveTo'](202.45,299.51,203.2,291.66,205.03,283.93),_0xc959ea['bezierCurveTo'](206.86,276.2,210.25,0x10d,212.78,261.6),_0xc959ea[_0x5134f5(0x28f)](215.47,254.2,218.06,246.79,220.78,239.41),_0xc959ea[_0x5134f5(0x28f)](222.24,235.74,223.88,232.16,225.46,228.56),_0xc959ea[_0x5134f5(0x28f)](227.04,224.96,228.46,221.33,0xe6,217.7),_0xc959ea[_0x5134f5(0x1d4)](234.48,206.81),_0xc959ea[_0x5134f5(0x28f)](235.91,203.21,236.93,199.36,238.48,195.74),_0xc959ea[_0x5134f5(0x1d4)](240.77,190.29),_0xc959ea[_0x5134f5(0x28f)](241.53,188.47,242.27,186.64,243.15,184.89),_0xc959ea[_0x5134f5(0x28f)](244.83,181.33,246.56,177.79,248.15,174.23),_0xc959ea['bezierCurveTo'](249.74,170.67,251.28,167.02,253.15,163.5),_0xc959ea[_0x5134f5(0x28f)](255.02,159.98,257.01,156.61,259.15,153.29),_0xc959ea['bezierCurveTo'](261.29,149.97,263.53,146.74,265.82,143.53),_0xc959ea[_0x5134f5(0x28f)](268.11,140.32,270.29,137.11,272.31,133.75),_0xc959ea[_0x5134f5(0x28f)](274.33,130.39,276.31,126.98,278.2,123.57),_0xc959ea[_0x5134f5(0x28f)](280.09,120.16,281.77,116.57,283.6,113.1),_0xc959ea[_0x5134f5(0x28f)](284.52,111.36,285.47,109.62,286.5,107.93),_0xc959ea[_0x5134f5(0x28f)](287.522434,106.213457,288.729617,104.61394,290.1,103.16),_0xc959ea[_0x5134f5(0x28f)](291.46,101.7,292.9,100.35,294.29,98.98),_0xc959ea[_0x5134f5(0x28f)](295.68,97.61,297.01,96.17,298.37,94.75),_0xc959ea[_0x5134f5(0x1d4)](306.51,86.23),_0xc959ea['bezierCurveTo'](309.21,83.35,312.03,80.59,314.93,77.93),_0xc959ea[_0x5134f5(0x28f)](317.83,75.27,320.83,72.71,323.87,70.22),_0xc959ea['bezierCurveTo'](326.950045,67.806921,329.835603,65.155418,332.5,62.29),_0xc959ea['bezierCurveTo'](335.15434,59.416711,337.584777,56.344397,339.77,53.1),_0xc959ea[_0x5134f5(0x28f)](341.91,49.84,344.23,46.49,347.5,44.1),_0xc959ea[_0x5134f5(0x28f)](349.125878,42.9073,350.950982,42.013371,352.89,41.46),_0xc959ea[_0x5134f5(0x28f)](353.37,41.33,353.89,41.2,354.34,41.1),_0xc959ea[_0x5134f5(0x28f)](354.838027,40.968768,355.346669,40.881764,355.86,40.84),_0xc959ea['bezierCurveTo'](356.947139,40.805706,358.010866,41.160281,358.86,41.84),_0xc959ea[_0x5134f5(0x28f)](359.63952,42.468744,360.362298,43.164753,361.02,43.92),_0xc959ea['lineTo'](363.02,46.07),_0xc959ea[_0x5134f5(0x28f)](364.36,47.52,365.68,48.98,366.95,50.49),_0xc959ea['bezierCurveTo'](370.89,55.3,374.55,60.33,378.05,65.49),_0xc959ea[_0x5134f5(0x1d4)](378.05,65.49),_0xc959ea[_0x5134f5(0x28f)](378.99,66.86,379.91,68.23,380.83,69.61),_0xc959ea[_0x5134f5(0x28f)](383.02,72.87,385.19,76.15,387.29,79.48),_0xc959ea['bezierCurveTo'](389.460572,82.779822,391.414679,86.217047,393.14,89.77),_0xc959ea[_0x5134f5(0x28f)](394.766901,93.373214,396.130474,97.089619,397.22,100.89),_0xc959ea[_0x5134f5(0x28f)](398.34,104.67,399.22,108.5,400.29,112.28),_0xc959ea[_0x5134f5(0x28f)](401.36,116.06,402.41,119.83,403.67,123.54),_0xc959ea[_0x5134f5(0x1d4)](407.58,134.66),_0xc959ea['bezierCurveTo'](408.86,138.3,410.15,141.94,411.42,145.59),_0xc959ea[_0x5134f5(0x28f)](412.69,149.24,414.06,153.14,415.34,156.93),_0xc959ea[_0x5134f5(0x1d4)](417.23,162.52),_0xc959ea[_0x5134f5(0x1d4)](418.98,168.15),_0xc959ea['bezierCurveTo'](420.12,171.91,421.23,175.7,422.1,179.55),_0xc959ea[_0x5134f5(0x1d4)](427.1,202.6),_0xc959ea[_0x5134f5(0x1d4)](428.36,208.36),_0xc959ea[_0x5134f5(0x1d4)](428.98,211.24),_0xc959ea[_0x5134f5(0x28f)](429.173333,212.22,429.333333,213.2,429.46,214.18),_0xc959ea['bezierCurveTo'](0x1ae,218.11,430.15,222.05,430.4,225.96),_0xc959ea[_0x5134f5(0x28f)](0x1af,233.79,431.51,241.64,431.62,249.52),_0xc959ea[_0x5134f5(0x5bc)]()),_0xc959ea[_0x5134f5(0x296)](),_0xc959ea[_0x5134f5(0x45a)]=_0x30eb75[0x1],(_0xc959ea['beginPath'](),_0xc959ea[_0x5134f5(0x494)](285.75,360.45),_0xc959ea['lineTo'](317.05,277.5),_0xc959ea[_0x5134f5(0x1d4)](329.05,225.84),_0xc959ea['lineTo'](340.79,165.58),_0xc959ea['lineTo'](0x15b,124.66),_0xc959ea[_0x5134f5(0x1d4)](349.15,110.28),_0xc959ea[_0x5134f5(0x1d4)](352.38,88.17),_0xc959ea[_0x5134f5(0x1d4)](354.04,74.9),_0xc959ea[_0x5134f5(0x28f)](354.04,74.9,340.19,93.66,0x142,121.85),_0xc959ea[_0x5134f5(0x1d4)](0x142,121.85),_0xc959ea['lineTo'](318.94,116.08),_0xc959ea[_0x5134f5(0x1d4)](315.07,108.52),_0xc959ea[_0x5134f5(0x1d4)](313.88,105.61),_0xc959ea[_0x5134f5(0x28f)](313.88,105.61,320.3,123.77,309.71,141.31),_0xc959ea[_0x5134f5(0x1d4)](309.71,141.31),_0xc959ea[_0x5134f5(0x28f)](306.916667,145.83,304.09,150.496667,301.23,155.31),_0xc959ea['lineTo'](301.23,155.31),_0xc959ea[_0x5134f5(0x1d4)](297.4,0x95),_0xc959ea[_0x5134f5(0x1d4)](293.4,142.73),_0xc959ea['lineTo'](288.67,134.87),_0xc959ea[_0x5134f5(0x28f)](295.901876,148.194393,295.803749,164.294746,288.41,177.53),_0xc959ea[_0x5134f5(0x1d4)](288.41,177.53),_0xc959ea[_0x5134f5(0x28f)](286.65,180.676667,284.896667,183.86,283.15,187.08),_0xc959ea[_0x5134f5(0x1d4)](283.15,187.08),_0xc959ea[_0x5134f5(0x1d4)](279.22,182.53),_0xc959ea[_0x5134f5(0x1d4)](272.79,175.59),_0xc959ea[_0x5134f5(0x28f)](275.19,178.45,281.64,188.49,273.09,206.31),_0xc959ea['lineTo'](273.09,206.31),_0xc959ea[_0x5134f5(0x28f)](270.72,211.02,268.4,215.77,266.15,220.52),_0xc959ea[_0x5134f5(0x1d4)](266.15,220.52),_0xc959ea[_0x5134f5(0x1d4)](263.84,218.34),_0xc959ea[_0x5134f5(0x1d4)](260.92,215.6),_0xc959ea[_0x5134f5(0x28f)](260.92,215.6,265.27,221.08,259.07,236.13),_0xc959ea['lineTo'](259.07,236.13),_0xc959ea[_0x5134f5(0x28f)](256.603333,241.836667,254.27,247.503333,252.07,253.13),_0xc959ea[_0x5134f5(0x1d4)](252.07,253.13),_0xc959ea[_0x5134f5(0x1d4)](247.51,249.29),_0xc959ea[_0x5134f5(0x1d4)](244.92,0xf7),_0xc959ea[_0x5134f5(0x1d4)](243.76,246.13),_0xc959ea[_0x5134f5(0x28f)](246.52,248.92,250.54,256.13,244.9,272.77),_0xc959ea[_0x5134f5(0x1d4)](244.9,272.77),_0xc959ea[_0x5134f5(0x28f)](243.806667,275.85,242.716667,278.986667,241.63,282.18),_0xc959ea[_0x5134f5(0x1d4)](241.63,282.18),_0xc959ea[_0x5134f5(0x1d4)](237.21,0x114),_0xc959ea['lineTo'](233.81,271.77),_0xc959ea[_0x5134f5(0x1d4)](230.81,267.86),_0xc959ea[_0x5134f5(0x28f)](233.81,272.45,239.7,285.52,232.29,310.91),_0xc959ea[_0x5134f5(0x1d4)](232.29,310.91),_0xc959ea['bezierCurveTo'](231.623333,313.11,230.956667,315.326667,230.29,317.56),_0xc959ea[_0x5134f5(0x1d4)](230.29,317.56),_0xc959ea[_0x5134f5(0x1d4)](226.67,310.46),_0xc959ea[_0x5134f5(0x1d4)](223.88,304.91),_0xc959ea['lineTo'](221.49,299.78),_0xc959ea[_0x5134f5(0x28f)](224.38,307.42,228.04,322.78,222.56,344.43),_0xc959ea['lineTo'](222.56,344.43),_0xc959ea[_0x5134f5(0x28f)](222.08,346.16,221.62,347.89,221.15,349.62),_0xc959ea[_0x5134f5(0x1d4)](221.15,349.62),_0xc959ea[_0x5134f5(0x1d4)](219.97,346.31),_0xc959ea[_0x5134f5(0x1d4)](215.78,0x150),_0xc959ea['lineTo'](215.38,334.89),_0xc959ea[_0x5134f5(0x28f)](217.23,341.26,219.38,353.39,216.06,369.47),_0xc959ea['bezierCurveTo'](215.62,371.28,215.19,373.08,214.76,374.89),_0xc959ea[_0x5134f5(0x1d4)](214.7,375.14),_0xc959ea[_0x5134f5(0x1d4)](214.7,375.14),_0xc959ea[_0x5134f5(0x28f)](213.32,381.06,212.01,386.96,210.77,392.84),_0xc959ea[_0x5134f5(0x1d4)](210.77,392.84),_0xc959ea[_0x5134f5(0x1d4)](209.36,389.71),_0xc959ea[_0x5134f5(0x1d4)](0xd0,386.2),_0xc959ea[_0x5134f5(0x1d4)](207.12,383.09),_0xc959ea[_0x5134f5(0x1d4)](206.37,378.74),_0xc959ea[_0x5134f5(0x28f)](208.034744,391.047293,208.034744,403.522707,206.37,415.83),_0xc959ea[_0x5134f5(0x28f)](205.89,418.61,205.43,421.37,205.01,424.12),_0xc959ea[_0x5134f5(0x28f)](205.005302,424.16989,205.005302,424.22011,205.01,424.27),_0xc959ea[_0x5134f5(0x1d4)](205.01,424.27),_0xc959ea[_0x5134f5(0x28f)](204.343333,428.47,203.746667,432.623333,203.22,436.73),_0xc959ea[_0x5134f5(0x28f)](204.14,440.03,204.96,443.36,205.81,446.68),_0xc959ea['bezierCurveTo'](206.830201,450.41751,207.483295,454.245646,207.76,458.11),_0xc959ea[_0x5134f5(0x28f)](207.856016,461.9641,207.46288,465.814819,206.59,469.57),_0xc959ea[_0x5134f5(0x28f)](205.718639,473.435598,205.051051,477.344323,204.59,481.28),_0xc959ea[_0x5134f5(0x28f)](204.095962,485.26606,204.116127,489.299079,204.65,493.28),_0xc959ea[_0x5134f5(0x28f)](205.365407,497.236707,206.613417,501.07829,208.36,504.7),_0xc959ea['bezierCurveTo'](209.18,506.51,210.06,508.28,210.95,510.04),_0xc959ea[_0x5134f5(0x28f)](211.857639,511.74075,212.678687,513.486313,213.41,515.27),_0xc959ea[_0x5134f5(0x1d4)](213.41,515.32),_0xc959ea[_0x5134f5(0x1d4)](213.48,515.49),_0xc959ea[_0x5134f5(0x1d4)](213.58,515.61),_0xc959ea[_0x5134f5(0x1d4)](214.99,517.23),_0xc959ea[_0x5134f5(0x28f)](215.507516,517.764102,216.055072,518.268253,216.63,518.74),_0xc959ea['bezierCurveTo'](217.786088,519.662985,219.05661,520.432693,220.41,521.03),_0xc959ea['lineTo'](220.54,521.08),_0xc959ea[_0x5134f5(0x28f)](234.62,498.82,250.27,460.36,250.27,460.36)),_0xc959ea[_0x5134f5(0x5bc)](),_0xc959ea[_0x5134f5(0x45a)]=_0x30eb75[0x2],(_0xc959ea[_0x5134f5(0x2fd)](),_0xc959ea[_0x5134f5(0x494)](430.49,225.94),_0xc959ea[_0x5134f5(0x28f)](430.24,222.03,430.09,218.09,429.55,214.16),_0xc959ea[_0x5134f5(0x28f)](429.423333,213.18,429.263333,212.2,429.07,211.22),_0xc959ea['lineTo'](428.45,208.34),_0xc959ea[_0x5134f5(0x1d4)](427.19,202.58),_0xc959ea[_0x5134f5(0x1d4)](422.19,179.53),_0xc959ea['bezierCurveTo'](421.32,175.68,420.19,171.89,419.07,168.13),_0xc959ea[_0x5134f5(0x1d4)](417.32,162.5),_0xc959ea[_0x5134f5(0x1d4)](415.43,156.91),_0xc959ea[_0x5134f5(0x28f)](412.91,149.45,410.28,142.05,407.67,134.64),_0xc959ea[_0x5134f5(0x1d4)](403.76,123.52),_0xc959ea[_0x5134f5(0x28f)](402.5,119.81,401.42,116.04,400.38,112.26),_0xc959ea[_0x5134f5(0x28f)](399.34,108.48,398.43,104.65,397.31,100.87),_0xc959ea['bezierCurveTo'](396.220474,97.069619,394.856901,93.353214,393.23,89.75),_0xc959ea[_0x5134f5(0x28f)](391.504679,86.197047,389.550572,82.759822,387.38,79.46),_0xc959ea[_0x5134f5(0x28f)](385.28,76.13,383.11,72.85,380.92,69.59),_0xc959ea[_0x5134f5(0x28f)](0x17c,68.21,379.08,66.84,378.14,65.47),_0xc959ea[_0x5134f5(0x28f)](387.8,80.8,395.04,109.72,396.47,149.27),_0xc959ea[_0x5134f5(0x1d4)](376.1,161.86),_0xc959ea[_0x5134f5(0x28f)](379.85,159.59,396.59,0x96,396.69,160.27),_0xc959ea[_0x5134f5(0x28f)](396.75,167.25,396.633333,174.516667,396.34,182.07),_0xc959ea[_0x5134f5(0x1d4)](370.5,194.47),_0xc959ea['bezierCurveTo'](379.58,190.47,396.45,184.53,395.5,196.63),_0xc959ea[_0x5134f5(0x28f)](395.39,198.23,395.27,199.84,395.15,201.46),_0xc959ea['lineTo'](389.25,207.26),_0xc959ea[_0x5134f5(0x1d4)](383.25,212.74),_0xc959ea['bezierCurveTo'](383.25,212.74,380.25,215.38,375.87,218.98),_0xc959ea[_0x5134f5(0x28f)](390.22,209.39,393.47,215.75,392.87,224.41),_0xc959ea[_0x5134f5(0x28f)](392.15,230.37,391.323333,236.463333,390.39,242.69),_0xc959ea[_0x5134f5(0x1d4)](374.29,253.84),_0xc959ea[_0x5134f5(0x28f)](381.29,249.93,389.62,247.84,387.03,262.84),_0xc959ea[_0x5134f5(0x28f)](386.036667,268.253333,384.96,273.74,383.8,279.3),_0xc959ea['lineTo'](378.4,282.68),_0xc959ea[_0x5134f5(0x1d4)](368.4,288.48),_0xc959ea['lineTo'](351.28,0x12a),_0xc959ea['bezierCurveTo'](351.28,0x12a,382.89,280.72,379.45,298.88),_0xc959ea['bezierCurveTo'](378.51,302.88,377.51,306.896667,376.45,310.93),_0xc959ea['lineTo'](364.43,0x13d),_0xc959ea[_0x5134f5(0x1d4)](354.48,321.41),_0xc959ea[_0x5134f5(0x28f)](363.55,317.83,375.77,314.48,373.1,323.71),_0xc959ea[_0x5134f5(0x28f)](373.01,324.03,372.93,324.35,372.84,324.71),_0xc959ea[_0x5134f5(0x28f)](371.506667,329.583333,370.066667,334.36,368.52,339.04),_0xc959ea[_0x5134f5(0x1d4)](358.52,344.38),_0xc959ea['lineTo'](353.36,347.17),_0xc959ea[_0x5134f5(0x1d4)](341.49,352.49),_0xc959ea['bezierCurveTo'](351.93,348.35,366.49,344.44,361.87,357.42),_0xc959ea[_0x5134f5(0x28f)](359.27,364.006667,356.51,370.406667,353.59,376.62),_0xc959ea[_0x5134f5(0x28f)](349.53,378.78,331.04,388.35,313.91,392.41),_0xc959ea[_0x5134f5(0x28f)](326.26,390.74,350.91,379.56,344.78,394.04),_0xc959ea[_0x5134f5(0x28f)](339.71,403.42,334.34,412.3,328.78,420.68),_0xc959ea['bezierCurveTo'](318.476689,423.18083,308.011191,424.958495,297.46,0x1aa),_0xc959ea['bezierCurveTo'](315.21,425.12,326.79,424.25,317.73,436.57),_0xc959ea[_0x5134f5(0x28f)](311.08,445.57,304.32,453.89,297.65,461.51),_0xc959ea['bezierCurveTo'](297.56,461.51,279.87,463.81,266.65,461.17),_0xc959ea[_0x5134f5(0x28f)](280.85,464.3,296.44,463.02,284.31,476.04),_0xc959ea['bezierCurveTo'](280.976667,479.5,277.703333,482.77,274.49,485.85),_0xc959ea['bezierCurveTo'](274.43,485.85,261.73,486.11,251.87,484.55),_0xc959ea[_0x5134f5(0x28f)](262.77,486.37,273.54,486.5,263.2,496.32),_0xc959ea[_0x5134f5(0x28f)](258.69,500.32,254.47,503.9,250.65,507.01),_0xc959ea[_0x5134f5(0x28f)](250.55,507.01,238.65,508.01,233.16,506.79),_0xc959ea[_0x5134f5(0x28f)](239.07,508.66,243.85,511.37,237.87,516.9),_0xc959ea[_0x5134f5(0x28f)](232.71,520.68,229.59,522.68,229.32,522.9),_0xc959ea[_0x5134f5(0x28f)](230.187021,522.710849,231.072639,522.620274,231.96,522.63),_0xc959ea[_0x5134f5(0x1d4)](234.9,522.52),_0xc959ea[_0x5134f5(0x1d4)](240.76,522.29),_0xc959ea[_0x5134f5(0x28f)](244.69662,522.180808,248.625082,521.870403,252.53,521.36),_0xc959ea[_0x5134f5(0x28f)](256.406968,520.679223,260.23773,519.757436,0x108,518.6),_0xc959ea[_0x5134f5(0x28f)](267.75,517.47,271.49,516.39,275.23,515.19),_0xc959ea['bezierCurveTo'](278.985531,514.016813,282.677226,512.648282,286.29,511.09),_0xc959ea['bezierCurveTo'](289.9,509.53,293.43,507.82,296.92,506.09),_0xc959ea[_0x5134f5(0x1d4)](302.15,503.45),_0xc959ea['bezierCurveTo'](303.88,502.57,305.65,501.72,307.38,500.76),_0xc959ea[_0x5134f5(0x28f)](310.840189,498.858031,314.158788,496.70913,317.31,494.33),_0xc959ea['bezierCurveTo'](318.89,493.14,320.42,491.89,321.9,490.6),_0xc959ea['lineTo'](326.28,486.7),_0xc959ea[_0x5134f5(0x1d4)](0x14f,478.88),_0xc959ea[_0x5134f5(0x1d4)](343.72,471.06),_0xc959ea[_0x5134f5(0x28f)](346.63,468.44,349.56,465.87,352.4,463.18),_0xc959ea[_0x5134f5(0x28f)](358.11,457.83,363.63,452.27,0x171,446.59),_0xc959ea[_0x5134f5(0x28f)](374.436839,440.947476,379.561151,435.011953,384.35,428.81),_0xc959ea[_0x5134f5(0x28f)](386.71,425.67,388.93,422.42,390.97,419.07),_0xc959ea[_0x5134f5(0x28f)](393.01,415.72,394.97,412.36,396.89,408.92),_0xc959ea[_0x5134f5(0x28f)](398.81,405.48,400.57,402.02,402.17,398.4),_0xc959ea[_0x5134f5(0x28f)](403.77,394.78,405.03,391.08,406.27,387.4),_0xc959ea['bezierCurveTo'](408.75,380.01,411.27,372.62,413.62,365.15),_0xc959ea[_0x5134f5(0x28f)](414.77,361.41,415.89,357.67,416.86,353.86),_0xc959ea[_0x5134f5(0x28f)](417.83,350.05,418.64,346.24,419.41,342.4),_0xc959ea[_0x5134f5(0x28f)](420.18,338.56,420.96,334.75,421.58,330.87),_0xc959ea[_0x5134f5(0x28f)](422.2,326.99,422.68,323.13,423.28,319.29),_0xc959ea[_0x5134f5(0x28f)](423.88,315.45,424.7,311.61,425.39,307.78),_0xc959ea[_0x5134f5(0x28f)](426.08,303.95,426.9,300.12,427.39,296.23),_0xc959ea[_0x5134f5(0x28f)](427.88,292.34,428.44,288.51,429.12,284.66),_0xc959ea[_0x5134f5(0x28f)](429.8,280.81,430.25,276.91,430.64,273.02),_0xc959ea['bezierCurveTo'](431.407983,265.227929,431.741833,257.399163,431.64,249.57),_0xc959ea[_0x5134f5(0x28f)](431.51,241.64,0x1af,233.79,430.49,225.94)),_0xc959ea[_0x5134f5(0x5bc)](),_0xc959ea[_0x5134f5(0x45a)]=_0x30eb75[0x3],(_0xc959ea[_0x5134f5(0x2fd)](),_0xc959ea[_0x5134f5(0x494)](340.27,176.61),_0xc959ea[_0x5134f5(0x1d4)](348.27,122.21),_0xc959ea[_0x5134f5(0x1d4)](0x160,0x56),_0xc959ea['bezierCurveTo'](0x160,0x56,349.18,94.32,344.36,108.7),_0xc959ea['lineTo'](341.04,104.91),_0xc959ea['bezierCurveTo'](341.04,104.91,344.15,109.29,341.39,117.57),_0xc959ea[_0x5134f5(0x1d4)](341.39,117.57),_0xc959ea[_0x5134f5(0x28f)](339.01,124.71,336.28,132.9,333.28,141.95),_0xc959ea[_0x5134f5(0x1d4)](333.28,141.95),_0xc959ea[_0x5134f5(0x1d4)](328.13,133.05),_0xc959ea['lineTo'](325.91,129.17),_0xc959ea[_0x5134f5(0x28f)](325.91,129.17,332.53,142.95,325.57,165.28),_0xc959ea[_0x5134f5(0x1d4)](325.57,165.28),_0xc959ea[_0x5134f5(0x28f)](323.503333,171.573333,321.35,178.12,319.11,184.92),_0xc959ea[_0x5134f5(0x1d4)](319.11,184.92),_0xc959ea[_0x5134f5(0x1d4)](0x13b,177.71),_0xc959ea[_0x5134f5(0x1d4)](308.25,166.82),_0xc959ea[_0x5134f5(0x28f)](314.733452,179.880969,315.811249,194.970124,311.25,208.82),_0xc959ea['lineTo'](311.25,208.82),_0xc959ea[_0x5134f5(0x28f)](310.103333,212.326667,308.946667,215.883333,307.78,219.49),_0xc959ea['lineTo'](307.78,219.49),_0xc959ea[_0x5134f5(0x1d4)](300.16,0xd0),_0xc959ea[_0x5134f5(0x1d4)](295.37,201.93),_0xc959ea['bezierCurveTo'](295.37,201.93,308.11,218.47,299.78,244.52),_0xc959ea['bezierCurveTo'](298.653333,248.04,297.516667,251.586667,296.37,255.16),_0xc959ea[_0x5134f5(0x1d4)](296.37,255.16),_0xc959ea['lineTo'](290.64,0xf7),_0xc959ea[_0x5134f5(0x1d4)](280.58,236.2),_0xc959ea['bezierCurveTo'](281.58,237.26,296.58,254.13,287.96,281.57),_0xc959ea[_0x5134f5(0x1d4)](287.96,281.57),_0xc959ea['bezierCurveTo'](287.333333,283.53,286.71,285.496667,286.09,287.47),_0xc959ea['lineTo'](286.09,287.47),_0xc959ea['lineTo'](0x118,279.81),_0xc959ea['lineTo'](270.72,270.71),_0xc959ea['bezierCurveTo'](270.72,270.71,286.28,286.4,277.78,313.81),_0xc959ea[_0x5134f5(0x1d4)](277.78,313.81),_0xc959ea[_0x5134f5(0x28f)](276.106667,319.143333,274.44,324.476667,272.78,329.81),_0xc959ea['lineTo'](272.78,329.81),_0xc959ea[_0x5134f5(0x1d4)](265.2,315.89),_0xc959ea[_0x5134f5(0x1d4)](259.75,307.61),_0xc959ea[_0x5134f5(0x28f)](267.679619,321.381348,269.795642,337.744541,265.63,353.08),_0xc959ea['lineTo'](264.63,356.41),_0xc959ea[_0x5134f5(0x1d4)](264.63,356.41),_0xc959ea[_0x5134f5(0x1d4)](264.63,356.41),_0xc959ea[_0x5134f5(0x28f)](263.683333,359.516667,262.74,362.62,261.8,365.72),_0xc959ea[_0x5134f5(0x1d4)](261.8,365.72),_0xc959ea['lineTo'](255.48,357.92),_0xc959ea['lineTo'](248.69,349.01),_0xc959ea[_0x5134f5(0x28f)](248.69,349.01,261.56,365.87,253.9,392.1),_0xc959ea['lineTo'](253.9,392.1),_0xc959ea[_0x5134f5(0x28f)](252.566667,396.706667,251.233333,401.26,249.9,405.76),_0xc959ea[_0x5134f5(0x1d4)](249.9,405.76),_0xc959ea['lineTo'](243.52,395.82),_0xc959ea['lineTo'](238.92,387.92),_0xc959ea['bezierCurveTo'](238.92,387.92,249.49,405.92,241.92,433.65),_0xc959ea[_0x5134f5(0x1d4)](241.92,433.65),_0xc959ea['lineTo'](239.82,441.18),_0xc959ea[_0x5134f5(0x1d4)](239.82,441.18),_0xc959ea[_0x5134f5(0x1d4)](0xe9,429.68),_0xc959ea[_0x5134f5(0x28f)](0xe9,429.68,239.72,442.12,234.11,462.31),_0xc959ea[_0x5134f5(0x1d4)](234.11,462.31),_0xc959ea[_0x5134f5(0x28f)](233.17,465.85,232.27,469.303333,231.41,472.67),_0xc959ea[_0x5134f5(0x1d4)](227.3,467.28),_0xc959ea['bezierCurveTo'](227.3,467.28,230.97,473.84,228.38,484.69),_0xc959ea[_0x5134f5(0x1d4)](228.38,484.69),_0xc959ea[_0x5134f5(0x28f)](225.19,497.69,222.71,508.99,221.15,518.02),_0xc959ea[_0x5134f5(0x28f)](0xf0,483.95,262.65,419.16,262.65,419.16),_0xc959ea[_0x5134f5(0x1d4)](306.26,315.71),_0xc959ea[_0x5134f5(0x1d4)](323.48,243.71)),_0xc959ea[_0x5134f5(0x5bc)](),_0xc959ea[_0x5134f5(0x45a)]=_0x30eb75[0x4],(_0xc959ea[_0x5134f5(0x2fd)](),_0xc959ea[_0x5134f5(0x494)](430.49,225.94),_0xc959ea['bezierCurveTo'](430.24,222.03,430.09,218.09,429.55,214.16),_0xc959ea[_0x5134f5(0x28f)](429.423333,213.18,429.263333,212.2,429.07,211.22),_0xc959ea[_0x5134f5(0x1d4)](428.45,208.34),_0xc959ea[_0x5134f5(0x1d4)](427.19,202.58),_0xc959ea[_0x5134f5(0x1d4)](422.19,179.53),_0xc959ea[_0x5134f5(0x28f)](421.32,175.68,420.19,171.89,419.07,168.13),_0xc959ea[_0x5134f5(0x1d4)](417.32,162.5),_0xc959ea[_0x5134f5(0x1d4)](415.43,156.91),_0xc959ea[_0x5134f5(0x28f)](414.15,153.123333,412.843333,149.343333,411.51,145.57),_0xc959ea[_0x5134f5(0x28f)](412.03,148.49,448.2,358.03,321.91,490.57),_0xc959ea['lineTo'](326.29,486.67),_0xc959ea[_0x5134f5(0x1d4)](335.01,478.85),_0xc959ea['lineTo'](343.73,471.03),_0xc959ea[_0x5134f5(0x28f)](346.64,468.41,349.57,465.84,352.41,463.15),_0xc959ea[_0x5134f5(0x28f)](358.12,457.8,363.64,452.24,369.01,446.56),_0xc959ea[_0x5134f5(0x28f)](374.446839,440.917476,379.571151,434.981953,384.36,428.78),_0xc959ea[_0x5134f5(0x28f)](386.72,425.64,388.94,422.39,390.98,419.04),_0xc959ea[_0x5134f5(0x28f)](393.02,415.69,394.98,412.33,396.9,408.89),_0xc959ea[_0x5134f5(0x28f)](398.82,405.45,400.58,401.99,402.18,398.37),_0xc959ea['bezierCurveTo'](403.78,394.75,405.04,391.05,406.28,387.37),_0xc959ea[_0x5134f5(0x28f)](408.76,379.98,411.28,372.59,413.63,365.12),_0xc959ea[_0x5134f5(0x28f)](414.78,361.38,415.9,357.64,416.87,353.83),_0xc959ea[_0x5134f5(0x28f)](417.84,350.02,418.65,346.21,419.42,342.37),_0xc959ea['bezierCurveTo'](420.19,338.53,420.97,334.72,421.59,330.84),_0xc959ea['bezierCurveTo'](422.21,326.96,422.69,323.1,423.29,319.26),_0xc959ea[_0x5134f5(0x28f)](423.89,315.42,424.71,311.58,425.4,307.75),_0xc959ea[_0x5134f5(0x28f)](426.09,303.92,426.91,300.09,427.4,296.2),_0xc959ea[_0x5134f5(0x28f)](427.89,292.31,428.45,288.48,429.13,284.63),_0xc959ea[_0x5134f5(0x28f)](429.81,280.78,430.26,276.88,430.65,272.99),_0xc959ea[_0x5134f5(0x28f)](431.417983,265.197929,431.751833,257.369163,431.65,249.54),_0xc959ea[_0x5134f5(0x28f)](431.51,241.64,0x1af,233.79,430.49,225.94)),_0xc959ea[_0x5134f5(0x5bc)](),_0xc959ea[_0x5134f5(0x45a)]=_0x30eb75[0x5],_0xc959ea[_0x5134f5(0x3a3)]=_0x30eb75[0x5],_0xc959ea['lineWidth']=0.5,(_0xc959ea[_0x5134f5(0x2fd)](),_0xc959ea[_0x5134f5(0x494)](299.66,335.53),_0xc959ea['bezierCurveTo'](309.681137,334.686744,319.615142,333.014353,329.36,330.53),_0xc959ea[_0x5134f5(0x28f)](339.199482,327.973836,348.817214,324.629701,358.12,320.53),_0xc959ea['bezierCurveTo'](362.786667,318.47,367.35,316.243333,371.81,313.85),_0xc959ea['bezierCurveTo'](376.27,311.456667,380.643333,308.883333,384.93,306.13),_0xc959ea['bezierCurveTo'](393.507021,300.696702,401.564499,294.483707,0x199,287.57),_0xc959ea[_0x5134f5(0x28f)](401.449487,294.326806,393.291566,300.372438,384.63,305.63),_0xc959ea[_0x5134f5(0x28f)](380.33,308.296667,375.93,310.79,371.43,313.11),_0xc959ea[_0x5134f5(0x28f)](366.93,315.43,362.353333,317.57,357.7,319.53),_0xc959ea[_0x5134f5(0x28f)](348.401624,323.448152,338.804247,326.614952,0x149,0x149),_0xc959ea[_0x5134f5(0x28f)](319.603472,331.243088,310.043265,332.734467,300.41,333.46),_0xc959ea[_0x5134f5(0x28f)](301.51,330.46,302.62,327.46,303.7,324.4),_0xc959ea[_0x5134f5(0x28f)](305.086667,320.546667,306.46,316.68,307.82,312.8),_0xc959ea[_0x5134f5(0x1d4)](314.12,311.35),_0xc959ea[_0x5134f5(0x1d4)](317.4,310.58),_0xc959ea['lineTo'](320.63,309.58),_0xc959ea[_0x5134f5(0x28f)](322.79,308.94,324.95,308.32,327.09,307.66),_0xc959ea['lineTo'](333.43,305.41),_0xc959ea[_0x5134f5(0x28f)](341.840722,302.350071,350.047426,298.756089,0x166,294.65),_0xc959ea[_0x5134f5(0x28f)](365.959278,290.559569,373.699792,286.056786,381.19,281.16),_0xc959ea[_0x5134f5(0x28f)](388.682119,276.281578,395.887358,270.976145,402.77,265.27),_0xc959ea[_0x5134f5(0x28f)](395.789265,270.841289,388.493886,276.006485,380.92,280.74),_0xc959ea[_0x5134f5(0x28f)](373.356854,285.469142,365.556654,289.808149,357.55,293.74),_0xc959ea[_0x5134f5(0x28f)](349.567396,297.696491,341.340718,301.140139,332.92,304.05),_0xc959ea[_0x5134f5(0x1d4)](326.59,306.16),_0xc959ea[_0x5134f5(0x28f)](324.45,306.78,322.3,307.34,320.16,307.94),_0xc959ea[_0x5134f5(0x1d4)](316.95,308.82),_0xc959ea['lineTo'](313.69,309.52),_0xc959ea[_0x5134f5(0x1d4)](308.57,310.6),_0xc959ea[_0x5134f5(0x1d4)](309.36,308.35),_0xc959ea['lineTo'](0x138,300.27),_0xc959ea[_0x5134f5(0x1d4)](313.32,296.22),_0xc959ea['bezierCurveTo'](313.77,294.88,314.21,293.53,314.58,292.16),_0xc959ea[_0x5134f5(0x28f)](315.35,289.54,316.09,286.91,316.83,284.28),_0xc959ea[_0x5134f5(0x28f)](325.865827,281.447791,334.625259,277.799422,0x157,273.38),_0xc959ea[_0x5134f5(0x1d4)](349.3,270.03),_0xc959ea[_0x5134f5(0x1d4)](355.47,266.47),_0xc959ea['bezierCurveTo'](357.55,265.31,359.54,264.01,361.57,262.77),_0xc959ea['bezierCurveTo'](363.6,261.53,365.57,260.29,367.57,258.97),_0xc959ea[_0x5134f5(0x28f)](375.57,253.84,383.32,248.36,390.96,242.73),_0xc959ea[_0x5134f5(0x28f)](398.6,237.1,406.08,231.26,413.35,225.16),_0xc959ea['bezierCurveTo'](405.98,231.16,398.35,236.81,390.66,242.32),_0xc959ea['bezierCurveTo'](382.97,247.83,375.09,253.15,0x16f,258.13),_0xc959ea[_0x5134f5(0x28f)](0x16d,259.41,0x16b,260.6,360.93,261.81),_0xc959ea[_0x5134f5(0x28f)](358.86,263.02,356.93,264.26,354.79,265.38),_0xc959ea[_0x5134f5(0x1d4)](348.58,268.83),_0xc959ea[_0x5134f5(0x1d4)](342.29,0x110),_0xc959ea[_0x5134f5(0x28f)](334.311743,276.031109,326.005153,279.376494,317.46,0x11a),_0xc959ea[_0x5134f5(0x1d4)](319.2,275.76),_0xc959ea[_0x5134f5(0x28f)](321.9,266.06,324.34,256.29,326.62,246.49),_0xc959ea[_0x5134f5(0x28f)](329.874304,245.741841,333.077493,244.786562,336.21,243.63),_0xc959ea[_0x5134f5(0x28f)](339.430957,242.413731,342.588325,241.035303,345.67,239.5),_0xc959ea[_0x5134f5(0x28f)](351.791575,236.396752,357.680318,232.854149,363.29,228.9),_0xc959ea[_0x5134f5(0x28f)](368.9,224.98,374.29,220.75,379.46,216.3),_0xc959ea[_0x5134f5(0x28f)](384.63,211.85,389.65,207.18,394.36,202.24),_0xc959ea['bezierCurveTo'](389.53,207.06,384.41,211.59,379.14,215.92),_0xc959ea[_0x5134f5(0x28f)](373.87416,220.243153,368.393882,224.298292,362.72,228.07),_0xc959ea[_0x5134f5(0x28f)](357.066914,231.866215,351.144545,235.245174,0x159,238.18),_0xc959ea[_0x5134f5(0x28f)](341.934973,239.618284,338.797427,240.896667,335.6,242.01),_0xc959ea[_0x5134f5(0x28f)](332.81442,242.95951,329.976369,243.747486,327.1,244.37),_0xc959ea[_0x5134f5(0x28f)](329.486667,233.97,331.696667,223.536667,333.73,213.07),_0xc959ea[_0x5134f5(0x1d4)](393.36,182.9),_0xc959ea[_0x5134f5(0x1d4)](334.11,211.14),_0xc959ea[_0x5134f5(0x1d4)](334.44,209.48),_0xc959ea['bezierCurveTo'](336.66,197.92,338.73,186.326667,340.65,174.7),_0xc959ea[_0x5134f5(0x28f)](343.104938,174.985029,345.590493,174.84976,0x15c,174.3),_0xc959ea[_0x5134f5(0x28f)](350.54725,173.755679,353.050747,173.023682,355.49,172.11),_0xc959ea['bezierCurveTo'](360.323367,170.268226,365.033112,168.117108,369.59,165.67),_0xc959ea[_0x5134f5(0x28f)](374.16,163.25,378.59,160.67,0x17f,157.94),_0xc959ea[_0x5134f5(0x28f)](387.41,155.21,391.69,152.4,395.9,149.44),_0xc959ea[_0x5134f5(0x28f)](391.62,152.31,387.25,155.03,382.82,157.65),_0xc959ea[_0x5134f5(0x28f)](378.39,160.27,373.87,162.75,369.28,165.05),_0xc959ea[_0x5134f5(0x28f)](364.706245,167.379689,359.98636,169.410609,355.15,171.13),_0xc959ea[_0x5134f5(0x28f)](352.747367,171.981834,350.28365,172.650414,347.78,173.13),_0xc959ea[_0x5134f5(0x28f)](345.506501,173.59759,343.170462,173.678726,340.87,173.37),_0xc959ea[_0x5134f5(0x28f)](342.583333,163.07,344.193333,152.736667,345.7,142.37),_0xc959ea[_0x5134f5(0x28f)](345.78,141.83,345.85,141.29,345.93,140.74),_0xc959ea['bezierCurveTo'](347.937647,140.185143,349.849427,139.32872,351.6,138.2),_0xc959ea[_0x5134f5(0x28f)](353.402611,137.059465,355.129551,135.803509,356.77,134.44),_0xc959ea[_0x5134f5(0x28f)](360.020292,131.719246,363.108885,128.810959,366.02,125.73),_0xc959ea['bezierCurveTo'](368.95,122.67,371.76,119.51,374.48,116.28),_0xc959ea[_0x5134f5(0x28f)](377.2,113.05,379.86,109.75,382.4,106.38),_0xc959ea[_0x5134f5(0x28f)](379.79,109.7,377.07,112.93,374.29,116.11),_0xc959ea[_0x5134f5(0x28f)](371.51,119.29,368.63,122.38,365.65,125.37),_0xc959ea['bezierCurveTo'](362.693277,128.372353,359.564676,131.200448,356.28,133.84),_0xc959ea[_0x5134f5(0x28f)](354.645971,135.148027,352.925382,136.344087,351.13,137.42),_0xc959ea[_0x5134f5(0x28f)](349.573662,138.386994,347.891052,139.134074,346.13,139.64),_0xc959ea[_0x5134f5(0x28f)](347.616667,129.34,349.023333,119.006667,350.35,108.64),_0xc959ea['bezierCurveTo'](350.57,106.84,350.78,105.04,0x15f,103.24),_0xc959ea['bezierCurveTo'](353.772959,102.887322,356.382857,101.733546,358.51,99.92),_0xc959ea['bezierCurveTo'](360.689247,98.129763,362.646488,96.085235,364.34,93.83),_0xc959ea[_0x5134f5(0x28f)](366.045862,91.599723,367.605781,89.261516,369.01,86.83),_0xc959ea[_0x5134f5(0x28f)](370.424961,84.40499,371.713354,81.908312,372.87,79.35),_0xc959ea['bezierCurveTo'](371.664016,81.886654,370.328935,84.359892,368.87,86.76),_0xc959ea[_0x5134f5(0x28f)](367.43589,89.167971,365.84583,91.47957,364.11,93.68),_0xc959ea['bezierCurveTo'](362.402661,95.90958,360.431652,97.92424,358.24,99.68),_0xc959ea[_0x5134f5(0x28f)](356.181381,101.379613,353.679738,102.455215,351.03,102.78),_0xc959ea[_0x5134f5(0x28f)](351.48,99.13,351.94,95.48,352.36,91.78),_0xc959ea['bezierCurveTo'](352.91,87.02,353.45,82.26,353.84,77.48),_0xc959ea[_0x5134f5(0x28f)](353.9683,76.612156,354.041779,75.737088,354.06,74.86),_0xc959ea['lineTo'](354.06,74.86),_0xc959ea[_0x5134f5(0x28f)](353.767911,76.227538,353.547609,77.609429,353.4,0x4f),_0xc959ea[_0x5134f5(0x1d4)](352.83,83.08),_0xc959ea['lineTo'](351.66,91.23),_0xc959ea[_0x5134f5(0x28f)](350.86,96.67,350.036667,102.1,349.19,107.52),_0xc959ea[_0x5134f5(0x28f)](348.96,0x6d,348.71,110.52,348.47,111.95),_0xc959ea[_0x5134f5(0x28f)](346.380877,110.605461,344.506467,108.953553,342.91,107.05),_0xc959ea['bezierCurveTo'](341.207134,104.948594,339.794484,102.627812,338.71,100.15),_0xc959ea[_0x5134f5(0x28f)](337.631198,97.658606,336.803763,95.065754,336.24,92.41),_0xc959ea['bezierCurveTo'](335.652362,89.750891,335.317538,87.042163,335.24,84.32),_0xc959ea[_0x5134f5(0x28f)](335.239879,87.048686,335.501071,89.771113,336.02,92.45),_0xc959ea[_0x5134f5(0x28f)](336.526469,95.139226,337.296862,97.771962,338.32,100.31),_0xc959ea[_0x5134f5(0x28f)](339.364301,102.853909,340.746748,105.245442,342.43,107.42),_0xc959ea[_0x5134f5(0x28f)](344.096692,109.506877,346.080879,111.318967,348.31,112.79),_0xc959ea[_0x5134f5(0x28f)](346.85,121.876667,345.33,130.953333,343.75,140.02),_0xc959ea[_0x5134f5(0x28f)](342.99,144.34,342.21,148.64,341.43,152.95),_0xc959ea['bezierCurveTo'](338.9,149.65,336.59,146.14,334.35,142.6),_0xc959ea[_0x5134f5(0x28f)](331.84,138.6,329.43,134.6,327.08,130.48),_0xc959ea[_0x5134f5(0x28f)](322.413333,122.313333,317.893333,114.033333,313.52,105.64),_0xc959ea[_0x5134f5(0x28f)](317.68,114.12,321.98,122.51,326.52,130.8),_0xc959ea[_0x5134f5(0x28f)](328.773333,134.946667,331.106667,139.053333,333.52,143.12),_0xc959ea['bezierCurveTo'](335.853003,147.115524,338.396586,150.984307,341.14,154.71),_0xc959ea['bezierCurveTo'](338.08,171.43,334.79,188.09,331.14,204.71),_0xc959ea[_0x5134f5(0x1d4)](330.93,205.64),_0xc959ea[_0x5134f5(0x28f)](330.54,204.77,330.14,203.92,329.7,203.09),_0xc959ea[_0x5134f5(0x1d4)](328.46,200.64),_0xc959ea[_0x5134f5(0x1d4)](327.15,198.24),_0xc959ea[_0x5134f5(0x28f)](326.29,196.63,325.4,195.04,324.5,193.46),_0xc959ea[_0x5134f5(0x28f)](323.6,191.88,322.71,190.29,321.78,188.72),_0xc959ea[_0x5134f5(0x28f)](318.13,182.42,314.34,176.21,310.55,0xaa),_0xc959ea[_0x5134f5(0x28f)](302.93,157.6,295.18,145.29,287.3,133.07),_0xc959ea[_0x5134f5(0x28f)](294.96,145.43,302.5,157.866667,309.92,170.38),_0xc959ea[_0x5134f5(0x28f)](313.61,176.65,317.28,182.92,320.82,189.27),_0xc959ea['bezierCurveTo'](321.72,190.85,322.59,192.44,323.46,194.04),_0xc959ea[_0x5134f5(0x28f)](324.33,195.64,325.19,197.23,326.02,198.84),_0xc959ea[_0x5134f5(0x1d4)](327.28,201.25),_0xc959ea[_0x5134f5(0x1d4)](328.46,203.69),_0xc959ea['bezierCurveTo'](329.2,205.12,329.79,206.59,330.4,208.05),_0xc959ea['bezierCurveTo'](328.27,217.66,326.14,227.26,323.83,236.82),_0xc959ea[_0x5134f5(0x28f)](323.31,0xef,322.77,241.17,322.23,243.35),_0xc959ea['bezierCurveTo'](319.523513,237.538154,316.457575,231.900567,313.05,226.47),_0xc959ea[_0x5134f5(0x28f)](309.17,220.21,304.89,214.22,300.51,208.33),_0xc959ea[_0x5134f5(0x28f)](296.13,202.44,291.51,196.75,286.74,191.14),_0xc959ea['bezierCurveTo'](281.97,185.53,277.13,180.05,272.07,174.74),_0xc959ea[_0x5134f5(0x28f)](277.01,180.16,281.74,185.74,286.36,191.46),_0xc959ea[_0x5134f5(0x28f)](290.98,197.18,295.45,202.95,299.7,208.92),_0xc959ea['bezierCurveTo'](303.95,214.89,308.06,220.92,311.76,227.24),_0xc959ea['bezierCurveTo'](315.459615,233.407716,318.695213,239.842143,321.44,246.49),_0xc959ea[_0x5134f5(0x28f)](319.56,253.903333,317.56,261.293333,315.44,268.66),_0xc959ea[_0x5134f5(0x1d4)](311.15,283.19),_0xc959ea['bezierCurveTo'](310.43586,280.708811,309.577739,278.271346,308.58,275.89),_0xc959ea[_0x5134f5(0x28f)](307.125264,272.474241,305.455242,269.154237,303.58,265.95),_0xc959ea[_0x5134f5(0x28f)](299.85838,259.571158,295.67733,253.471705,291.07,247.7),_0xc959ea['bezierCurveTo'](286.51,241.91,281.65,236.37,276.59,231.03),_0xc959ea[_0x5134f5(0x28f)](271.53,225.69,266.29,220.53,260.8,215.63),_0xc959ea['bezierCurveTo'](266.18,220.63,271.29,225.93,276.22,231.37),_0xc959ea[_0x5134f5(0x28f)](281.15,236.81,285.87,242.45,290.27,248.31),_0xc959ea[_0x5134f5(0x28f)](294.711787,254.133096,298.722451,260.272753,302.27,266.68),_0xc959ea[_0x5134f5(0x28f)](304.033085,269.865329,305.586386,273.162337,306.92,276.55),_0xc959ea[_0x5134f5(0x28f)](308.270743,279.897749,309.298741,283.366825,309.99,286.91),_0xc959ea[_0x5134f5(0x1d4)](308.34,292.3),_0xc959ea[_0x5134f5(0x1d4)](305.78,0x12c),_0xc959ea[_0x5134f5(0x1d4)](303.08,307.79),_0xc959ea[_0x5134f5(0x1d4)](302.38,309.67),_0xc959ea[_0x5134f5(0x28f)](298.932766,303.588345,295.056269,297.760233,290.78,292.23),_0xc959ea[_0x5134f5(0x28f)](286.07,286.23,281.01,280.49,275.78,274.97),_0xc959ea['bezierCurveTo'](270.55,269.45,264.98,264.22,259.31,259.13),_0xc959ea[_0x5134f5(0x28f)](253.64,254.04,247.81,249.13,241.77,244.52),_0xc959ea[_0x5134f5(0x28f)](247.71,249.27,253.41,254.32,258.97,259.52),_0xc959ea[_0x5134f5(0x28f)](264.53,264.72,269.9,270.1,275.05,275.68),_0xc959ea[_0x5134f5(0x28f)](280.2,281.26,285.05,287.09,289.61,293.16),_0xc959ea[_0x5134f5(0x28f)](294.060285,299.171244,298.029271,305.524297,301.48,312.16),_0xc959ea[_0x5134f5(0x1d4)](300.23,315.52),_0xc959ea[_0x5134f5(0x1d4)](294.37,330.91),_0xc959ea[_0x5134f5(0x28f)](291.99,337.05,289.593333,343.18,287.18,349.3),_0xc959ea[_0x5134f5(0x28f)](283.87,347.64,281.89,344.1,279.84,340.74),_0xc959ea[_0x5134f5(0x28f)](277.68,337.04,275.63,333.25,273.58,329.46),_0xc959ea[_0x5134f5(0x1d4)](270.51,323.78),_0xc959ea[_0x5134f5(0x28f)](269.42,321.9,268.41,319.98,267.26,318.16),_0xc959ea['lineTo'](265.57,315.39),_0xc959ea[_0x5134f5(0x1d4)](263.81,312.67),_0xc959ea[_0x5134f5(0x28f)](262.66,310.84,261.45,309.06,260.24,307.27),_0xc959ea[_0x5134f5(0x28f)](255.4,300.13,250.33,293.15,245.14,286.27),_0xc959ea['bezierCurveTo'](239.95,279.39,234.66,272.58,229.25,265.87),_0xc959ea['bezierCurveTo'](234.53,272.683333,239.693333,279.58,244.74,286.56),_0xc959ea[_0x5134f5(0x28f)](249.79,293.56,254.74,300.56,259.41,307.82),_0xc959ea[_0x5134f5(0x28f)](260.58,309.63,261.75,311.43,262.86,313.27),_0xc959ea[_0x5134f5(0x1d4)](264.55,316.01),_0xc959ea[_0x5134f5(0x1d4)](266.18,318.79),_0xc959ea[_0x5134f5(0x28f)](267.29,320.63,268.25,322.55,269.29,324.42),_0xc959ea[_0x5134f5(0x1d4)](272.29,330.16),_0xc959ea[_0x5134f5(0x28f)](274.29,333.99,276.29,337.82,278.36,341.61),_0xc959ea[_0x5134f5(0x28f)](279.408258,343.540652,280.580722,345.40123,281.87,347.18),_0xc959ea[_0x5134f5(0x28f)](282.552636,348.10872,283.345052,348.951501,284.23,349.69),_0xc959ea[_0x5134f5(0x28f)](284.930562,350.256711,285.687936,350.749339,286.49,351.16),_0xc959ea[_0x5134f5(0x28f)](282.943333,360.18,279.36,369.18,275.74,378.16),_0xc959ea['bezierCurveTo'](272.678992,375.756461,269.779399,373.154177,267.06,370.37),_0xc959ea[_0x5134f5(0x28f)](264.050646,367.3051,261.197054,364.091055,258.51,360.74),_0xc959ea['bezierCurveTo'](253.113167,354.032122,248.104966,347.02064,243.51,339.74),_0xc959ea[_0x5134f5(0x28f)](238.87,332.47,234.51,324.99,230.45,317.4),_0xc959ea[_0x5134f5(0x28f)](226.39,309.81,222.45,302.09,218.9,294.22),_0xc959ea[_0x5134f5(0x28f)](222.31,302.16,226.06,309.95,0xe6,317.63),_0xc959ea[_0x5134f5(0x28f)](233.94,325.31,238.15,332.88,242.66,340.27),_0xc959ea[_0x5134f5(0x28f)](247.134146,347.686959,252.028804,354.841974,257.32,361.7),_0xc959ea['bezierCurveTo'](259.967844,365.143315,262.791598,368.447708,265.78,371.6),_0xc959ea[_0x5134f5(0x28f)](268.633614,374.64481,271.697841,377.485151,274.95,380.1),_0xc959ea[_0x5134f5(0x28f)](270.03,392.36,265.07,404.6,260.07,416.82),_0xc959ea[_0x5134f5(0x28f)](257.405305,414.216058,254.944723,411.411128,252.71,408.43),_0xc959ea[_0x5134f5(0x28f)](250.19,405.11,247.84,401.65,245.61,398.11),_0xc959ea[_0x5134f5(0x28f)](241.18,391.02,237.18,383.63,233.44,376.11),_0xc959ea[_0x5134f5(0x28f)](229.7,368.59,226.22,360.96,222.93,353.23),_0xc959ea['bezierCurveTo'](219.64,345.5,216.5,337.71,213.62,329.82),_0xc959ea[_0x5134f5(0x28f)](216.34,337.77,219.33,345.63,222.47,353.43),_0xc959ea[_0x5134f5(0x28f)](225.61,361.23,228.95,368.94,232.54,376.55),_0xc959ea[_0x5134f5(0x28f)](236.13,384.16,0xf0,391.64,244.33,398.89),_0xc959ea[_0x5134f5(0x28f)](246.51,402.5,248.81,406.05,251.33,409.47),_0xc959ea[_0x5134f5(0x28f)](253.727855,412.797666,256.40415,415.915549,259.33,418.79),_0xc959ea[_0x5134f5(0x28f)](255.15,429.01,250.953333,439.226667,246.74,449.44),_0xc959ea[_0x5134f5(0x28f)](244.778777,447.210592,242.996576,444.829866,241.41,442.32),_0xc959ea[_0x5134f5(0x28f)](239.52,439.43,237.79,436.41,236.07,433.4),_0xc959ea[_0x5134f5(0x28f)](232.66,427.34,229.43,421.17,225.97,415.11),_0xc959ea['bezierCurveTo'](224.25,412.11,222.44,409.11,220.52,406.17),_0xc959ea[_0x5134f5(0x28f)](219.52,404.73,218.52,403.29,217.41,401.94),_0xc959ea['bezierCurveTo'](216.3,400.59,215.2,399.27,214.22,397.83),_0xc959ea[_0x5134f5(0x28f)](212.202342,395.007135,210.505222,391.96842,209.16,388.77),_0xc959ea[_0x5134f5(0x28f)](207.794006,385.579613,206.881803,382.213553,206.45,378.77),_0xc959ea['bezierCurveTo'](206.794245,382.246821,207.629204,385.657359,208.93,388.9),_0xc959ea['bezierCurveTo'](210.205438,392.159366,211.842331,395.265438,213.81,398.16),_0xc959ea[_0x5134f5(0x28f)](214.75,399.62,215.9,400.98,216.92,402.37),_0xc959ea[_0x5134f5(0x28f)](217.94,403.76,218.92,405.18,219.92,406.62),_0xc959ea[_0x5134f5(0x28f)](221.76,409.56,223.496667,412.56,225.13,415.62),_0xc959ea[_0x5134f5(0x28f)](228.43,421.74,231.51,427.98,234.79,434.14),_0xc959ea['bezierCurveTo'](236.44,437.21,238.1,440.29,239.96,443.27),_0xc959ea[_0x5134f5(0x28f)](241.69116,446.199586,243.700435,448.955642,245.96,451.5),_0xc959ea[_0x5134f5(0x28f)](245.73,452.05,245.51,452.61,245.28,453.16),_0xc959ea[_0x5134f5(0x1d4)](235.65,476.16),_0xc959ea['bezierCurveTo'](233.234419,473.928115,231.116935,471.393856,229.35,468.62),_0xc959ea[_0x5134f5(0x1d4)](227.86,466.23),_0xc959ea['lineTo'](226.53,463.74),_0xc959ea[_0x5134f5(0x28f)](226.07,462.92,225.7,462.05,225.29,461.2),_0xc959ea['bezierCurveTo'](224.88,460.35,224.47,459.5,224.12,458.62),_0xc959ea['bezierCurveTo'](222.637911,455.133693,221.349287,451.568275,220.26,447.94),_0xc959ea[_0x5134f5(0x28f)](219.17,444.3,218.19,440.63,217.46,436.94),_0xc959ea[_0x5134f5(0x28f)](218.03,440.71,218.84,444.43,219.78,448.12),_0xc959ea[_0x5134f5(0x28f)](220.651169,451.803459,221.726156,455.435715,0xdf,0x1cb),_0xc959ea['bezierCurveTo'](223.31,459.91,223.69,460.79,224.06,461.67),_0xc959ea[_0x5134f5(0x28f)](224.43,462.55,224.77,463.45,225.21,464.3),_0xc959ea[_0x5134f5(0x1d4)](226.46,466.9),_0xc959ea[_0x5134f5(0x1d4)](227.87,469.42),_0xc959ea[_0x5134f5(0x28f)](229.710692,472.611692,231.993268,475.527195,234.65,478.08),_0xc959ea[_0x5134f5(0x1d4)](225.34,500.28),_0xc959ea[_0x5134f5(0x28f)](223.567784,498.932077,222.096411,497.229099,221.02,495.28),_0xc959ea[_0x5134f5(0x28f)](219.682772,492.949719,218.654152,490.455485,217.96,487.86),_0xc959ea['bezierCurveTo'](217.240155,485.235686,216.71539,482.561726,216.39,479.86),_0xc959ea[_0x5134f5(0x28f)](216.048256,477.146861,215.881245,474.414563,215.89,471.68),_0xc959ea[_0x5134f5(0x28f)](215.715019,474.420543,215.715019,477.169457,215.89,479.91),_0xc959ea[_0x5134f5(0x28f)](216.051088,482.664265,216.422166,485.402217,0xd9,488.1),_0xc959ea[_0x5134f5(0x28f)](217.563246,490.841192,218.473932,493.49932,219.71,496.01),_0xc959ea[_0x5134f5(0x28f)](220.864811,498.365539,222.524089,500.437928,224.57,502.08),_0xc959ea[_0x5134f5(0x1d4)](194.12,574.71),_0xc959ea['bezierCurveTo'](193.118154,577.053783,193.766894,579.777055,195.717847,581.41742),_0xc959ea['bezierCurveTo'](197.6688,583.057785,200.463015,583.229356,202.6,581.84),_0xc959ea['bezierCurveTo'](203.294888,581.395101,203.885101,580.804888,204.33,580.11),_0xc959ea[_0x5134f5(0x28f)](204.537742,579.764552,204.718287,579.403462,204.87,579.03),_0xc959ea[_0x5134f5(0x1d4)](205.26,578.03),_0xc959ea['lineTo'](211.54,562.23),_0xc959ea[_0x5134f5(0x1d4)](224.09,530.63),_0xc959ea['lineTo'](233.09,507.93),_0xc959ea[_0x5134f5(0x28f)](237.58,508.07,242.09,508.14,246.55,507.93),_0xc959ea[_0x5134f5(0x28f)](251.01,507.72,255.72,507.44,260.27,506.93),_0xc959ea['bezierCurveTo'](264.82,506.42,269.38,505.81,273.89,505.03),_0xc959ea[_0x5134f5(0x28f)](278.4,504.25,282.89,503.32,287.31,502.14),_0xc959ea['bezierCurveTo'](282.85,503.14,278.31,503.91,273.81,504.53),_0xc959ea[_0x5134f5(0x28f)](269.31,505.15,264.74,505.63,260.19,505.93),_0xc959ea[_0x5134f5(0x28f)](255.64,506.23,251.08,506.42,246.52,506.4),_0xc959ea['bezierCurveTo'](242.29,506.4,238.07,506.21,233.87,505.94),_0xc959ea[_0x5134f5(0x1d4)](242.87,483.17),_0xc959ea['bezierCurveTo'](247.748633,484.67415,252.779669,485.630046,257.87,486.02),_0xc959ea[_0x5134f5(0x1d4)](261.81,486.28),_0xc959ea[_0x5134f5(0x1d4)](265.75,486.37),_0xc959ea[_0x5134f5(0x28f)](267.06,486.37,268.38,486.37,269.69,486.37),_0xc959ea['bezierCurveTo'](0x10f,486.37,272.31,486.37,273.62,486.24),_0xc959ea[_0x5134f5(0x28f)](278.86,486.02,284.08,485.46,289.26,484.78),_0xc959ea[_0x5134f5(0x28f)](294.44,484.1,299.61,483.21,304.72,482.07),_0xc959ea['bezierCurveTo'](299.58,483.07,294.4,483.74,289.21,484.28),_0xc959ea[_0x5134f5(0x28f)](284.02,484.82,278.8,485.19,273.59,485.28),_0xc959ea[_0x5134f5(0x28f)](272.29,485.34,270.98,485.28,269.68,485.28),_0xc959ea[_0x5134f5(0x28f)](268.38,485.28,267.08,485.28,265.78,485.18),_0xc959ea[_0x5134f5(0x1d4)](261.89,484.97),_0xc959ea[_0x5134f5(0x1d4)](258.02,484.58),_0xc959ea[_0x5134f5(0x28f)](253.124193,484.047191,248.301856,482.977424,243.64,481.39),_0xc959ea[_0x5134f5(0x1d4)](249.19,467.39),_0xc959ea[_0x5134f5(0x28f)](250.19,464.99,251.09,462.58,252.04,460.18),_0xc959ea[_0x5134f5(0x1d4)](257.36,461.07),_0xc959ea[_0x5134f5(0x1d4)](260.36,461.57),_0xc959ea[_0x5134f5(0x28f)](261.36,461.72,262.36,461.78,263.36,461.89),_0xc959ea[_0x5134f5(0x1d4)](269.36,462.48),_0xc959ea['bezierCurveTo'](271.36,462.61,273.36,462.64,275.36,462.73),_0xc959ea[_0x5134f5(0x1d4)](278.36,462.84),_0xc959ea[_0x5134f5(0x28f)](279.36,462.84,280.36,462.84,281.36,462.79),_0xc959ea[_0x5134f5(0x1d4)](287.36,462.65),_0xc959ea[_0x5134f5(0x28f)](291.36,462.34,295.36,462.15,299.26,461.58),_0xc959ea['bezierCurveTo'](307.162025,460.627802,314.987783,459.124133,322.68,457.08),_0xc959ea[_0x5134f5(0x28f)](330.372552,455.087162,337.898555,452.499367,345.19,449.34),_0xc959ea['bezierCurveTo'](337.845928,452.34203,330.279858,454.769325,322.56,456.6),_0xc959ea[_0x5134f5(0x28f)](314.859048,458.475463,307.03677,459.812033,299.15,460.6),_0xc959ea[_0x5134f5(0x28f)](295.22,461.08,291.26,461.18,287.32,461.41),_0xc959ea[_0x5134f5(0x1d4)](281.39,461.41),_0xc959ea[_0x5134f5(0x28f)](280.39,461.41,279.39,461.41,278.39,461.41),_0xc959ea[_0x5134f5(0x1d4)](275.44,461.24),_0xc959ea['bezierCurveTo'](273.44,461.11,271.49,461.04,269.53,460.87),_0xc959ea['lineTo'](263.65,460.16),_0xc959ea[_0x5134f5(0x28f)](262.65,460.03,261.65,459.95,260.72,459.79),_0xc959ea[_0x5134f5(0x1d4)](257.81,459.23),_0xc959ea['lineTo'](252.92,458.31),_0xc959ea[_0x5134f5(0x28f)](255.886667,450.803333,258.83,443.283333,261.75,435.75),_0xc959ea[_0x5134f5(0x1d4)](264.75,427.87),_0xc959ea['lineTo'](271.61,0x1ac),_0xc959ea[_0x5134f5(0x1d4)](275.28,428.06),_0xc959ea[_0x5134f5(0x28f)](276.5,428.06,277.72,427.99,278.95,427.95),_0xc959ea[_0x5134f5(0x1d4)](286.28,427.7),_0xc959ea[_0x5134f5(0x1d4)](293.59,427.1),_0xc959ea[_0x5134f5(0x1d4)](297.24,426.8),_0xc959ea[_0x5134f5(0x1d4)](300.88,426.33),_0xc959ea[_0x5134f5(0x28f)](303.3,426.01,305.73,425.73,308.15,425.38),_0xc959ea[_0x5134f5(0x28f)](312.96,424.55,317.79,423.82,322.56,422.75),_0xc959ea[_0x5134f5(0x28f)](332.11993,420.773435,341.569582,418.296698,350.87,415.33),_0xc959ea[_0x5134f5(0x28f)](360.149488,412.428191,369.248783,408.978807,378.12,0x195),_0xc959ea[_0x5134f5(0x28f)](369.169758,408.852543,359.996642,412.16515,350.65,414.92),_0xc959ea['bezierCurveTo'](341.325156,417.724595,331.858624,420.034482,322.29,421.84),_0xc959ea['bezierCurveTo'](317.53,422.84,312.7,423.47,307.9,424.21),_0xc959ea[_0x5134f5(0x28f)](305.49,424.52,303.07,424.76,300.66,425.03),_0xc959ea[_0x5134f5(0x1d4)](297.03,425.43),_0xc959ea[_0x5134f5(0x1d4)](293.4,425.68),_0xc959ea[_0x5134f5(0x1d4)](286.13,426.14),_0xc959ea[_0x5134f5(0x1d4)](278.85,426.27),_0xc959ea['bezierCurveTo'](277.64,426.27,276.42,426.33,275.21,426.27),_0xc959ea[_0x5134f5(0x1d4)](271.57,426.14),_0xc959ea[_0x5134f5(0x1d4)](265.44,425.92),_0xc959ea[_0x5134f5(0x1d4)](273.9,404.05),_0xc959ea['lineTo'](276.44,397.42),_0xc959ea[_0x5134f5(0x28f)](281.770413,397.776303,287.120775,397.70608,292.44,397.21),_0xc959ea[_0x5134f5(0x28f)](297.9039,396.661021,303.32566,395.752383,308.67,394.49),_0xc959ea[_0x5134f5(0x28f)](319.304232,391.902545,329.68049,388.351187,339.67,383.88),_0xc959ea['bezierCurveTo'](349.660792,379.456497,359.372192,374.427141,368.75,368.82),_0xc959ea[_0x5134f5(0x28f)](378.143829,363.260838,387.208908,357.16403,395.9,350.56),_0xc959ea[_0x5134f5(0x28f)](387.113785,357.02045,377.965537,362.973489,368.5,368.39),_0xc959ea['bezierCurveTo'](359.068327,373.847301,349.313675,378.726297,339.29,0x17f),_0xc959ea[_0x5134f5(0x28f)](329.283202,387.286697,318.907086,390.653914,308.29,393.06),_0xc959ea[_0x5134f5(0x28f)](302.996377,394.226849,297.631313,395.041964,292.23,395.5),_0xc959ea['bezierCurveTo'](287.210705,395.884995,282.169295,395.884995,277.15,395.5),_0xc959ea[_0x5134f5(0x28f)](280.603333,386.466667,284.033333,377.43,287.44,368.39),_0xc959ea[_0x5134f5(0x28f)](291.168819,368.27132,294.884664,367.890379,298.56,367.25),_0xc959ea['bezierCurveTo'](302.456875,366.589762,306.315704,365.721859,310.12,364.65),_0xc959ea['bezierCurveTo'](317.703022,362.515407,325.149958,359.924007,332.42,356.89),_0xc959ea[_0x5134f5(0x28f)](339.7,353.89,346.83,350.58,353.85,347.05),_0xc959ea[_0x5134f5(0x28f)](360.87,343.52,367.77,339.76,374.5,335.72),_0xc959ea[_0x5134f5(0x28f)](367.69,339.62,360.7,343.21,353.63,346.6),_0xc959ea[_0x5134f5(0x28f)](346.56,349.99,339.36,353.14,332.05,355.96),_0xc959ea['bezierCurveTo'](324.766107,358.820936,317.315836,361.238684,309.74,363.2),_0xc959ea['bezierCurveTo'](305.963906,364.178842,302.138527,364.956602,298.28,365.53),_0xc959ea[_0x5134f5(0x28f)](294.938345,366.030666,291.568185,366.317915,288.19,366.39),_0xc959ea[_0x5134f5(0x28f)](291.443333,357.723333,294.666667,349.056667,297.86,340.39),_0xc959ea[_0x5134f5(0x28f)](298.49,338.79,299.06,337.16,299.66,335.53)),_0xc959ea[_0x5134f5(0x5bc)](),_0xc959ea[_0x5134f5(0x296)](),_0xc959ea[_0x5134f5(0x1aa)](),this[_0x5134f5(0x3a1)][_0x5134f5(0x4b1)]();},Bitmap['prototype']['drawDandelionSeed']=function(_0x51d90e,_0x1f8b28,_0x4eb9e1){const _0x2f7dc2=_0x3cb96a,_0xe1c8a6=this[_0x2f7dc2(0x30c)];_0x51d90e=_0x51d90e||'#bbbbbb',_0x1f8b28=_0x1f8b28||_0x2f7dc2(0x3f3),_0x4eb9e1=_0x4eb9e1||_0x2f7dc2(0x581),_0xe1c8a6[_0x2f7dc2(0x1a5)](),_0xe1c8a6['fillStyle']=_0x51d90e,(_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x540)]=0.695966,_0xe1c8a6[_0x2f7dc2(0x494)](32.118356,32.638166),_0xe1c8a6['bezierCurveTo'](36.363751,64.026251,27.872961,82.886942,27.872961,82.886942)),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['fillStyle']=_0x1f8b28,(_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](30.16965,77.249614),_0xe1c8a6[_0x2f7dc2(0x28f)](31.491986,78.154371,30.16965,83.443715,27.107398,89.081043),_0xe1c8a6[_0x2f7dc2(0x28f)](24.045146,94.718371,20.495717,98.546186,19.173381,97.64143),_0xe1c8a6['bezierCurveTo'](17.851045,96.736674,19.173381,91.447329,22.235633,85.810001),_0xe1c8a6[_0x2f7dc2(0x28f)](25.297885,80.172673,28.847314,76.344858,30.16965,77.249614)),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['fillStyle']=_0x4eb9e1,_0xe1c8a6['strokeStyle']=_0x4eb9e1,_0xe1c8a6[_0x2f7dc2(0x540)]=0x5,(_0xe1c8a6[_0x2f7dc2(0x1a5)](),_0xe1c8a6[_0x2f7dc2(0x3cf)](0.695966,0x0,0x0,0.695966,181.842,123.051),_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](-242.3,-157.8),_0xe1c8a6[_0x2f7dc2(0x1d4)](-214.1,-130.5),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1a5)](),_0xe1c8a6[_0x2f7dc2(0x3cf)](0.31266,0x0,0x0,0.32058,88.64,390.11),_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](-1050.5,-0x6a5),_0xe1c8a6[_0x2f7dc2(0x28f)](-1079.4,-1729.8,-1102.2,-1750.4,-1078.2,-1725.7),_0xe1c8a6['bezierCurveTo'](-1054.1,-0x6a5,-1052.9,-0x6a5,-1050.5,-0x6a5),_0xe1c8a6['fill'](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-1048.5,-0x6a7),_0xe1c8a6['bezierCurveTo'](-1077.4,-1731.8,-1100.2,-1752.4,-1076.2,-1727.7),_0xe1c8a6[_0x2f7dc2(0x28f)](-1052.1,-0x6a7,-1050.9,-0x6a7,-1048.5,-0x6a7),_0xe1c8a6['fill'](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-1050.5,-0x6a7),_0xe1c8a6['bezierCurveTo'](-1079.4,-1731.8,-1102.2,-1752.4,-1078.2,-1727.7),_0xe1c8a6[_0x2f7dc2(0x28f)](-1054.1,-0x6a7,-1052.9,-0x6a7,-1050.5,-0x6a7),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1aa)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6['moveTo'](-230.9,-162.8),_0xe1c8a6['lineTo'](-215.2,-132.2),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1a5)](),_0xe1c8a6[_0x2f7dc2(0x3cf)](0.22445,0.070054,-0.053362,0.28457,132.9,389.45),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-1959.5,-1448.4),_0xe1c8a6[_0x2f7dc2(0x28f)](-1988.4,-1477.2,-2011.2,-1497.8,-1987.2,-1473.1),_0xe1c8a6['bezierCurveTo'](-1963.1,-1448.4,-1961.9,-1448.4,-1959.5,-1448.4),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-1957.5,-1450.4),_0xe1c8a6[_0x2f7dc2(0x28f)](-1986.4,-1479.2,-2009.2,-1499.8,-1985.2,-1475.1),_0xe1c8a6['bezierCurveTo'](-1961.1,-1450.4,-1959.9,-1450.4,-1957.5,-1450.4),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-1959.5,-1450.4),_0xe1c8a6['bezierCurveTo'](-1988.4,-1479.2,-2011.2,-1499.8,-1987.2,-1475.1),_0xe1c8a6['bezierCurveTo'](-1963.1,-1450.4,-1961.9,-1450.4,-1959.5,-1450.4),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['restore'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-217.8,-162.7),_0xe1c8a6[_0x2f7dc2(0x1d4)](-216.1,-133.5),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1a5)](),_0xe1c8a6['transform'](0.22089,0.17769,-0.21484,0.15456,209.48,425.48),_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](-2652.9,-738.7),_0xe1c8a6[_0x2f7dc2(0x28f)](-2681.8,-767.5,-2704.6,-788.1,-2680.6,-763.4),_0xe1c8a6[_0x2f7dc2(0x28f)](-2656.5,-738.7,-2655.3,-738.7,-2652.9,-738.7),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-2650.9,-740.7),_0xe1c8a6[_0x2f7dc2(0x28f)](-2679.8,-769.5,-2702.6,-790.1,-2678.6,-765.4),_0xe1c8a6['bezierCurveTo'](-2654.5,-740.7,-2653.3,-740.7,-2650.9,-740.7),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-2652.9,-740.7),_0xe1c8a6[_0x2f7dc2(0x28f)](-2681.8,-769.5,-2704.6,-790.1,-2680.6,-765.4),_0xe1c8a6[_0x2f7dc2(0x28f)](-2656.5,-740.7,-2655.3,-740.7,-2652.9,-740.7),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x1aa)](),_0xe1c8a6['beginPath'](),_0xe1c8a6['moveTo'](-196.4,-158.1),_0xe1c8a6[_0x2f7dc2(0x1d4)](-216.8,-133.7),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1a5)](),_0xe1c8a6['transform'](-0.002675,0.26549,-0.23659,0.00452,270.1,476.54),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-2416.6,2007.2),_0xe1c8a6[_0x2f7dc2(0x28f)](-2445.5,1978.4,-2468.3,1957.8,-2444.3,1982.5),_0xe1c8a6[_0x2f7dc2(0x28f)](-2420.2,2007.2,-0x973,2007.2,-2416.6,2007.2),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-2414.6,2005.2),_0xe1c8a6[_0x2f7dc2(0x28f)](-2443.5,1976.4,-2466.3,1955.8,-2442.3,1980.5),_0xe1c8a6['bezierCurveTo'](-2418.2,2005.2,-0x971,2005.2,-2414.6,2005.2),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-2416.6,2005.2),_0xe1c8a6[_0x2f7dc2(0x28f)](-2445.5,1976.4,-2468.3,1955.8,-2444.3,1980.5),_0xe1c8a6['bezierCurveTo'](-2420.2,2005.2,-0x973,2005.2,-2416.6,2005.2),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x1aa)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-246.9,-141.7),_0xe1c8a6[_0x2f7dc2(0x1d4)](-214.2,-131.4),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x1a5)](),_0xe1c8a6[_0x2f7dc2(0x3cf)](0.24275,-0.15327,0.12697,0.28299,44.094,441.92),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-85.8,-2104.9),_0xe1c8a6['bezierCurveTo'](-114.7,-2133.7,-137.5,-2154.3,-113.5,-2129.6),_0xe1c8a6[_0x2f7dc2(0x28f)](-89.4,-2104.9,-88.2,-2104.9,-85.8,-2104.9),_0xe1c8a6['fill'](),_0xe1c8a6['stroke'](),_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](-83.8,-2106.9),_0xe1c8a6['bezierCurveTo'](-112.7,-2135.7,-135.5,-2156.3,-111.5,-2131.6),_0xe1c8a6[_0x2f7dc2(0x28f)](-87.4,-2106.9,-86.2,-2106.9,-83.8,-2106.9),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](-85.8,-2106.9),_0xe1c8a6[_0x2f7dc2(0x28f)](-114.7,-2135.7,-137.5,-2156.3,-113.5,-2131.6),_0xe1c8a6[_0x2f7dc2(0x28f)](-89.4,-2106.9,-88.2,-2106.9,-85.8,-2106.9),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6['stroke'](),_0xe1c8a6['restore'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-185.8,-142.3),_0xe1c8a6[_0x2f7dc2(0x1d4)](-218.5,-0x84),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1a5)](),_0xe1c8a6[_0x2f7dc2(0x3cf)](-0.24275,-0.15327,-0.12697,0.28299,270.99,441.28),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](2314.6,-804.9),_0xe1c8a6[_0x2f7dc2(0x28f)](2285.7,-833.7,2262.9,-854.3,2286.9,-829.6),_0xe1c8a6['bezierCurveTo'](0x907,-804.9,2312.2,-804.9,2314.6,-804.9),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](2316.6,-806.9),_0xe1c8a6[_0x2f7dc2(0x28f)](2287.7,-835.7,2264.9,-856.3,2288.9,-831.6),_0xe1c8a6['bezierCurveTo'](0x909,-806.9,2314.2,-806.9,2316.6,-806.9),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](2314.6,-806.9),_0xe1c8a6[_0x2f7dc2(0x28f)](2285.7,-835.7,2262.9,-856.3,2286.9,-831.6),_0xe1c8a6[_0x2f7dc2(0x28f)](0x907,-806.9,2312.2,-806.9,2314.6,-806.9),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1aa)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-231.8,-129.4),_0xe1c8a6['lineTo'](-213.2,-134.7),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1a5)](),_0xe1c8a6[_0x2f7dc2(0x3cf)](0.023653,-0.076388,0.19356,0.018706,63.365,546.69),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](8238.8,-2522.6),_0xe1c8a6[_0x2f7dc2(0x28f)](8209.9,-2551.4,8187.1,-0xa0c,8211.1,-2547.3),_0xe1c8a6[_0x2f7dc2(0x28f)](8235.2,-2522.6,8236.4,-2522.6,8238.8,-2522.6),_0xe1c8a6['fill'](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6['moveTo'](8240.8,-2524.6),_0xe1c8a6[_0x2f7dc2(0x28f)](8211.9,-2553.4,8189.1,-0xa0e,8213.1,-2549.3),_0xe1c8a6['bezierCurveTo'](8237.2,-2524.6,8238.4,-2524.6,8240.8,-2524.6),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](8238.8,-2524.6),_0xe1c8a6[_0x2f7dc2(0x28f)](8209.9,-2553.4,8187.1,-0xa0e,8211.1,-2549.3),_0xe1c8a6['bezierCurveTo'](8235.2,-2524.6,8236.4,-2524.6,8238.8,-2524.6),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1aa)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6['moveTo'](-199.6,-0x80),_0xe1c8a6[_0x2f7dc2(0x1d4)](-218.2,-133.3),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['save'](),_0xe1c8a6[_0x2f7dc2(0x3cf)](-0.023653,-0.076388,-0.19356,0.018706,252.97,548.1),_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](9157.3,1228.3),_0xe1c8a6[_0x2f7dc2(0x28f)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0xe1c8a6[_0x2f7dc2(0x28f)](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](9159.3,1226.3),_0xe1c8a6[_0x2f7dc2(0x28f)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0xe1c8a6[_0x2f7dc2(0x28f)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0xe1c8a6['fill'](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](9157.3,1226.3),_0xe1c8a6[_0x2f7dc2(0x28f)](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0xe1c8a6['bezierCurveTo'](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0xe1c8a6['restore'](),_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](-198.5,-126.8),_0xe1c8a6['lineTo'](-217.1,-132.1),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['save'](),_0xe1c8a6['transform'](-0.023653,-0.076388,-0.19356,0.018706,254.11,549.29),_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](9157.3,1228.3),_0xe1c8a6[_0x2f7dc2(0x28f)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0xe1c8a6[_0x2f7dc2(0x28f)](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](9159.3,1226.3),_0xe1c8a6[_0x2f7dc2(0x28f)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0xe1c8a6[_0x2f7dc2(0x28f)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0xe1c8a6['fill'](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6['moveTo'](9157.3,1226.3),_0xe1c8a6[_0x2f7dc2(0x28f)](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0xe1c8a6[_0x2f7dc2(0x28f)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1aa)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6['moveTo'](-215.6,-132.9),_0xe1c8a6[_0x2f7dc2(0x1d4)](-215.6,-128.2),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-206.5,-160.9),_0xe1c8a6[_0x2f7dc2(0x1d4)](-215.4,-134.6),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['save'](),_0xe1c8a6[_0x2f7dc2(0x3cf)](0.14296,0.24045,-0.25629,0.054271,247.7,457.79),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-2632.7,307.2),_0xe1c8a6[_0x2f7dc2(0x28f)](-2661.6,278.4,-2684.4,257.8,-2660.4,282.5),_0xe1c8a6[_0x2f7dc2(0x28f)](-2636.3,307.2,-2635.1,307.2,-2632.7,307.2),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](-2630.7,305.2),_0xe1c8a6[_0x2f7dc2(0x28f)](-2659.6,276.4,-2682.4,255.8,-2658.4,280.5),_0xe1c8a6[_0x2f7dc2(0x28f)](-2634.3,305.2,-2633.1,305.2,-2630.7,305.2),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-2632.7,305.2),_0xe1c8a6[_0x2f7dc2(0x28f)](-2661.6,276.4,-2684.4,255.8,-2660.4,280.5),_0xe1c8a6[_0x2f7dc2(0x28f)](-2636.3,305.2,-2635.1,305.2,-2632.7,305.2),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['restore'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-188.1,-148.7),_0xe1c8a6[_0x2f7dc2(0x1d4)](-215.9,-0x87),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['save'](),_0xe1c8a6[_0x2f7dc2(0x3cf)](-0.097581,0.23264,-0.2229,-0.086065,286.11,525.8),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6['moveTo'](-1809.9,2931.2),_0xe1c8a6['bezierCurveTo'](-1838.8,2902.4,-1861.6,2881.8,-1837.6,2906.5),_0xe1c8a6[_0x2f7dc2(0x28f)](-1813.5,2931.2,-1812.3,2931.2,-1809.9,2931.2),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6['moveTo'](-1807.9,2929.2),_0xe1c8a6['bezierCurveTo'](-1836.8,2900.4,-1859.6,2879.8,-1835.6,2904.5),_0xe1c8a6[_0x2f7dc2(0x28f)](-1811.5,2929.2,-1810.3,2929.2,-1807.9,2929.2),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-1809.9,2929.2),_0xe1c8a6[_0x2f7dc2(0x28f)](-1838.8,2900.4,-1861.6,2879.8,-1837.6,2904.5),_0xe1c8a6[_0x2f7dc2(0x28f)](-1813.5,2929.2,-1812.3,2929.2,-1809.9,2929.2),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1aa)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-183.8,-130.7),_0xe1c8a6[_0x2f7dc2(0x1d4)](-218.1,-134.1),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1a5)](),_0xe1c8a6[_0x2f7dc2(0x3cf)](-0.17214,-0.22728,-0.2201,0.20074,299.56,495.11),_0xe1c8a6['beginPath'](),_0xe1c8a6[_0x2f7dc2(0x494)](2783.6,33.2),_0xe1c8a6[_0x2f7dc2(0x28f)](2754.7,4.4,2731.9,-16.2,2755.9,8.5),_0xe1c8a6[_0x2f7dc2(0x28f)](0xadc,33.2,2781.2,33.2,2783.6,33.2),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](2785.6,31.2),_0xe1c8a6[_0x2f7dc2(0x28f)](2756.7,2.4,2733.9,-18.2,2757.9,6.5),_0xe1c8a6['bezierCurveTo'](0xade,31.2,2783.2,31.2,2785.6,31.2),_0xe1c8a6['fill'](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](2783.6,31.2),_0xe1c8a6[_0x2f7dc2(0x28f)](2754.7,2.4,2731.9,-18.2,2755.9,6.5),_0xe1c8a6[_0x2f7dc2(0x28f)](0xadc,31.2,2781.2,31.2,2783.6,31.2),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6['stroke'](),_0xe1c8a6[_0x2f7dc2(0x1aa)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-231.5,-136.9),_0xe1c8a6[_0x2f7dc2(0x1d4)](-212.2,-134.5),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['save'](),_0xe1c8a6[_0x2f7dc2(0x3cf)](0.049479,-0.058228,0.17433,0.090128,67.628,508.86),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](5867.7,-3370.8),_0xe1c8a6['bezierCurveTo'](5838.8,-3399.6,0x16b8,-3420.2,0x16d0,-3395.5),_0xe1c8a6[_0x2f7dc2(0x28f)](0x16e8,-3370.8,5865.3,-3370.8,5867.7,-3370.8),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](5869.7,-3372.8),_0xe1c8a6[_0x2f7dc2(0x28f)](5840.8,-3401.6,0x16ba,-3422.2,0x16d2,-3397.5),_0xe1c8a6[_0x2f7dc2(0x28f)](0x16ea,-3372.8,5867.3,-3372.8,5869.7,-3372.8),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](5867.7,-3372.8),_0xe1c8a6[_0x2f7dc2(0x28f)](5838.8,-3401.6,0x16b8,-3422.2,0x16d0,-3397.5),_0xe1c8a6[_0x2f7dc2(0x28f)](0x16e8,-3372.8,5865.3,-3372.8,5867.7,-3372.8),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['restore'](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-201.9,-123.4),_0xe1c8a6[_0x2f7dc2(0x1d4)](-217.4,-135.2),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6['save'](),_0xe1c8a6[_0x2f7dc2(0x3cf)](0.005235,-0.076232,-0.18773,-0.057202,244.46,582.26),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](7327.3,2589.8),_0xe1c8a6[_0x2f7dc2(0x28f)](7298.4,0xa01,7275.6,2540.4,7299.6,2565.1),_0xe1c8a6['bezierCurveTo'](7323.6,2589.8,7324.9,2589.8,7327.3,2589.8),_0xe1c8a6['fill'](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](7329.3,2587.8),_0xe1c8a6[_0x2f7dc2(0x28f)](7300.4,0x9ff,7277.6,2538.4,7301.6,2563.1),_0xe1c8a6[_0x2f7dc2(0x28f)](7325.6,2587.8,7326.9,2587.8,7329.3,2587.8),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](7327.3,2587.8),_0xe1c8a6[_0x2f7dc2(0x28f)](7298.4,0x9ff,7275.6,2538.4,7299.6,2563.1),_0xe1c8a6[_0x2f7dc2(0x28f)](7323.6,2587.8,7324.9,2587.8,7327.3,2587.8),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)](),_0xe1c8a6[_0x2f7dc2(0x1aa)](),_0xe1c8a6[_0x2f7dc2(0x2fd)](),_0xe1c8a6[_0x2f7dc2(0x494)](-0xd7,-133.8),_0xe1c8a6[_0x2f7dc2(0x1d4)](-216.7,-129.6),_0xe1c8a6[_0x2f7dc2(0x5bc)](),_0xe1c8a6[_0x2f7dc2(0x296)]()),_0xe1c8a6[_0x2f7dc2(0x1aa)](),this[_0x2f7dc2(0x3a1)][_0x2f7dc2(0x4b1)]();},Bitmap['prototype'][_0x3cb96a(0x3dc)]=function(_0x17d227,_0x269af5,_0x3881e0){const _0x3b5171=_0x3cb96a,_0x21257c=this[_0x3b5171(0x3d7)];_0x21257c['save'](),_0x21257c[_0x3b5171(0x3e6)](_0x17d227-_0x3881e0,_0x269af5-_0x3881e0);const _0x401c17=0x168*(Math['PI']/0xb4),_0x587ab7=ColorManager[_0x3b5171(0x5e9)],_0x126a41=_0x587ab7[Math[_0x3b5171(0x2db)](Math[_0x3b5171(0x1fb)]()*_0x587ab7[_0x3b5171(0x59e)])];let _0x562fe8=ColorManager[_0x3b5171(0x29d)](_0x126a41,0.85);_0x562fe8=ColorManager['hexToRgba'](_0x562fe8,Math['random']()*0.4+0.2);let _0x3af672=ColorManager[_0x3b5171(0x29d)](_0x126a41,0.85);_0x3af672=ColorManager[_0x3b5171(0x5eb)](_0x3af672,Math[_0x3b5171(0x1fb)]()*0.2);const _0x1dc6b7=_0x21257c['createRadialGradient'](_0x3881e0,_0x3881e0,0xa,_0x3881e0,_0x3881e0,_0x3881e0);_0x1dc6b7['addColorStop'](0x0,_0x562fe8),_0x1dc6b7[_0x3b5171(0x537)](0x1,_0x3af672),_0x21257c[_0x3b5171(0x45a)]=_0x1dc6b7,_0x21257c['beginPath'](),_0x21257c['moveTo'](_0x3881e0,_0x3881e0),_0x21257c['lineTo'](length,_0x3881e0),_0x21257c[_0x3b5171(0x336)](_0x3881e0,_0x3881e0,_0x3881e0,0x0,_0x401c17),_0x21257c[_0x3b5171(0x1d4)](_0x3881e0,_0x3881e0),_0x21257c[_0x3b5171(0x5bc)](),_0x21257c[_0x3b5171(0x1aa)](),this[_0x3b5171(0x3a1)][_0x3b5171(0x4b1)]();},Bitmap['prototype']['drawRainbowLensFlare']=function(_0x52bf35,_0x251b57,_0x5d83f2){const _0x31c6a2=_0x3cb96a,_0x34cc00=this['context'];_0x34cc00[_0x31c6a2(0x1a5)](),_0x34cc00['translate'](_0x52bf35-_0x5d83f2,_0x251b57-_0x5d83f2);const _0x5cea7b=0x168*(Math['PI']/0xb4),_0x61f664=Math['randomInt'](0x80),_0x4f4cde=_0x31c6a2(0x3dd)[_0x31c6a2(0x5a3)](_0x61f664),_0x10b25f=_0x31c6a2(0x538)[_0x31c6a2(0x5a3)](_0x61f664),_0x59d3a2=_0x31c6a2(0x2e0)['format'](_0x61f664),_0x147ecf=_0x31c6a2(0x5c1)[_0x31c6a2(0x5a3)](_0x61f664),_0x29eeaf=_0x31c6a2(0x41e)['format'](_0x61f664),_0x3da0e1='rgba(255,255,%1,1)'['format'](_0x61f664),_0x19e604='rgba(255,%1,%1,1)'[_0x31c6a2(0x5a3)](_0x61f664),_0x456384=_0x31c6a2(0x429)['format'](_0x61f664),_0x41bd7a=_0x34cc00[_0x31c6a2(0x568)](_0x5d83f2,_0x5d83f2,0xa,_0x5d83f2,_0x5d83f2,_0x5d83f2);_0x41bd7a[_0x31c6a2(0x537)](0x0,_0x4f4cde),_0x41bd7a['addColorStop'](0.7,_0x4f4cde),_0x41bd7a['addColorStop'](0.8,_0x10b25f),_0x41bd7a[_0x31c6a2(0x537)](0.81,_0x59d3a2),_0x41bd7a['addColorStop'](0.82,_0x147ecf),_0x41bd7a[_0x31c6a2(0x537)](0.8225,_0x29eeaf),_0x41bd7a[_0x31c6a2(0x537)](0.8275,_0x3da0e1),_0x41bd7a[_0x31c6a2(0x537)](0.85,_0x19e604),_0x41bd7a[_0x31c6a2(0x537)](0.9,_0x456384),_0x41bd7a[_0x31c6a2(0x537)](0.95,_0x4f4cde),_0x41bd7a[_0x31c6a2(0x537)](0x1,_0x4f4cde),_0x34cc00['fillStyle']=_0x41bd7a,_0x34cc00['beginPath'](),_0x34cc00['moveTo'](_0x5d83f2,_0x5d83f2),_0x34cc00[_0x31c6a2(0x1d4)](length,_0x5d83f2),_0x34cc00[_0x31c6a2(0x336)](_0x5d83f2,_0x5d83f2,_0x5d83f2,0x0,_0x5cea7b),_0x34cc00[_0x31c6a2(0x1d4)](_0x5d83f2,_0x5d83f2),_0x34cc00['fill'](),_0x34cc00[_0x31c6a2(0x1aa)](),this[_0x31c6a2(0x3a1)][_0x31c6a2(0x4b1)]();},Bitmap[_0x3cb96a(0x356)]['drawBalloon']=function(_0xfb7c3e){const _0x8f1c5a=_0x3cb96a,_0x260332=this[_0x8f1c5a(0x3d7)];_0xfb7c3e=_0xfb7c3e||[_0x8f1c5a(0x22f),_0x8f1c5a(0x35f)],_0x260332[_0x8f1c5a(0x1a5)](),_0x260332['transform'](0x0,0.11738,-0.11738,0x0,99.6785,-39.5524),_0x260332['strokeStyle']=_0x8f1c5a(0x4b0),_0x260332[_0x8f1c5a(0x540)]=0xa;const _0x2b4d49=_0x260332[_0x8f1c5a(0x3c3)](0x0,this[_0x8f1c5a(0x27f)],this['width']*0x2,this[_0x8f1c5a(0x27f)]*0x14);_0x2b4d49[_0x8f1c5a(0x537)](0x0,_0xfb7c3e[0x0]),_0x2b4d49[_0x8f1c5a(0x537)](0x1,_0xfb7c3e[0x1]),_0x260332[_0x8f1c5a(0x45a)]=_0x2b4d49,(_0x260332[_0x8f1c5a(0x2fd)](),_0x260332[_0x8f1c5a(0x494)](489.1,324.8),_0x260332['bezierCurveTo'](492.6,324.4,516.9,356.8,515.5,360.1),_0x260332[_0x8f1c5a(0x28f)](514.1,363.4,473.9,368.2,471.8,365.3),_0x260332['bezierCurveTo'](469.7,362.5,485.6,325.2,489.1,324.8)),_0x260332[_0x8f1c5a(0x5bc)](),_0x260332[_0x8f1c5a(0x296)](),(_0x260332['beginPath'](),_0x260332[_0x8f1c5a(0x494)](622.6,156.7),_0x260332[_0x8f1c5a(0x28f)](622.6,230.8,556.4,341.5,488.3,341.5),_0x260332['bezierCurveTo'](418.2,341.5,0x162,230.8,0x162,156.7),_0x260332[_0x8f1c5a(0x28f)](0x162,82.6,414.2,14.3,488.3,14.3),_0x260332[_0x8f1c5a(0x28f)](562.4,14.3,622.6,82.6,622.6,156.7)),_0x260332['fill'](),_0x260332[_0x8f1c5a(0x296)](),_0x260332['lineWidth']=0x5,(_0x260332[_0x8f1c5a(0x2fd)](),_0x260332[_0x8f1c5a(0x494)](0x1de,0x156),_0x260332[_0x8f1c5a(0x28f)](486.5,340.3,492.4,338.5,503.5,341.1),_0x260332['bezierCurveTo'](482.2,561.7,393.8,609.5,366.7,789.6),_0x260332[_0x8f1c5a(0x28f)](366.2,792.9,368.2,806.3,371.3,831.2)),_0x260332['stroke'](),_0x260332['restore'](),this['paintOpacity']=0x80,this['drawCircle'](this[_0x8f1c5a(0x197)]*0x7/0x8,this[_0x8f1c5a(0x27f)]*0x1/0x4,0x4,'white');},Bitmap['prototype'][_0x3cb96a(0x341)]=function(_0x5f1ea2){const _0x563147=_0x3cb96a;_0x5f1ea2=_0x5f1ea2||'#ff0000';const _0x2151c8=this[_0x563147(0x197)]/0x2,_0x479286=this['height']/0x2,_0x4713f4=ColorManager[_0x563147(0x5eb)](_0x5f1ea2,0x0),_0x5849a8=ColorManager[_0x563147(0x5eb)](_0x5f1ea2,0.8),_0x5925d9=ColorManager[_0x563147(0x5eb)](_0x5f1ea2,0x1),_0xa2417a=this[_0x563147(0x197)]/0x2,_0x280301=0x4;this[_0x563147(0x408)](0x0,_0x479286-_0x280301,_0xa2417a,_0x280301*0x2,_0x4713f4,_0x5849a8),this['drawCircle'](_0x2151c8,_0x479286,_0x280301,_0x5925d9),this[_0x563147(0x1c8)](_0x2151c8,_0x479286,_0x280301-0x2,_0x563147(0x22c));},Bitmap[_0x3cb96a(0x356)][_0x3cb96a(0x302)]=function(_0x31382d){const _0xcfe7c8=_0x3cb96a,_0x24db03=this[_0xcfe7c8(0x30c)];_0x31382d=_0x31382d||_0xcfe7c8(0x22f);const _0x493169=this[_0xcfe7c8(0x197)]/0x2,_0x4dc474=this[_0xcfe7c8(0x27f)]/0x2,_0x8ca16b=ColorManager[_0xcfe7c8(0x5eb)](_0x31382d,0x0),_0x4bef47=ColorManager[_0xcfe7c8(0x5eb)](_0x31382d,0.25),_0x257a06=ColorManager[_0xcfe7c8(0x5eb)](_0x31382d,0x1),_0x2ff97c=this[_0xcfe7c8(0x197)]/0x2,_0x11f7d3=0x4,_0xda5a2=Math[_0xcfe7c8(0x5e6)](0x3)+0xa;_0x24db03[_0xcfe7c8(0x3e6)](_0x493169,_0x4dc474);const _0x1f3bde=Math[_0xcfe7c8(0x5e6)](0x3)+0x4;for(let _0x5ee378=0x0;_0x5ee378<_0x1f3bde;_0x5ee378++){const _0x51c224=_0x2ff97c*((_0x1f3bde-_0x5ee378)/_0x1f3bde);let _0xe58d3d=Math[_0xcfe7c8(0x5e6)](0xa)+0x28;_0xe58d3d/=_0x5ee378+0x1;for(let _0x3104ef=0x0;_0x3104ef<_0xe58d3d;_0x3104ef++){let _0x215204=Math[_0xcfe7c8(0x5e6)](Math[_0xcfe7c8(0x217)](_0x51c224/_0xda5a2))+_0x51c224*(_0xda5a2-0x1)/_0xda5a2;const _0x18c512=Math[_0xcfe7c8(0x5e6)](_0x215204/0x2);this[_0xcfe7c8(0x408)](_0x18c512,-_0x11f7d3,_0x215204-_0x18c512,_0x11f7d3*0x2,_0x8ca16b,_0x4bef47),this[_0xcfe7c8(0x1c8)](_0x215204,0x0,_0x11f7d3,_0x257a06),this[_0xcfe7c8(0x1c8)](_0x215204,0x0,_0x11f7d3-(Math['randomInt'](0x2)-0x1),_0xcfe7c8(0x22c)),_0x24db03[_0xcfe7c8(0x34f)](Math['PI']*0x2/_0xe58d3d);}}},Bitmap[_0x3cb96a(0x356)][_0x3cb96a(0x19f)]=function(_0x2498be,_0x204b83,_0x25e279){const _0x4526d6=_0x3cb96a,_0x3e1efe=this['context'];_0x3e1efe[_0x4526d6(0x1a5)](),_0x3e1efe['translate'](_0x2498be-_0x25e279,_0x204b83-_0x25e279);const _0x3aadee=0x168*(Math['PI']/0xb4),_0x1013da=Math[_0x4526d6(0x5e6)](0x80),_0x966f4e=_0x4526d6(0x3dd)[_0x4526d6(0x5a3)](_0x1013da),_0x5a0706=_0x4526d6(0x538)['format'](_0x1013da),_0x309633=_0x4526d6(0x2e0)[_0x4526d6(0x5a3)](_0x1013da),_0xc49852=_0x4526d6(0x5c1)[_0x4526d6(0x5a3)](_0x1013da),_0x19f7cd=_0x4526d6(0x41e)['format'](_0x1013da),_0x14ff80=_0x4526d6(0x343)[_0x4526d6(0x5a3)](_0x1013da),_0x1fbaef='rgba(255,%1,%1,1)'[_0x4526d6(0x5a3)](_0x1013da),_0x55974b=_0x4526d6(0x429)[_0x4526d6(0x5a3)](_0x1013da),_0x849d76=_0x3e1efe[_0x4526d6(0x568)](_0x25e279,_0x25e279,0xa,_0x25e279,_0x25e279,_0x25e279);_0x849d76['addColorStop'](0x0,_0x966f4e),_0x849d76[_0x4526d6(0x537)](0.15,_0x966f4e),_0x849d76[_0x4526d6(0x537)](0.25,_0x5a0706),_0x849d76[_0x4526d6(0x537)](0.3,_0x5a0706),_0x849d76['addColorStop'](0.4,_0x309633),_0x849d76[_0x4526d6(0x537)](0.45,_0xc49852),_0x849d76[_0x4526d6(0x537)](0.5,_0xc49852),_0x849d76[_0x4526d6(0x537)](0.55,_0x19f7cd),_0x849d76[_0x4526d6(0x537)](0.6,_0x14ff80),_0x849d76['addColorStop'](0.65,_0x14ff80),_0x849d76[_0x4526d6(0x537)](0.75,_0x1fbaef),_0x849d76[_0x4526d6(0x537)](0.85,_0x55974b),_0x849d76[_0x4526d6(0x537)](0.95,_0x966f4e),_0x849d76[_0x4526d6(0x537)](0x1,_0x966f4e),_0x3e1efe[_0x4526d6(0x45a)]=_0x849d76,_0x3e1efe['beginPath'](),_0x3e1efe[_0x4526d6(0x494)](_0x25e279,_0x25e279),_0x3e1efe[_0x4526d6(0x1d4)](length,_0x25e279),_0x3e1efe[_0x4526d6(0x336)](_0x25e279,_0x25e279,_0x25e279,0x0,_0x3aadee),_0x3e1efe['lineTo'](_0x25e279,_0x25e279),_0x3e1efe[_0x4526d6(0x5bc)](),_0x3e1efe['restore'](),this[_0x4526d6(0x3a1)]['update']();},TextManager[_0x3cb96a(0x3d9)]=VisuMZ[_0x3cb96a(0x5b2)]['Settings'][_0x3cb96a(0x58f)][_0x3cb96a(0x1fc)],ColorManager[_0x3cb96a(0x238)]=[_0x3cb96a(0x472),_0x3cb96a(0x445),_0x3cb96a(0x247),'#444444'],ColorManager['WEATHER_AUTUMN_COLORS']=[_0x3cb96a(0x461),_0x3cb96a(0x461),_0x3cb96a(0x478),_0x3cb96a(0x551),_0x3cb96a(0x440),'#e6654c',_0x3cb96a(0x55d),_0x3cb96a(0x55d),_0x3cb96a(0x224)],ColorManager[_0x3cb96a(0x520)]=['#a1a1a1',_0x3cb96a(0x3f0),'#898989',_0x3cb96a(0x58a)],ColorManager['WEATHER_CLOUD_BLUE_COLORS']=['#cceaf6',_0x3cb96a(0x5e3),_0x3cb96a(0x2df),_0x3cb96a(0x416)],ColorManager[_0x3cb96a(0x5aa)]=[_0x3cb96a(0x581),_0x3cb96a(0x545),_0x3cb96a(0x446)],ColorManager['WEATHER_DANDELION1_COLORS']=[_0x3cb96a(0x38a),_0x3cb96a(0x254),'#d2c8c5',_0x3cb96a(0x5bd)],ColorManager['WEATHER_DANDELION2_COLORS']=[_0x3cb96a(0x53f),_0x3cb96a(0x289),'#d58e6a'],ColorManager[_0x3cb96a(0x207)]=['#ffffff',_0x3cb96a(0x545),_0x3cb96a(0x446),_0x3cb96a(0x1ec),_0x3cb96a(0x417)],ColorManager['WEATHER_DARKNESS_COLORS']=[_0x3cb96a(0x4b0),_0x3cb96a(0x4f8),_0x3cb96a(0x4db),_0x3cb96a(0x4af)],ColorManager[_0x3cb96a(0x43d)]=[_0x3cb96a(0x56b),_0x3cb96a(0x4f4),_0x3cb96a(0x4d3),_0x3cb96a(0x4cf),_0x3cb96a(0x452)],ColorManager[_0x3cb96a(0x592)]=[_0x3cb96a(0x1dc),_0x3cb96a(0x5cf),_0x3cb96a(0x1bc),_0x3cb96a(0x4c4),_0x3cb96a(0x4c5)],ColorManager['WEATHER_FLAME_COLORS']=['#ed1c24',_0x3cb96a(0x3b7),_0x3cb96a(0x1e1),_0x3cb96a(0x4c4),_0x3cb96a(0x555),_0x3cb96a(0x3f4)],ColorManager[_0x3cb96a(0x50d)]=[_0x3cb96a(0x1c5),_0x3cb96a(0x532),_0x3cb96a(0x31c),_0x3cb96a(0x578),_0x3cb96a(0x291),_0x3cb96a(0x1db)],ColorManager['WEATHER_LIGHT_COLORS']=[_0x3cb96a(0x581),_0x3cb96a(0x40b),'#bbffff','#ffbbff'],ColorManager[_0x3cb96a(0x19c)]=[_0x3cb96a(0x3e7),_0x3cb96a(0x379),'#ddddff'],ColorManager[_0x3cb96a(0x382)]=['#7accc8',_0x3cb96a(0x566),_0x3cb96a(0x230),'#8393ca'],ColorManager[_0x3cb96a(0x1f2)]=[_0x3cb96a(0x273),_0x3cb96a(0x273),'#8dc63f',_0x3cb96a(0x1d2),_0x3cb96a(0x2ec),_0x3cb96a(0x348)],ColorManager[_0x3cb96a(0x5e9)]=[_0x3cb96a(0x35e),'#ffccaa','#ffffaa',_0x3cb96a(0x3d4),_0x3cb96a(0x450),_0x3cb96a(0x41c),_0x3cb96a(0x325),_0x3cb96a(0x490),'#aaaaff','#ccaaff',_0x3cb96a(0x333),'#ffaacc',_0x3cb96a(0x581)],ColorManager[_0x3cb96a(0x40f)]=['#fdc689','#fff799','#c4df9b','#998675','#efcba2',_0x3cb96a(0x5e8),_0x3cb96a(0x5cf),_0x3cb96a(0x5cf),'#fff568',_0x3cb96a(0x552),'#fff200',_0x3cb96a(0x552)],ColorManager[_0x3cb96a(0x55a)]=['#ffffff',_0x3cb96a(0x22f),_0x3cb96a(0x5a1),_0x3cb96a(0x49c),_0x3cb96a(0x4a2),_0x3cb96a(0x5a4),_0x3cb96a(0x58d),_0x3cb96a(0x3d1),_0x3cb96a(0x22f),_0x3cb96a(0x49c),_0x3cb96a(0x4a2)],ColorManager['WEATHER_NUCLEAR_COLORS']=[_0x3cb96a(0x49c),_0x3cb96a(0x32f),_0x3cb96a(0x4ad),_0x3cb96a(0x5dc),'#13ffee'],ColorManager[_0x3cb96a(0x328)]=[_0x3cb96a(0x38e),_0x3cb96a(0x367),_0x3cb96a(0x393),_0x3cb96a(0x1fa),_0x3cb96a(0x3d0)],ColorManager['WEATHER_SAKURA2_COLORS']=[_0x3cb96a(0x2fa),_0x3cb96a(0x47b),'#fdedd9'],ColorManager[_0x3cb96a(0x5a2)]=['#d28fad','#b87693',_0x3cb96a(0x2a7)],ColorManager[_0x3cb96a(0x462)]=['#ffffff','#fcfade',_0x3cb96a(0x558),_0x3cb96a(0x4ae)],ColorManager[_0x3cb96a(0x19b)]=['#a700ff',_0x3cb96a(0x2c2),_0x3cb96a(0x5c6),_0x3cb96a(0x277)],ColorManager[_0x3cb96a(0x3a4)]=ColorManager[_0x3cb96a(0x50d)]['clone'](),ColorManager[_0x3cb96a(0x2f2)]=ColorManager[_0x3cb96a(0x2e3)][_0x3cb96a(0x44e)](),ColorManager[_0x3cb96a(0x428)]=ColorManager['WEATHER_PASTEL_COLORS'][_0x3cb96a(0x4b2)](ColorManager[_0x3cb96a(0x55a)]),ColorManager[_0x3cb96a(0x485)]=ColorManager[_0x3cb96a(0x5e9)][_0x3cb96a(0x44e)](),ColorManager[_0x3cb96a(0x23b)]=ColorManager['WEATHER_NATURE_GREEN_COLORS'][_0x3cb96a(0x44e)](),ColorManager[_0x3cb96a(0x404)]=ColorManager['WEATHER_NATURE_GREEN_COLORS'][_0x3cb96a(0x44e)](),ColorManager[_0x3cb96a(0x412)]=ColorManager[_0x3cb96a(0x382)][_0x3cb96a(0x44e)](),ColorManager[_0x3cb96a(0x253)]=ColorManager['WEATHER_PASTEL_COLORS'][_0x3cb96a(0x44e)](),ColorManager['WEATHER_PRISMBEAM_COLORS']=ColorManager[_0x3cb96a(0x55a)][_0x3cb96a(0x44e)](),ColorManager['WEATHER_RAINBOW_CLOUD_COLORS']=ColorManager['WEATHER_PASTEL_COLORS']['clone'](),ColorManager['WEATHER_RAINBOW_ORB_COLORS']=ColorManager[_0x3cb96a(0x55a)][_0x3cb96a(0x44e)](),ColorManager[_0x3cb96a(0x4ab)]=ColorManager[_0x3cb96a(0x5e9)]['clone'](),ColorManager[_0x3cb96a(0x23a)]=ColorManager['WEATHER_NUCLEAR_COLORS'][_0x3cb96a(0x44e)](),ColorManager['WEATHER_SHADOW_BURST_COLORS']=ColorManager['WEATHER_DARKNESS_COLORS'][_0x3cb96a(0x44e)](),ColorManager[_0x3cb96a(0x602)]=ColorManager['WEATHER_PASTEL_COLORS']['clone'](),ColorManager[_0x3cb96a(0x3df)]=ColorManager[_0x3cb96a(0x462)]['clone'](),ColorManager[_0x3cb96a(0x456)]=ColorManager['WEATHER_ULTRAVIOLET_COLORS'][_0x3cb96a(0x44e)](),ColorManager['hexToRgba']=function(_0x2491da,_0x905418){const _0x471b8a=_0x3cb96a;let _0x25dfcb='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x471b8a(0x564)](_0x2491da)){if(_0x471b8a(0x37e)!==_0x471b8a(0x21a)){_0x25dfcb=_0x2491da[_0x471b8a(0x4a3)](0x1)[_0x471b8a(0x5d0)]('');_0x25dfcb['length']===0x3&&(_0x25dfcb=[_0x25dfcb[0x0],_0x25dfcb[0x0],_0x25dfcb[0x1],_0x25dfcb[0x1],_0x25dfcb[0x2],_0x25dfcb[0x2]]);while(_0x25dfcb[_0x471b8a(0x59e)]>0x6)_0x25dfcb[_0x471b8a(0x529)]();return _0x25dfcb='0x'+_0x25dfcb[_0x471b8a(0x45c)](''),_0x471b8a(0x1a3)+[(_0x25dfcb>>0x10&0xff)[_0x471b8a(0x482)](0x0,0xff),(_0x25dfcb>>0x8&0xff)[_0x471b8a(0x482)](0x0,0xff),(_0x25dfcb&0xff)[_0x471b8a(0x482)](0x0,0xff)][_0x471b8a(0x45c)](',')+','+_0x905418['clamp'](0x0,0x1)+')';}else{if(_0x2d6aa3[_0x471b8a(0x320)][_0x471b8a(0x5ca)]==='event'&&_0x2f66f7[_0x471b8a(0x320)][_0x471b8a(0x40a)]<=0x0){const _0x35c4aa=_0x58f520[_0x471b8a(0x52d)]();_0x4ae404[_0x471b8a(0x320)][_0x471b8a(0x40a)]=_0x35c4aa[_0x471b8a(0x526)]();}}}else return _0x471b8a(0x508);},ColorManager['hexToArray']=function(_0x55d358){const _0x117615=_0x3cb96a;let _0x5ac515='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x117615(0x564)](_0x55d358)){_0x5ac515=_0x55d358[_0x117615(0x4a3)](0x1)[_0x117615(0x5d0)]('');_0x5ac515[_0x117615(0x59e)]===0x3&&(_0x5ac515=[_0x5ac515[0x0],_0x5ac515[0x0],_0x5ac515[0x1],_0x5ac515[0x1],_0x5ac515[0x2],_0x5ac515[0x2]]);while(_0x5ac515['length']>0x6)_0x5ac515[_0x117615(0x529)]();return _0x5ac515='0x'+_0x5ac515[_0x117615(0x45c)](''),[(_0x5ac515>>0x10&0xff)[_0x117615(0x482)](0x0,0xff),(_0x5ac515>>0x8&0xff)[_0x117615(0x482)](0x0,0xff),(_0x5ac515&0xff)['clamp'](0x0,0xff)];}else{if('XyDeG'===_0x117615(0x44a))return[0x0,0x0,0x0];else{if(this['_cached_WeatherEffects_None'])return this[_0x117615(0x55b)];const _0x649092=new _0x5592a7(0x1,0x1);_0x649092[_0x117615(0x275)]=![];if(_0x157da6[_0x117615(0x36f)])_0x3af89e[_0x117615(0x582)](_0x117615(0x427));return this[_0x117615(0x55b)]=_0x649092,this[_0x117615(0x55b)];}}},ColorManager['arrayToHex']=function(_0x295932){const _0x59d7ae=_0x3cb96a;while(_0x295932['length']<0x3)_0x295932[_0x59d7ae(0x2fb)](0x0);while(_0x295932[_0x59d7ae(0x59e)]>0x3)_0x295932['pop']();return'#'+_0x295932[_0x59d7ae(0x50b)](_0x1b1326=>_0x1b1326[_0x59d7ae(0x482)](0x0,0xff)['toString'](0x10)[_0x59d7ae(0x229)](0x2))[_0x59d7ae(0x45c)]('');},ColorManager[_0x3cb96a(0x29d)]=function(_0x5378e7,_0x13cc06){const _0x3967c3=_0x3cb96a,_0x46c549=this[_0x3967c3(0x399)](_0x5378e7)['map'](_0x21415b=>Math[_0x3967c3(0x30e)]((Number(_0x21415b)||0x0)*_0x13cc06)[_0x3967c3(0x482)](0x0,0xff));return this[_0x3967c3(0x2b3)](_0x46c549);},SceneManager[_0x3cb96a(0x49b)]=function(){const _0x45d3ad=_0x3cb96a;return this['_scene']&&this[_0x45d3ad(0x4ce)]['constructor']===Scene_Battle;},SceneManager[_0x3cb96a(0x293)]=function(){const _0x43c873=_0x3cb96a;return this[_0x43c873(0x4ce)]&&this[_0x43c873(0x4ce)]instanceof Scene_Map;},VisuMZ['WeatherEffects'][_0x3cb96a(0x3cb)]=Game_Screen[_0x3cb96a(0x356)][_0x3cb96a(0x5ff)],Game_Screen[_0x3cb96a(0x356)][_0x3cb96a(0x5ff)]=function(){const _0xb5295a=_0x3cb96a;VisuMZ[_0xb5295a(0x5b2)][_0xb5295a(0x3cb)]['call'](this),this[_0xb5295a(0x1f0)]();},Game_Screen['prototype'][_0x3cb96a(0x4fe)]=function(){const _0x4ca311=_0x3cb96a;if($gameMap&&$gameMap[_0x4ca311(0x1f5)]())return'none';return this[_0x4ca311(0x20a)](0x1)[_0x4ca311(0x5ca)]||_0x4ca311(0x427);},Game_Screen[_0x3cb96a(0x356)]['weatherPower']=function(){const _0x575b91=_0x3cb96a;if($gameMap&&$gameMap[_0x575b91(0x1f5)]())return 0x0;return this[_0x575b91(0x20a)](0x1)[_0x575b91(0x23c)]||0x0;},Game_Screen[_0x3cb96a(0x356)][_0x3cb96a(0x51f)]=function(_0xba495,_0x1260c0,_0x216daa){const _0x4e6ffb=_0x3cb96a,_0x4d27b3=this[_0x4e6ffb(0x20a)](0x1,![])[_0x4e6ffb(0x23c)],_0x5c0668=VisuMZ[_0x4e6ffb(0x5b2)][_0x4e6ffb(0x59c)]();if(!_0x5c0668)return;_0x5c0668[_0x4e6ffb(0x5ca)]=_0xba495,_0x5c0668['power']=_0x4d27b3,_0x5c0668[_0x4e6ffb(0x315)]=_0xba495===_0x4e6ffb(0x427)?0x0:_0x1260c0[_0x4e6ffb(0x482)](0x1,0x9),_0x5c0668[_0x4e6ffb(0x33b)]=_0x216daa,_0x216daa<=0x0&&(_0x5c0668[_0x4e6ffb(0x23c)]=_0x5c0668[_0x4e6ffb(0x315)]),VisuMZ[_0x4e6ffb(0x5b2)][_0x4e6ffb(0x215)](_0x5c0668),this['setWeatherLayerData'](0x1,![],_0x5c0668);},Game_Screen[_0x3cb96a(0x356)][_0x3cb96a(0x282)]=function(){const _0x5e4133=_0x3cb96a;if(this[_0x5e4133(0x3fd)]===undefined)this[_0x5e4133(0x1f0)]();for(let _0x65a234=0x1;_0x65a234<=Weather['MAX_LAYERS'];_0x65a234++){this[_0x5e4133(0x3db)](_0x65a234,!![]),this[_0x5e4133(0x3db)](_0x65a234,![]);}},Game_Screen[_0x3cb96a(0x356)][_0x3cb96a(0x1f0)]=function(){const _0xa8685f=_0x3cb96a;this['_weatherLayers']={'lower':[],'upper':[]};while(this['_weatherLayers'][_0xa8685f(0x474)][_0xa8685f(0x59e)]<Weather[_0xa8685f(0x23f)]){if(_0xa8685f(0x2cd)===_0xa8685f(0x283)){const _0x403ea8=0x6,_0x1f74d3=this['context'],_0x42528b=this[_0xa8685f(0x197)]/0x2,_0x23724d=this[_0xa8685f(0x27f)]/0x2;this[_0xa8685f(0x3ff)]=0x3,this[_0xa8685f(0x575)]=0x2+_0x5ac2ad[_0xa8685f(0x5e6)](0x2),this['_flakeRadius']=_0x546963[_0xa8685f(0x547)](_0x42528b,_0x23724d)*0x2/0x3,this[_0xa8685f(0x4f7)]=_0x512166['PI']*0x2*(_0x573adc['random']()*0.15+0.7),this['_strokeWidth']=_0x9e4b63['max'](_0x5a6496['ceil'](this[_0xa8685f(0x197)]/0xc),0x2),_0x1f74d3['translate'](_0x42528b,_0x23724d);for(let _0x42bbc7=0x0;_0x42bbc7<_0x403ea8;_0x42bbc7++){this[_0xa8685f(0x2da)](0x0),_0x1f74d3['rotate'](_0x3dd267['PI']*0x2/_0x403ea8);}}else this[_0xa8685f(0x3fd)]['lower'][_0xa8685f(0x2fb)](VisuMZ['WeatherEffects'][_0xa8685f(0x59c)]());}while(this[_0xa8685f(0x3fd)]['upper'][_0xa8685f(0x59e)]<Weather[_0xa8685f(0x23f)]){this[_0xa8685f(0x3fd)][_0xa8685f(0x3c8)][_0xa8685f(0x2fb)](VisuMZ[_0xa8685f(0x5b2)][_0xa8685f(0x59c)]());}},Game_Screen[_0x3cb96a(0x356)]['clearWeatherLayerData']=function(_0x35eb09,_0x4afc5a,_0x3327c7){const _0x20f734=_0x3cb96a;if(this[_0x20f734(0x3fd)]===undefined)this['clearWeatherLayers']();const _0x53d1a7=this[_0x20f734(0x20a)](_0x35eb09,_0x4afc5a),_0x3022c6=_0x35eb09['clamp'](0x1,Weather[_0x20f734(0x23f)])-0x1,_0x4f1465=_0x4afc5a?_0x20f734(0x474):_0x20f734(0x3c8);_0x3327c7=_0x3327c7||0x0;const _0x44b62a=_0x53d1a7[_0x20f734(0x23c)],_0x421bd6=VisuMZ[_0x20f734(0x5b2)][_0x20f734(0x59c)]();_0x421bd6['power']=_0x44b62a,_0x421bd6[_0x20f734(0x33b)]=_0x3327c7,this[_0x20f734(0x3fd)][_0x4f1465][_0x3022c6]=_0x421bd6;},Game_Screen['prototype']['adjustWeatherLayerPower']=function(_0x232926,_0x2bb0ff,_0x518f02,_0x28ad5c){const _0x17a47c=_0x3cb96a,_0x30477e=this[_0x17a47c(0x20a)](_0x232926,_0x2bb0ff);_0x30477e['duration']=_0x28ad5c||0x1,_0x30477e[_0x17a47c(0x315)]=(_0x30477e[_0x17a47c(0x315)]+_0x518f02)[_0x17a47c(0x482)](0x1,0x9);},Game_Screen['prototype']['memorizeWeatherLayerData']=function(_0x5cd3a4,_0x2582a3){const _0x53bb9c=_0x3cb96a,_0x9402e8=this[_0x53bb9c(0x20a)](_0x5cd3a4,_0x2582a3),_0x4dd8b6=_0x2582a3?_0x53bb9c(0x474):_0x53bb9c(0x3c8);this[_0x53bb9c(0x59a)]=this[_0x53bb9c(0x59a)]||{'lower':[],'upper':[]},this['_memorizedWeatherData'][_0x4dd8b6][_0x5cd3a4]=JSON['parse'](JSON[_0x53bb9c(0x312)](_0x9402e8));},Game_Screen[_0x3cb96a(0x356)][_0x3cb96a(0x5fc)]=function(_0x55f2cd,_0x59cf17,_0x28a370){const _0x54728b=_0x3cb96a,_0x41b9bd=_0x59cf17?_0x54728b(0x474):_0x54728b(0x3c8);this[_0x54728b(0x59a)]=this[_0x54728b(0x59a)]||{'lower':[],'upper':[]};const _0x50beca=this[_0x54728b(0x59a)][_0x41b9bd][_0x55f2cd]||VisuMZ['WeatherEffects']['newLayer']();_0x50beca['duration']=_0x28a370,_0x50beca[_0x54728b(0x315)]=_0x50beca['power'],_0x50beca[_0x54728b(0x23c)]=this['getWeatherLayerData'](_0x55f2cd,_0x59cf17)[_0x54728b(0x23c)],this[_0x54728b(0x431)](_0x55f2cd,_0x59cf17,_0x50beca);},Game_Screen[_0x3cb96a(0x356)][_0x3cb96a(0x20a)]=function(_0x209b6b,_0x2f4bfa){const _0x478182=_0x3cb96a;if(this[_0x478182(0x3fd)]===undefined)this[_0x478182(0x1f0)]();const _0x308a58=_0x209b6b[_0x478182(0x482)](0x1,Weather['MAX_LAYERS'])-0x1,_0x356ba9=_0x2f4bfa?_0x478182(0x474):_0x478182(0x3c8);return!this[_0x478182(0x3fd)][_0x356ba9][_0x308a58]&&(this[_0x478182(0x3fd)][_0x356ba9][_0x308a58]=VisuMZ[_0x478182(0x5b2)][_0x478182(0x59c)]()),this[_0x478182(0x3fd)][_0x356ba9][_0x308a58];},Game_Screen[_0x3cb96a(0x356)][_0x3cb96a(0x431)]=function(_0x509e5b,_0x1c48b9,_0x3fcf9c){const _0xd76cb5=_0x3cb96a;if(this[_0xd76cb5(0x3fd)]===undefined)this['clearWeatherLayers']();const _0x1d71ed=_0x509e5b[_0xd76cb5(0x482)](0x1,Weather['MAX_LAYERS'])-0x1,_0x38209c=_0x1c48b9?_0xd76cb5(0x474):_0xd76cb5(0x3c8);this[_0xd76cb5(0x3fd)][_0x38209c][_0x1d71ed]=JSON[_0xd76cb5(0x259)](JSON['stringify'](_0x3fcf9c));},Game_Screen['prototype'][_0x3cb96a(0x4a1)]=function(_0x170140,_0x378d2f,_0x9460ed){const _0x22ab01=_0x3cb96a;if(this['_weatherLayers']===undefined)this[_0x22ab01(0x1f0)]();const _0x22b97f=this[_0x22ab01(0x20a)](_0x170140,_0x378d2f),_0x5918be=_0x170140[_0x22ab01(0x482)](0x1,Weather[_0x22ab01(0x23f)])-0x1,_0x1a20ab=_0x378d2f?_0x22ab01(0x474):_0x22ab01(0x3c8);_0x9460ed[_0x22ab01(0x23c)]=_0x22b97f[_0x22ab01(0x23c)],this[_0x22ab01(0x3fd)][_0x1a20ab][_0x5918be]=_0x9460ed;},Game_Screen[_0x3cb96a(0x356)][_0x3cb96a(0x3db)]=function(_0x4f9c9f,_0x377474){const _0x4cd937=_0x3cb96a,_0x1ce18b=this[_0x4cd937(0x20a)](_0x4f9c9f,_0x377474);if(!_0x1ce18b)return;_0x1ce18b[_0x4cd937(0x33b)]>0x0&&(this[_0x4cd937(0x3e3)](_0x1ce18b),this[_0x4cd937(0x324)](_0x1ce18b));},Game_Screen[_0x3cb96a(0x356)][_0x3cb96a(0x3e3)]=function(_0x55c103){const _0x115df3=_0x3cb96a,_0x3ab8d1=_0x55c103[_0x115df3(0x33b)],_0x561483=_0x55c103['powerTarget'];_0x55c103['power']=(_0x55c103[_0x115df3(0x23c)]*(_0x3ab8d1-0x1)+_0x561483)/_0x3ab8d1;},Game_Screen[_0x3cb96a(0x356)][_0x3cb96a(0x324)]=function(_0x381f10){const _0x4302e0=_0x3cb96a;_0x381f10[_0x4302e0(0x33b)]--,_0x381f10[_0x4302e0(0x33b)]===0x0&&_0x381f10['powerTarget']===0x0&&(_0x381f10['type']=_0x4302e0(0x427));},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x2b7)]=Game_Map[_0x3cb96a(0x356)][_0x3cb96a(0x1ab)],Game_Map[_0x3cb96a(0x356)][_0x3cb96a(0x1ab)]=function(_0x5f3581){const _0x4a5076=_0x3cb96a;VisuMZ[_0x4a5076(0x5b2)]['Game_Map_setup']['call'](this,_0x5f3581),this[_0x4a5076(0x394)]();},Game_Map[_0x3cb96a(0x356)]['setupWeatherEffectNotetags']=function(){const _0x723aef=_0x3cb96a;if(!$dataMap)return;if(!SceneManager['isSceneMap']())return;this['_noWeather']=![];const _0x176889=VisuMZ[_0x723aef(0x5b2)][_0x723aef(0x415)],_0x13c915=$dataMap[_0x723aef(0x590)]||'';_0x13c915[_0x723aef(0x1a9)](_0x176889['NoWeather'])&&('kjjax'==='kjjax'?this[_0x723aef(0x38c)]=!![]:(_0x9a9486[_0x723aef(0x50a)](_0x5b6e81,_0x376bf7),_0x2c0241[_0x723aef(0x5ca)]='meteorshower',_0x3da7c9[_0x723aef(0x5b2)][_0x723aef(0x29c)](_0x462e80)));},Game_Map[_0x3cb96a(0x356)]['isNoWeather']=function(){const _0x56af2f=_0x3cb96a;if(this[_0x56af2f(0x38c)]===undefined)this[_0x56af2f(0x394)]();return this[_0x56af2f(0x38c)];},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x1d6)]=Scene_Options['prototype'][_0x3cb96a(0x270)],Scene_Options[_0x3cb96a(0x356)][_0x3cb96a(0x270)]=function(){const _0x3d51d0=_0x3cb96a;let _0xb19d96=VisuMZ[_0x3d51d0(0x5b2)][_0x3d51d0(0x1d6)]['call'](this);const _0x3932f1=VisuMZ[_0x3d51d0(0x5b2)]['Settings'][_0x3d51d0(0x58f)];if(_0x3932f1[_0x3d51d0(0x460)]&&_0x3932f1[_0x3d51d0(0x1dd)])_0xb19d96++;return _0xb19d96;};function Sprite_WeatherParticle(){this['initialize'](...arguments);}Sprite_WeatherParticle[_0x3cb96a(0x356)]=Object[_0x3cb96a(0x4d2)](Sprite['prototype']),Sprite_WeatherParticle['prototype'][_0x3cb96a(0x3be)]=Sprite_WeatherParticle,Sprite_WeatherParticle['prototype'][_0x3cb96a(0x5ef)]=function(_0x3ca6a9,_0x529da8){const _0x32140a=_0x3cb96a;this[_0x32140a(0x50c)]=_0x3ca6a9,this[_0x32140a(0x483)]=_0x529da8,Sprite[_0x32140a(0x356)]['initialize'][_0x32140a(0x3b3)](this,this[_0x32140a(0x50c)][_0x32140a(0x29a)]),this[_0x32140a(0x20b)](),this[_0x32140a(0x1df)]();},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x20b)]=function(){const _0x28da69=_0x3cb96a;this[_0x28da69(0x1bf)]=0x0,this[_0x28da69(0x502)]['x']=0.5,this[_0x28da69(0x502)]['y']=0.5,this[_0x28da69(0x4bf)]=0x0;},Sprite_WeatherParticle[_0x3cb96a(0x356)]['data']=function(){return this['_weatherParent']['data']();},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x46f)]=function(){const _0x150667=_0x3cb96a;if(!this[_0x150667(0x232)])return-0x1;return this[_0x150667(0x232)][_0x150667(0x5c5)]['indexOf'](this);},Sprite_WeatherParticle[_0x3cb96a(0x356)]['rebornSprite']=function(){const _0x2447e=_0x3cb96a;this[_0x2447e(0x4b7)](),this[_0x2447e(0x421)](),this[_0x2447e(0x563)]();},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x4b7)]=function(){const _0x114617=_0x3cb96a;this['type']=this[_0x114617(0x52c)]()[_0x114617(0x5ca)];if(this[_0x114617(0x5ca)]===_0x114617(0x427))return;this[_0x114617(0x2ea)](),this['rebornFlags'](),this[_0x114617(0x47d)](),this['rebornSpawnLocation'](),this['rebornInitialOpacity'](),this[_0x114617(0x484)]();},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x2ea)]=function(){const _0x19d179=_0x3cb96a;this[_0x19d179(0x451)]=this['data']()['sprite'][_0x19d179(0x33c)];const _0x2766ae=this[_0x19d179(0x52c)]()[_0x19d179(0x42f)][_0x19d179(0x576)],_0x2337c8=VisuMZ[_0x19d179(0x5b2)]['MakeVariance'](_0x2766ae);this[_0x19d179(0x451)]=Math[_0x19d179(0x2d0)](0x1,Math['ceil'](this[_0x19d179(0x451)]+_0x2337c8)),this[_0x19d179(0x1e8)]=this['_lifespan'];if(this['_lastType']!==this[_0x19d179(0x5ca)]){if(_0x19d179(0x439)===_0x19d179(0x25e)){const _0x478de1=_0x334823[_0x19d179(0x4ce)]['_spriteset'];if(_0x478de1){const _0x5d2401=_0x478de1['findTargetSprite'](_0xc87593);if(_0x5d2401){const _0x33a646=new _0x2be110(_0x5d2401['x'],_0x5d2401['y']),_0x30dd82=_0x5d2401[_0x19d179(0x3da)][_0x19d179(0x4e2)](_0x33a646);this['ax']=_0x5d2401['x']-_0x30dd82['x']+this[_0x19d179(0x334)],this['ay']=_0x5d2401['y']-_0x30dd82['y']+this['_lockedOffsetY'];return;}}}else this[_0x19d179(0x4a8)]=this[_0x19d179(0x5ca)],this[_0x19d179(0x451)]=Math[_0x19d179(0x5e6)](this[_0x19d179(0x451)])+0x1;}},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x1e5)]=function(){const _0x228b91=_0x3cb96a;this[_0x228b91(0x1e0)]=JSON['parse'](JSON[_0x228b91(0x312)](this['data']()['flags'])),this[_0x228b91(0x55e)]=Math[_0x228b91(0x5e6)](0xf4240),this[_0x228b91(0x1cf)]=Math[_0x228b91(0x5e6)](0xf4240),this['_flatFlutterRngY']=Math[_0x228b91(0x5e6)](0xf4240),this['_flatFlutterSpeedX']=Math[_0x228b91(0x1fb)]()*0.05+0.005,this['_flatFlutterSpeedY']=Math[_0x228b91(0x1fb)]()*0.05+0.005,this['_flatFlutterDirX']=Math['random']()<0.5;},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x47d)]=function(){const _0x285b2d=_0x3cb96a;this['_baseScale']=this[_0x285b2d(0x52c)]()[_0x285b2d(0x42f)][_0x285b2d(0x5f7)]??0x1;const _0x28cabe=this[_0x285b2d(0x52c)]()['sprite'][_0x285b2d(0x2f6)]??0x0;this['_baseScale']+=VisuMZ['WeatherEffects'][_0x285b2d(0x2ab)](_0x28cabe),this[_0x285b2d(0x3cd)]=this[_0x285b2d(0x52c)]()[_0x285b2d(0x42f)][_0x285b2d(0x517)]??0x1,this[_0x285b2d(0x5f2)]=this['data']()[_0x285b2d(0x42f)][_0x285b2d(0x327)]??0x1,this['_scaleInOutRatio']=this[_0x285b2d(0x52c)]()['flags']['scaleIn']??0x1,this[_0x285b2d(0x5f7)]['x']=this['_baseScale']*this[_0x285b2d(0x3cd)]*this['_scaleInOutRatio'],this[_0x285b2d(0x5f7)]['y']=this[_0x285b2d(0x47e)]*this[_0x285b2d(0x5f2)]*this[_0x285b2d(0x2f9)];},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x3f8)]=function(){const _0x35fdcf=_0x3cb96a,_0xe304dd=0xc8;let _0xf62e5=this[_0x35fdcf(0x52c)]()[_0x35fdcf(0x42f)][_0x35fdcf(0x3eb)]||_0x35fdcf(0x1fb);_0xf62e5=_0xf62e5[_0x35fdcf(0x42e)](/sides/i,Math['random']()<0.5?_0x35fdcf(0x269):_0x35fdcf(0x5fb));let _0x4763fa=0x0;switch(_0xf62e5['toLowerCase']()['trim']()){case _0x35fdcf(0x1fb):this['ax']=Math['randomInt'](Graphics[_0x35fdcf(0x197)]+_0xe304dd*0x2)-_0xe304dd;break;case _0x35fdcf(0x2bf):this['ax']=0x0;break;case'left\x2010%':case _0x35fdcf(0x535):case _0x35fdcf(0x40c):case'left\x2040%':case _0x35fdcf(0x518):case'left\x2060%':case'left\x2070%':case _0x35fdcf(0x274):case _0x35fdcf(0x4cd):if(_0xf62e5[_0x35fdcf(0x1a9)](/(\d+)([%％])/i)){const _0x5e9847=Number(RegExp['$1'])*0.01;_0x4763fa+=Math[_0x35fdcf(0x2db)](Graphics['width']*_0x5e9847);}this['ax']=0x0+Math[_0x35fdcf(0x5e6)](_0x4763fa)-Math[_0x35fdcf(0x5e6)](_0xe304dd);break;case _0x35fdcf(0x45f):this['ax']=Graphics[_0x35fdcf(0x197)];break;case _0x35fdcf(0x561):case _0x35fdcf(0x384):case _0x35fdcf(0x580):case'right\x2040%':case _0x35fdcf(0x42b):case _0x35fdcf(0x4d0):case _0x35fdcf(0x2ed):case _0x35fdcf(0x37f):case'right\x2090%':if(_0xf62e5[_0x35fdcf(0x1a9)](/(\d+)([%％])/i)){const _0x1aa259=Number(RegExp['$1'])*0.01;_0x4763fa+=Math[_0x35fdcf(0x2db)](Graphics[_0x35fdcf(0x197)]*_0x1aa259);}this['ax']=Graphics[_0x35fdcf(0x197)]-Math[_0x35fdcf(0x5e6)](_0x4763fa)+Math[_0x35fdcf(0x5e6)](_0xe304dd);break;case _0x35fdcf(0x2a5):case _0x35fdcf(0x2a5):case _0x35fdcf(0x562):case'center\x2030%':case _0x35fdcf(0x57c):case _0x35fdcf(0x24d):case _0x35fdcf(0x34a):case'center\x2070%':case _0x35fdcf(0x370):case _0x35fdcf(0x2d9):if(_0xf62e5[_0x35fdcf(0x1a9)](/(\d+)([%％])/i)){const _0x29a595=Number(RegExp['$1'])*0.01;_0x4763fa+=Math[_0x35fdcf(0x2db)](Graphics[_0x35fdcf(0x197)]*_0x29a595);}this['ax']=Graphics[_0x35fdcf(0x197)]/0x2+Math[_0x35fdcf(0x5e6)](_0x4763fa)+Math[_0x35fdcf(0x5e6)](_0x4763fa)-_0x4763fa;break;default:this['ax']=Graphics['width']/0x2;break;}let _0x1179b6=this[_0x35fdcf(0x52c)]()[_0x35fdcf(0x42f)][_0x35fdcf(0x22a)]||'random';_0x1179b6=_0x1179b6[_0x35fdcf(0x42e)](/either/i,Math[_0x35fdcf(0x1fb)]()<0.5?_0x35fdcf(0x3c8):_0x35fdcf(0x474));let _0x4a5cc0=0x0;switch(_0x1179b6['toLowerCase']()[_0x35fdcf(0x285)]()){case _0x35fdcf(0x1fb):this['ay']=Math[_0x35fdcf(0x5e6)](Graphics[_0x35fdcf(0x27f)]+_0xe304dd*0x2)-_0xe304dd;break;case'upper\x20border':this['ay']=0x0;break;case _0x35fdcf(0x219):case _0x35fdcf(0x2f3):case _0x35fdcf(0x25c):case _0x35fdcf(0x3af):case _0x35fdcf(0x2d2):case _0x35fdcf(0x369):case _0x35fdcf(0x480):case _0x35fdcf(0x2b0):case _0x35fdcf(0x4c2):if(_0x1179b6['match'](/(\d+)([%％])/i)){const _0x11c50a=Number(RegExp['$1'])*0.01;_0x4a5cc0+=Math[_0x35fdcf(0x2db)](Graphics[_0x35fdcf(0x27f)]*_0x11c50a);}this['ay']=0x0+Math[_0x35fdcf(0x5e6)](_0x4a5cc0)-Math[_0x35fdcf(0x5e6)](_0xe304dd);break;case _0x35fdcf(0x3d6):this['ay']=Graphics['height'];break;case _0x35fdcf(0x506):case'lower\x2020%':case'lower\x2030%':case'lower\x2040%':case'lower\x2050%':case _0x35fdcf(0x525):case'lower\x2070%':case _0x35fdcf(0x45d):case _0x35fdcf(0x21b):if(_0x1179b6[_0x35fdcf(0x1a9)](/(\d+)([%％])/i)){const _0x5cace3=Number(RegExp['$1'])*0.01;_0x4a5cc0+=Math[_0x35fdcf(0x2db)](Graphics[_0x35fdcf(0x27f)]*_0x5cace3);}this['ay']=Graphics['height']-Math[_0x35fdcf(0x5e6)](_0x4a5cc0)+Math[_0x35fdcf(0x5e6)](_0xe304dd);break;case _0x35fdcf(0x1ae):case'middle\x2010%':case _0x35fdcf(0x28a):case _0x35fdcf(0x5e1):case _0x35fdcf(0x28d):case _0x35fdcf(0x3ed):case'middle\x2060%':case _0x35fdcf(0x4e1):case _0x35fdcf(0x3bd):case _0x35fdcf(0x27c):if(_0x1179b6[_0x35fdcf(0x1a9)](/(\d+)([%％])/i)){const _0x114ac2=Number(RegExp['$1'])*0.01;_0x4a5cc0+=Math[_0x35fdcf(0x2db)](Graphics[_0x35fdcf(0x27f)]*_0x114ac2);}this['ay']=Graphics[_0x35fdcf(0x27f)]/0x2+Math['randomInt'](_0x4a5cc0)+Math[_0x35fdcf(0x5e6)](_0x4a5cc0)-_0x4a5cc0;break;default:this['ay']=Graphics[_0x35fdcf(0x27f)]/0x2;break;}this['ax']+=this[_0x35fdcf(0x52c)]()[_0x35fdcf(0x42f)][_0x35fdcf(0x523)]||0x0,this['ay']+=this[_0x35fdcf(0x52c)]()[_0x35fdcf(0x42f)][_0x35fdcf(0x455)]||0x0,this['_originBound']=this['data']()[_0x35fdcf(0x42f)][_0x35fdcf(0x4a5)];if(this['_originBound']){if(_0x35fdcf(0x469)===_0x35fdcf(0x469))this['ax']+=this['_weatherParent'][_0x35fdcf(0x383)]['x'],this['ay']+=this[_0x35fdcf(0x50c)][_0x35fdcf(0x383)]['y'];else{const _0x59f9f7=this[_0x35fdcf(0x2e8)];return _0x59f9f7[_0x36854c[_0x35fdcf(0x2db)](_0x41e16e[_0x35fdcf(0x1fb)]()*_0x59f9f7[_0x35fdcf(0x59e)])];}}},Sprite_WeatherParticle['prototype'][_0x3cb96a(0x210)]=function(){const _0x5aa92b=_0x3cb96a;this[_0x5aa92b(0x1bf)]=this['data']()[_0x5aa92b(0x42f)][_0x5aa92b(0x1bf)];const _0x4edc02=this[_0x5aa92b(0x52c)]()['sprite'][_0x5aa92b(0x235)],_0x5c1df6=VisuMZ[_0x5aa92b(0x5b2)][_0x5aa92b(0x195)](_0x4edc02);this[_0x5aa92b(0x1bf)]=(this['opacity']+_0x5c1df6)[_0x5aa92b(0x482)](0x0,0xff),this[_0x5aa92b(0x205)]=this[_0x5aa92b(0x1bf)],this[_0x5aa92b(0x32e)]=this[_0x5aa92b(0x52c)]()['sprite'][_0x5aa92b(0x514)]||_0x5aa92b(0x287),this[_0x5aa92b(0x47a)]=this[_0x5aa92b(0x52c)]()['sprite'][_0x5aa92b(0x48e)]||0x0,this[_0x5aa92b(0x3d5)]=this[_0x5aa92b(0x52c)]()['sprite'][_0x5aa92b(0x48e)]||0x0;},Sprite_WeatherParticle['prototype']['rebornInitialTrajectoryData']=function(){const _0x107b9a=_0x3cb96a;this[_0x107b9a(0x46c)]=this['data']()[_0x107b9a(0x320)][_0x107b9a(0x5ca)]||'straight',this[_0x107b9a(0x297)]=this[_0x107b9a(0x52c)]()['trajectory']['lockedID']||0x0,this[_0x107b9a(0x334)]=this['data']()[_0x107b9a(0x320)][_0x107b9a(0x519)]||0x0,this[_0x107b9a(0x46d)]=this['data']()['trajectory']['lockedOffsetY']||0x0,this[_0x107b9a(0x3bb)]=this[_0x107b9a(0x52c)]()[_0x107b9a(0x320)][_0x107b9a(0x39b)],this['_speed']+=VisuMZ[_0x107b9a(0x5b2)][_0x107b9a(0x2ab)](this[_0x107b9a(0x52c)]()[_0x107b9a(0x320)][_0x107b9a(0x542)]);if(this['data']()[_0x107b9a(0x320)][_0x107b9a(0x542)]!==0x0){if(this[_0x107b9a(0x3bb)]===0x0)this[_0x107b9a(0x3bb)]=Math[_0x107b9a(0x1fb)]();}this[_0x107b9a(0x3d2)]=this[_0x107b9a(0x52c)]()[_0x107b9a(0x320)][_0x107b9a(0x3c6)];const _0x3c3dfd=this['data']()[_0x107b9a(0x320)]['angleVariance'],_0x1af913=VisuMZ['WeatherEffects'][_0x107b9a(0x195)](_0x3c3dfd);this[_0x107b9a(0x3d2)]=Math['ceil'](this[_0x107b9a(0x3d2)]+_0x1af913),this[_0x107b9a(0x2e7)]=this['data']()[_0x107b9a(0x320)][_0x107b9a(0x3b8)],this[_0x107b9a(0x313)]=this[_0x107b9a(0x52c)]()[_0x107b9a(0x320)]['alignAngle']??!![],this[_0x107b9a(0x2cf)]=this[_0x107b9a(0x52c)]()[_0x107b9a(0x320)][_0x107b9a(0x2a6)]??0x0,this[_0x107b9a(0x531)]=0x0,this[_0x107b9a(0x5e7)]=Math[_0x107b9a(0x5e6)](0xf4240),this[_0x107b9a(0x4c1)]=this[_0x107b9a(0x52c)]()[_0x107b9a(0x320)]['angleSwayRange'],this[_0x107b9a(0x5b0)]=this[_0x107b9a(0x52c)]()['trajectory'][_0x107b9a(0x31e)],this['_spinAngle']=0x0,this[_0x107b9a(0x471)]=this['data']()[_0x107b9a(0x320)][_0x107b9a(0x234)]||0x0;this['_spinSpeed']!==0x0&&(this['_spinAngle']=Math[_0x107b9a(0x5e6)](0x168));this[_0x107b9a(0x471)]+=VisuMZ[_0x107b9a(0x5b2)]['MakeVariance'](this[_0x107b9a(0x52c)]()['trajectory'][_0x107b9a(0x2ac)]||0x0);if(this['data']()[_0x107b9a(0x320)][_0x107b9a(0x1b4)]){if(_0x107b9a(0x22d)!==_0x107b9a(0x22d))_0x3d93a3[_0x107b9a(0x50a)](_0x215ed5,_0x370cd5),_0x587c06[_0x107b9a(0x5ca)]=_0x107b9a(0x32d),_0x20dc91[_0x107b9a(0x5b2)]['applyPluginCmdSettings'](_0x22b5cc);else{if(Math[_0x107b9a(0x1fb)]()<0.5)this['_spinSpeed']*=-0x1;}}this[_0x107b9a(0x449)]=Math['randomInt'](0xf4240),this[_0x107b9a(0x27d)]=Math[_0x107b9a(0x5e6)](0xf4240),this['_xSwayRange']=this[_0x107b9a(0x52c)]()['trajectory'][_0x107b9a(0x357)],this[_0x107b9a(0x360)]=this[_0x107b9a(0x52c)]()[_0x107b9a(0x320)]['xSwaySpeed'],this[_0x107b9a(0x344)]=this['data']()[_0x107b9a(0x320)]['ySwayRange'],this[_0x107b9a(0x1f7)]=this[_0x107b9a(0x52c)]()[_0x107b9a(0x320)][_0x107b9a(0x48c)];},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x421)]=function(){const _0x32d5b9=_0x3cb96a;this['rebornBitmap'](),this[_0x32d5b9(0x5ed)](),this[_0x32d5b9(0x345)](),this[_0x32d5b9(0x1f4)](),this['removeUnusedColorFilter']();},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x38f)]=function(){const _0x4022dd=_0x3cb96a,_0x513512=this[_0x4022dd(0x363)]();this['loadBitmapType'](_0x513512);},Sprite_WeatherParticle['prototype'][_0x3cb96a(0x363)]=function(){const _0x19322f=_0x3cb96a,_0x1ace0a=this[_0x19322f(0x52c)]();let _0x104bde=[],_0x22d653=0x0;_0x1ace0a[_0x19322f(0x3b4)][_0x19322f(0x553)]&&(_0x104bde[_0x19322f(0x2fb)](_0x19322f(0x553)),_0x22d653+=_0x1ace0a[_0x19322f(0x3b4)]['generatedWeight']||0x1);_0x1ace0a[_0x19322f(0x3b4)][_0x19322f(0x491)][_0x19322f(0x59e)]>0x0&&(_0x19322f(0x352)==='mBMwB'?(_0x104bde[_0x19322f(0x2fb)]('icons'),_0x22d653+=_0x1ace0a[_0x19322f(0x3b4)]['iconsWeight']||0x1):(_0x253fda[_0x19322f(0x50a)](_0x594482,_0x1961d8),_0x5eb0d9['type']='pollutionclouds',_0x2d579f['WeatherEffects'][_0x19322f(0x29c)](_0x1436eb)));if(_0x1ace0a[_0x19322f(0x3b4)][_0x19322f(0x400)][_0x19322f(0x59e)]>0x0){if('ZuogF'==='DMNEb'){const _0x341694=this[_0x19322f(0x52c)]()[_0x19322f(0x3b4)][_0x19322f(0x4cc)];this[_0x19322f(0x4cc)]=_0x341694;}else _0x104bde[_0x19322f(0x2fb)](_0x19322f(0x400)),_0x22d653+=_0x1ace0a['image']['picturesWeight']||0x1;}let _0x2f7323=Math['random']()*_0x22d653;for(const _0x3a8959 of _0x104bde){_0x2f7323-=_0x1ace0a[_0x19322f(0x3b4)][_0x19322f(0x596)['format'](_0x3a8959)]||0x0;if(_0x2f7323<=0x0)return _0x3a8959;}return _0x19322f(0x553);},Sprite_WeatherParticle[_0x3cb96a(0x356)]['loadBitmapType']=function(_0x1d1227){const _0x1f2fe8=_0x3cb96a;this[_0x1f2fe8(0x388)]=!![];if(_0x1d1227===_0x1f2fe8(0x553))this['loadGeneratedBitmap']();else{if(_0x1d1227===_0x1f2fe8(0x491))_0x1f2fe8(0x600)===_0x1f2fe8(0x600)?this[_0x1f2fe8(0x5e2)]():(_0x5735ab[_0x1f2fe8(0x50a)](_0x3ecf8a,_0x2d70e6),_0x5e8cce[_0x1f2fe8(0x5ca)]='snow',_0x1e0b3d[_0x1f2fe8(0x5b2)]['applyPluginCmdSettings'](_0x32a592));else _0x1d1227==='pictures'&&this['loadPictureBitmap']();}},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x4e3)]=function(){const _0x1e5b71=_0x3cb96a,_0x4d4385=this['data']()[_0x1e5b71(0x5ca)][_0x1e5b71(0x38b)]()['trim']();this[_0x1e5b71(0x200)]=ImageManager[_0x1e5b71(0x1ed)](_0x4d4385),this['bitmap'][_0x1e5b71(0x56a)](this[_0x1e5b71(0x2f8)]['bind'](this));},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x2f8)]=function(){const _0x166490=_0x3cb96a;this[_0x166490(0x388)]=![];const _0x11d584=this['bitmap'][_0x166490(0x197)],_0x248993=this[_0x166490(0x200)]['height'];this[_0x166490(0x350)](0x0,0x0,_0x11d584,_0x248993);},Sprite_WeatherParticle['prototype'][_0x3cb96a(0x5e2)]=function(){const _0x3aed1c=_0x3cb96a;this[_0x3aed1c(0x200)]=ImageManager['loadWeatherIcons'](),this[_0x3aed1c(0x200)]['addLoadListener'](this[_0x3aed1c(0x1da)][_0x3aed1c(0x52b)](this));},Sprite_WeatherParticle['prototype'][_0x3cb96a(0x1da)]=function(){const _0x587962=_0x3cb96a;this[_0x587962(0x388)]=![];const _0x37876c=this[_0x587962(0x52c)]()['image']['icons'],_0x3f8acb=_0x37876c[Math[_0x587962(0x2db)](Math[_0x587962(0x1fb)]()*_0x37876c['length'])],_0xb397d0=ImageManager[_0x587962(0x5ab)],_0x468dc9=ImageManager[_0x587962(0x418)],_0x51a813=_0x3f8acb%0x10*_0xb397d0,_0x25ac1d=Math['floor'](_0x3f8acb/0x10)*_0x468dc9;this[_0x587962(0x350)](_0x51a813,_0x25ac1d,_0xb397d0,_0x468dc9);},Sprite_WeatherParticle[_0x3cb96a(0x356)]['loadPictureBitmap']=function(){const _0x1de83d=_0x3cb96a,_0x4431d5=this[_0x1de83d(0x52c)]()[_0x1de83d(0x3b4)]['pictures'],_0x1d0543=_0x4431d5[Math[_0x1de83d(0x2db)](Math[_0x1de83d(0x1fb)]()*_0x4431d5[_0x1de83d(0x59e)])];this[_0x1de83d(0x200)]=ImageManager[_0x1de83d(0x3d8)](_0x1d0543),this[_0x1de83d(0x200)][_0x1de83d(0x56a)](this[_0x1de83d(0x2f8)]['bind'](this));},Sprite_WeatherParticle[_0x3cb96a(0x356)]['rebornSpriteBlendMode']=function(){const _0x1db1b4=_0x3cb96a,_0x58f78e=this[_0x1db1b4(0x52c)]()[_0x1db1b4(0x3b4)][_0x1db1b4(0x4cc)];this[_0x1db1b4(0x4cc)]=_0x58f78e;},Sprite_WeatherParticle['prototype'][_0x3cb96a(0x345)]=function(){const _0x38cdfd=_0x3cb96a,_0x132edf=this[_0x38cdfd(0x52c)]()['image']['hueVariations']||[];if(_0x132edf[_0x38cdfd(0x59e)]<=0x0)_0x132edf[_0x38cdfd(0x2fb)](0x0);this[_0x38cdfd(0x3c4)]=_0x132edf[Math['floor'](Math[_0x38cdfd(0x1fb)]()*_0x132edf['length'])],this[_0x38cdfd(0x2bc)](this['_baseHue']);},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x1f4)]=function(){const _0x437f98=_0x3cb96a,_0x29e375=this[_0x437f98(0x52c)]()[_0x437f98(0x3b4)]['toneVariations']||[];if(_0x29e375[_0x437f98(0x59e)]<=0x0)_0x29e375['push']([0x0,0x0,0x0,0x0]);this[_0x437f98(0x3c7)]=_0x29e375[Math['floor'](Math[_0x437f98(0x1fb)]()*_0x29e375[_0x437f98(0x59e)])][_0x437f98(0x44e)](),this[_0x437f98(0x268)](this[_0x437f98(0x3c7)]);},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x32b)]=function(){const _0xed309=_0x3cb96a;if(!this['filters'])return;if(!this[_0xed309(0x57f)])return;if(this[_0xed309(0x2ad)]!==0x0)return;if(!this[_0xed309(0x57e)]['equals']([0x0,0x0,0x0,0x0]))return;this['filters'][_0xed309(0x203)](this[_0xed309(0x57f)]),delete this[_0xed309(0x57f)];},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x563)]=function(){this['rebornCommonEvent']();},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x2a4)]=function(){const _0x595109=_0x3cb96a;if(!this[_0x595109(0x1e0)])return;if(!this['_flags'][_0x595109(0x239)])return;const _0x1b3fa0=this['_flags'][_0x595109(0x239)]||0x0;SceneManager[_0x595109(0x4ce)][_0x595109(0x35a)](_0x1b3fa0);},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x4b1)]=function(){const _0x10db22=_0x3cb96a;Sprite[_0x10db22(0x356)][_0x10db22(0x4b1)][_0x10db22(0x3b3)](this);if(this[_0x10db22(0x5ca)]===_0x10db22(0x427))return;if(this['_notLoadedReady'])return;if(this[_0x10db22(0x4bf)]>0x0){if(_0x10db22(0x5d6)==='wpGRZ')_0x2a52b9['wait'](_0x5e57b5[_0x10db22(0x33b)]||0x1);else return this[_0x10db22(0x47a)]=0x0,this[_0x10db22(0x1bf)]=0x0,this['_respawnDelay']--;}this[_0x10db22(0x311)](),this[_0x10db22(0x5c7)](),this[_0x10db22(0x3d3)](),this[_0x10db22(0x22b)](),this[_0x10db22(0x489)]();},Sprite_WeatherParticle[_0x3cb96a(0x356)]['updateLifespan']=function(){const _0x5158a3=_0x3cb96a;if(this[_0x5158a3(0x451)]<=0x0)return this[_0x5158a3(0x1df)]();if(this[_0x5158a3(0x560)]()){this[_0x5158a3(0x451)]=this['_wholeLifespan'];return;}this[_0x5158a3(0x451)]--;if(this[_0x5158a3(0x451)]<=0x0&&this[_0x5158a3(0x1e0)]){if(this[_0x5158a3(0x1e0)][_0x5158a3(0x509)]&&this[_0x5158a3(0x5ca)]!==_0x5158a3(0x57b))return this[_0x5158a3(0x300)]();else{if(this[_0x5158a3(0x1e0)][_0x5158a3(0x233)]&&this[_0x5158a3(0x5ca)]!==_0x5158a3(0x3ba)){if(_0x5158a3(0x468)===_0x5158a3(0x468))return this[_0x5158a3(0x2fc)]();else{if(this[_0x5158a3(0x1e0)][_0x5158a3(0x53b)])this[_0x5158a3(0x264)]();}}}if(this[_0x5158a3(0x1e0)][_0x5158a3(0x401)]){if('cQRFn'===_0x5158a3(0x5ac))this[_0x5158a3(0x565)]();else{const _0xc6db7b=this[_0x5158a3(0x3d5)]||0x1,_0x338e38=this[_0x5158a3(0x47a)];_0xbdd4b1*=(_0xc6db7b-_0x338e38)/_0xc6db7b,this[_0x5158a3(0x47a)]--;}}}},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x560)]=function(){const _0x70d45c=_0x3cb96a;if(!this[_0x70d45c(0x1e0)])return![];if(!this['_flags']['longevity'])return![];return this[_0x70d45c(0x5ca)]===this[_0x70d45c(0x52c)]()[_0x70d45c(0x5ca)];},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x300)]=function(){const _0x275c69=_0x3cb96a;this[_0x275c69(0x5ca)]='fireworks',this[_0x275c69(0x451)]=Math['randomInt'](0x14)+0x50,this[_0x275c69(0x1e8)]=this['_lifespan'],this[_0x275c69(0x4a8)]=_0x275c69(0x21c),this[_0x275c69(0x1e0)]={'scaleIn':0x0,'scaleInDuration':0x64,'scaleOut':0x2,'scaleOutDuration':0x64},this[_0x275c69(0x3cd)]=0x1,this[_0x275c69(0x5f2)]=0x1,this[_0x275c69(0x2f9)]=0x0,this['opacity']=0xff,this[_0x275c69(0x205)]=0xff,this[_0x275c69(0x32e)]='InSine',this[_0x275c69(0x47a)]=0xa,this['_opacityFadeInTimeWhole']=0xa,this[_0x275c69(0x46c)]=_0x275c69(0x5dd),this[_0x275c69(0x3bb)]=0.05,this[_0x275c69(0x3d2)]=0x10e,this['_angleOffset']=Math[_0x275c69(0x5e6)](0x168),this[_0x275c69(0x313)]=![],this[_0x275c69(0x2cf)]=0x0,this[_0x275c69(0x531)]=0x0,this[_0x275c69(0x4c1)]=0x0,this[_0x275c69(0x310)]=0x0,this['_spinSpeed']=0x0,this['_xSwayRange']=0x0,this[_0x275c69(0x344)]=0x0,this[_0x275c69(0x388)]=!![],this[_0x275c69(0x200)]=ImageManager[_0x275c69(0x504)](),this[_0x275c69(0x200)][_0x275c69(0x56a)](this[_0x275c69(0x2f8)][_0x275c69(0x52b)](this)),this['blendMode']=0x1,this[_0x275c69(0x57e)]=[0x0,0x0,0x0,0x0];},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x2fc)]=function(){const _0x3c88aa=_0x3cb96a;this['type']=_0x3c88aa(0x3ba),this[_0x3c88aa(0x451)]=Math['randomInt'](0x1e)+0x3c,this['_wholeLifespan']=this[_0x3c88aa(0x451)],this[_0x3c88aa(0x4a8)]='sparkle',this[_0x3c88aa(0x1e0)]={},this[_0x3c88aa(0x3cd)]=0x1,this[_0x3c88aa(0x5f2)]=0x1,this['_scaleInOutRatio']=0x1,this['opacity']=0xff,this[_0x3c88aa(0x205)]=0xff,this[_0x3c88aa(0x32e)]=_0x3c88aa(0x1c0),this['_opacityFadeInTime']=0x6,this[_0x3c88aa(0x3d5)]=0x6,this[_0x3c88aa(0x46c)]=_0x3c88aa(0x58b),this['_speed']=0x0,this[_0x3c88aa(0x3d2)]=0x0,this[_0x3c88aa(0x2e7)]=0x0,this[_0x3c88aa(0x313)]=![],this[_0x3c88aa(0x2cf)]=0x0,this[_0x3c88aa(0x531)]=0x0,this[_0x3c88aa(0x4c1)]=0x0,this['_spinAngle']=0x0,this['_spinSpeed']=Math[_0x3c88aa(0x5e6)](0x3)+0x2,this[_0x3c88aa(0x316)]=0x0,this[_0x3c88aa(0x344)]=0x0,this[_0x3c88aa(0x388)]=!![],this[_0x3c88aa(0x200)]=ImageManager[_0x3c88aa(0x48b)](),this[_0x3c88aa(0x200)]['addLoadListener'](this[_0x3c88aa(0x2f8)][_0x3c88aa(0x52b)](this)),this[_0x3c88aa(0x4cc)]=0x1,this[_0x3c88aa(0x2ad)]=0x0,this[_0x3c88aa(0x57e)]=[0x0,0x0,0x0,0x0],this['removeUnusedColorFilter']();},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x565)]=function(){const _0x3996d=_0x3cb96a;this[_0x3996d(0x4bf)]=this[_0x3996d(0x1e0)][_0x3996d(0x401)];const _0x1cf404=this[_0x3996d(0x1e0)][_0x3996d(0x1cc)],_0x466d17=this[_0x3996d(0x52c)]()['power'],_0x21bb14=Math[_0x3996d(0x5e6)](_0x1cf404*_0x466d17);this['_respawnDelay']+=_0x21bb14;},Sprite_WeatherParticle['prototype'][_0x3cb96a(0x5c7)]=function(){const _0x420199=_0x3cb96a;if(this[_0x420199(0x1e0)][_0x420199(0x53b)])this[_0x420199(0x264)]();},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x264)]=function(){const _0x47dcb2=_0x3cb96a,_0x503a28=Graphics[_0x47dcb2(0x1f8)]+this[_0x47dcb2(0x55e)],_0x1b2a6c=this[_0x47dcb2(0x1e0)][_0x47dcb2(0x1f9)],_0x170052=this[_0x47dcb2(0x1e0)][_0x47dcb2(0x53b)]/0x2,_0x4b4723=this[_0x47dcb2(0x3c4)]+Math[_0x47dcb2(0x31f)](_0x503a28*_0x1b2a6c)*_0x170052;this[_0x47dcb2(0x2bc)](_0x4b4723);},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x3d3)]=function(){const _0x3104a4=_0x3cb96a;this[_0x3104a4(0x2bb)](),this[_0x3104a4(0x5f7)]['x']=this[_0x3104a4(0x30a)](),this[_0x3104a4(0x5f7)]['y']=this[_0x3104a4(0x424)]();},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x2bb)]=function(){const _0xafaec6=_0x3cb96a;if(this[_0xafaec6(0x1e0)][_0xafaec6(0x4c9)]>this[_0xafaec6(0x451)]){if('JEXXk'!==_0xafaec6(0x24e)){const _0x4749de=_0x560cfa/_0x4567a1,_0x54695c=this[_0xafaec6(0x30c)];_0x54695c[_0xafaec6(0x1a5)](),_0x54695c[_0xafaec6(0x5f7)](0x1,_0x4749de),this[_0xafaec6(0x208)](_0x4b4b20,_0x130ddc/_0x4749de,_0x2f7c97,0x168,_0x1b41e8,_0x19cf6e,_0xed33bb,0x0),_0x54695c[_0xafaec6(0x1aa)](),this[_0xafaec6(0x3a1)][_0xafaec6(0x4b1)]();}else{const _0x2cf897=this[_0xafaec6(0x451)],_0x4fb37a=this[_0xafaec6(0x1e0)]['scaleOut']??0x1;if(_0x2cf897<=0x1)this['_scaleInOutRatio']=_0x4fb37a;else{if(_0xafaec6(0x444)===_0xafaec6(0x3fe)){if(this[_0xafaec6(0x422)]&&this[_0xafaec6(0x422)][_0xafaec6(0x59e)]>=_0x4da50d[_0xafaec6(0x292)]){const _0x3db24a=this['_cached_WeatherEffects_Sandstorm'];return _0x3db24a[_0x12bb55['floor'](_0x414cc7[_0xafaec6(0x1fb)]()*_0x3db24a[_0xafaec6(0x59e)])];}const _0x128a49=_0x4075f3['WEATHER_EARTH_COLORS']['clone'](),_0x4c1f84=1.5,_0x5cd63f=_0x32b871[_0xafaec6(0x29d)](_0x128a49[_0x217d9b[_0xafaec6(0x2db)](_0x467482['random']()*_0x128a49[_0xafaec6(0x59e)])],_0x4c1f84),_0x1ac617=_0x38e068[_0xafaec6(0x29d)](_0x128a49[_0x5af251[_0xafaec6(0x2db)](_0x2ab0bf[_0xafaec6(0x1fb)]()*_0x128a49[_0xafaec6(0x59e)])],_0x4c1f84),_0x44fca9=_0x1b2f95['adjustHexColor'](_0x128a49[_0x1e87f2[_0xafaec6(0x2db)](_0x3a2655['random']()*_0x128a49['length'])],_0x4c1f84),_0x4de6ee=new _0x3ae0a3(0x1f4,0x1f4);_0x4de6ee['drawCloud'](0xfa,0x15e,0x4b,_0x5cd63f,0x4,0x14),_0x4de6ee['drawCloud'](0xfa,0xfa,0x64,_0x44fca9,0x8,0x19),_0x4de6ee[_0xafaec6(0x35d)](0xfa,0xfa,0x3c,_0x1ac617,0x4,0x14);const _0x3d58fa=_0x4de6ee[_0xafaec6(0x197)],_0x5afa39=_0x4de6ee['height'],_0x4915de=0x2;let _0x137ec5=0x40;while(_0x137ec5--){const _0x287a00=_0x2db2ec[_0xafaec6(0x5e6)](_0x3d58fa-_0x4915de*0x2)+_0x4915de,_0x455635=_0xa7a170[_0xafaec6(0x5e6)](_0x5afa39-_0x4915de*0x2)+_0x4915de;let _0x11f40d=_0x128a49[_0x3d9b85['floor'](_0x1b061d[_0xafaec6(0x1fb)]()*_0x128a49[_0xafaec6(0x59e)])];_0x11f40d=_0x35fc41['adjustHexColor'](_0x11f40d,_0x4c1f84);const _0x2d4cd5=_0x35e66e[_0xafaec6(0x5e6)](_0x4915de)+0x1;_0x4de6ee[_0xafaec6(0x546)]=_0x21c0d5[_0xafaec6(0x5e6)](0x40)+0xa0,_0x4de6ee['drawCircle'](_0x287a00,_0x455635,_0x2d4cd5,_0x11f40d);}_0x4de6ee[_0xafaec6(0x275)]=![];if(_0x4082ca[_0xafaec6(0x36f)])_0x377987[_0xafaec6(0x582)](_0xafaec6(0x1f3));return this[_0xafaec6(0x422)]=this[_0xafaec6(0x422)]||[],this[_0xafaec6(0x422)][_0xafaec6(0x2fb)](_0x4de6ee),_0x4de6ee;}else this[_0xafaec6(0x2f9)]=(this['_scaleInOutRatio']*(_0x2cf897-0x1)+_0x4fb37a)/_0x2cf897;}}}else{if(this['_flags'][_0xafaec6(0x20e)]>this['_wholeLifespan']-this[_0xafaec6(0x451)]){if('edNmk'!==_0xafaec6(0x4fb))this[_0xafaec6(0x2da)](0x0),_0x53c75b[_0xafaec6(0x34f)](_0x2242df['PI']*0x2/_0x59a636);else{const _0x46af29=this['_flags'][_0xafaec6(0x20e)]-(this[_0xafaec6(0x1e8)]-this[_0xafaec6(0x451)]),_0x57a66c=0x1;_0x46af29<=0x1?this['_scaleInOutRatio']=_0x57a66c:'ngWvq'!==_0xafaec6(0x44b)?this[_0xafaec6(0x2f9)]=(this[_0xafaec6(0x2f9)]*(_0x46af29-0x1)+_0x57a66c)/_0x46af29:(_0x349a70[_0xafaec6(0x50a)](_0x8921c6,_0x290b19),_0x4a6ddd[_0xafaec6(0x5ca)]=_0xafaec6(0x3b5),_0x52fddd[_0xafaec6(0x5b2)][_0xafaec6(0x29c)](_0xba75dc));}}else{if(_0xafaec6(0x420)!==_0xafaec6(0x420)){const _0xbb244d=_0x8fe016['randomInt'](_0x508551-_0x57c209*0x2)+_0xde8af4,_0x4363b8=_0x28a2c5[_0xafaec6(0x5e6)](_0x54c0a5-_0x4fb737*0x2)+_0x5beaf7;let _0x1a9a7d=_0x4bb242[_0x2492cd[_0xafaec6(0x2db)](_0x44cf9c[_0xafaec6(0x1fb)]()*_0x27fd2f['length'])];_0x1a9a7d=_0xadf502[_0xafaec6(0x29d)](_0x1a9a7d,_0x2530e1),_0x30bded['paintOpacity']=_0x25525d['randomInt'](0x40)+0xc0,_0x405f63[_0xafaec6(0x57a)](_0xbb244d,_0x4363b8,_0x1a9a7d,_0x1a9a7d,0x4,_0xc483b5,_0x34d787/0x2);}else this['_scaleInOutRatio']=0x1;}}},Sprite_WeatherParticle['prototype']['calculateScaleX']=function(){const _0x7d4642=_0x3cb96a;let _0x2ddbe0=this[_0x7d4642(0x47e)];_0x2ddbe0*=this['_scaleRatioX'];if(this[_0x7d4642(0x1e0)]['flatFlutter']&&this[_0x7d4642(0x1a0)]){const _0x57d028=Graphics[_0x7d4642(0x1f8)]+this[_0x7d4642(0x1cf)];_0x2ddbe0*=Math['cos'](_0x57d028*this[_0x7d4642(0x1bd)]);}return _0x2ddbe0*=this[_0x7d4642(0x2f9)],_0x2ddbe0;},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x424)]=function(){const _0x192ea1=_0x3cb96a;let _0x1fed3d=this['_baseScale'];_0x1fed3d*=this[_0x192ea1(0x5f2)];if(this[_0x192ea1(0x1e0)][_0x192ea1(0x58e)]&&!this['_flatFlutterDirX']){if('SjGHf'!==_0x192ea1(0x303))_0x2e83aa=(this[_0x192ea1(0x249)][_0x192ea1(0x1bf)]*(_0x5dd9e0-0x1)+_0x19a22)/_0x509a8c;else{const _0x35f522=Graphics[_0x192ea1(0x1f8)]+this[_0x192ea1(0x288)];_0x1fed3d*=Math[_0x192ea1(0x31f)](_0x35f522*this['_flatFlutterSpeedY']);}}return _0x1fed3d*=this[_0x192ea1(0x2f9)],_0x1fed3d;},Sprite_WeatherParticle[_0x3cb96a(0x356)]['updatePosition']=function(){const _0xf28617=_0x3cb96a;this[_0xf28617(0x46b)](),this[_0xf28617(0x295)]();},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x295)]=function(){const _0x2defb6=_0x3cb96a;this['x']=this['ax'],this['y']=this['ay'],this['_originBound']&&(_0x2defb6(0x299)===_0x2defb6(0x299)?(this['x']-=this[_0x2defb6(0x50c)][_0x2defb6(0x383)]['x'],this['y']-=this[_0x2defb6(0x50c)]['origin']['y']):this[_0x2defb6(0x2f9)]=0x1),this['x']=Math[_0x2defb6(0x30e)](this['x']),this['y']=Math[_0x2defb6(0x30e)](this['y']);},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x489)]=function(){const _0x2ab130=_0x3cb96a;this[_0x2ab130(0x41f)](),this[_0x2ab130(0x392)]();},Sprite_WeatherParticle['prototype'][_0x3cb96a(0x41f)]=function(){const _0x16bf96=_0x3cb96a;if(this[_0x16bf96(0x451)]<=0x0)return;if(this['_opacityFadeInTime']>0x0&&this[_0x16bf96(0x451)]>this['_opacityFadeInTime'])return;if(this[_0x16bf96(0x560)]())return;const _0x37595a=this[_0x16bf96(0x32e)]||'Linear';this[_0x16bf96(0x205)]=this['applyEasing'](this[_0x16bf96(0x205)],0x0,_0x37595a);},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x34d)]=function(_0x34b8bb,_0x11e937,_0xb5a27a){const _0x37ffcd=_0x3cb96a,_0x425312=this[_0x37ffcd(0x451)],_0x154c1e=this[_0x37ffcd(0x1e8)],_0x4321bf=this[_0x37ffcd(0x4e4)]((_0x154c1e-_0x425312)/_0x154c1e,_0xb5a27a),_0x5734ce=this['calcEasing']((_0x154c1e-_0x425312+0x1)/_0x154c1e,_0xb5a27a),_0x4bf763=(_0x34b8bb-_0x11e937*_0x4321bf)/(0x1-_0x4321bf);return _0x4bf763+(_0x11e937-_0x4bf763)*_0x5734ce;},Sprite_WeatherParticle['prototype'][_0x3cb96a(0x4e4)]=function(_0x1397f0,_0x329ca3){const _0x139ae4=_0x3cb96a;return VisuMZ[_0x139ae4(0x583)](_0x1397f0,_0x329ca3);},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x5b7)]=function(){const _0x52ea33=_0x3cb96a;let _0x5d6b1d=0x1;if(!SceneManager['isSceneBattle']()){if(_0x52ea33(0x389)!==_0x52ea33(0x389)){const _0x4807a3=this[_0x52ea33(0x1b7)];return _0x4807a3[_0x1ab0d3[_0x52ea33(0x2db)](_0x178c2d[_0x52ea33(0x1fb)]()*_0x4807a3[_0x52ea33(0x59e)])];}else{if(this['_flags'][_0x52ea33(0x36a)]&&!this[_0x52ea33(0x50c)][_0x52ea33(0x5c4)]){const _0xe16d99=$gamePlayer[_0x52ea33(0x1e2)]()-this['x'],_0x19dd9b=$gamePlayer['screenY']()-this['y'],_0x391094=Math[_0x52ea33(0x29b)](_0xe16d99*_0xe16d99+_0x19dd9b*_0x19dd9b),_0x27728e=0x5*$gameMap[_0x52ea33(0x4c6)]();if(_0x391094<=_0x27728e)_0x5d6b1d*=0.15;}}}if(this['_opacityFadeInTime']>0x0){if(_0x52ea33(0x28e)===_0x52ea33(0x28e)){const _0x24ce5a=this[_0x52ea33(0x3d5)]||0x1,_0x27e181=this[_0x52ea33(0x47a)];_0x5d6b1d*=(_0x24ce5a-_0x27e181)/_0x24ce5a,this[_0x52ea33(0x47a)]--;}else{if(_0x587789&&_0x27c19e['isNoWeather']())return 0x0;if(this[_0x52ea33(0x23c)]<0x1)return 0x0;const _0x527558=this['data'](),_0x1af053=_0x527558[_0x52ea33(0x42f)][_0x52ea33(0x43b)]||0x0,_0xa2904c=_0x527558[_0x52ea33(0x42f)][_0x52ea33(0x2ee)]||0x0,_0x596214=(_0x283ee9[_0x52ea33(0x3d9)]??0x64)/0x64,_0x2b3a7d=_0x1c7309['ceil'](this[_0x52ea33(0x23c)]*_0xa2904c*_0x596214)+_0x1af053;return _0x2b8a1e[_0x52ea33(0x30e)](_0x2b3a7d);}}return _0x5d6b1d;},Sprite_WeatherParticle['prototype'][_0x3cb96a(0x392)]=function(){const _0x4ea0a7=_0x3cb96a,_0x1cfa86=this[_0x4ea0a7(0x5b7)]();this[_0x4ea0a7(0x1bf)]=Math['round'](this[_0x4ea0a7(0x205)]*_0x1cfa86);},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x46b)]=function(){const _0x5ba0c0=_0x3cb96a,_0x1b7cd9=this[_0x5ba0c0(0x4d4)]();switch(this[_0x5ba0c0(0x46c)]){case _0x5ba0c0(0x5dd):this[_0x5ba0c0(0x481)](_0x1b7cd9);break;case'frozen':this[_0x5ba0c0(0x4e5)](_0x1b7cd9);break;case _0x5ba0c0(0x318):case'follower':case _0x5ba0c0(0x2d5):this['updatePositionMapLockedTarget'](_0x1b7cd9);break;case _0x5ba0c0(0x586):case _0x5ba0c0(0x20c):case _0x5ba0c0(0x4be):case'target':this['updatePositionBattleLockedTarget'](_0x1b7cd9);break;default:this[_0x5ba0c0(0x39c)]();break;}this['updatePositionTrajectorySpin'](),this[_0x5ba0c0(0x1ea)]();},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x4d4)]=function(){const _0x59235d=_0x3cb96a;this[_0x59235d(0x531)]+=this[_0x59235d(0x2cf)];let _0x1a057d=this[_0x59235d(0x3d2)]+this['_angleArcTotal'];const _0x4a3c7c=Graphics[_0x59235d(0x1f8)]+this[_0x59235d(0x5e7)];return _0x1a057d+=Math['cos'](_0x4a3c7c*this[_0x59235d(0x5b0)])*this['_angleSwayRange'],this['angle']=-((this[_0x59235d(0x313)]?_0x1a057d:0x0)+this[_0x59235d(0x2e7)]),_0x1a057d;},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x481)]=function(_0x700b79){const _0x26806b=_0x3cb96a,_0x5dcf2a=VisuMZ['WeatherEffects']['DegreesToRadian'](_0x700b79);this['ax']+=this[_0x26806b(0x3bb)]*Math['cos'](_0x5dcf2a),this['ay']-=this[_0x26806b(0x3bb)]*Math[_0x26806b(0x572)](_0x5dcf2a);},Sprite_WeatherParticle['prototype']['updatePositionFailsafeTrajectory']=function(){const _0x5d5ef4=_0x3cb96a;this['ax']=Graphics[_0x5d5ef4(0x197)]*0x64,this['ay']=Graphics[_0x5d5ef4(0x27f)]*0x64;},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x4e5)]=function(_0x1f29cb){},Sprite_WeatherParticle[_0x3cb96a(0x356)]['updatePositionMapLockedTarget']=function(_0x346a8e){const _0x422055=_0x3cb96a;let _0x13fd3f=null;if(!SceneManager[_0x422055(0x49b)]()){if(_0x422055(0x3ac)!==_0x422055(0x2be))switch(this['_trajectoryType']){case _0x422055(0x318):_0x13fd3f=$gamePlayer;break;case _0x422055(0x5f5):const _0xc4787f=this[_0x422055(0x297)];_0x13fd3f=$gamePlayer[_0x422055(0x47f)]()[_0x422055(0x5f5)](_0xc4787f);break;case _0x422055(0x2d5):const _0x1bcb9a=this[_0x422055(0x297)];_0x13fd3f=$gameMap[_0x422055(0x2d5)](_0x1bcb9a);break;}else{if(this[_0x422055(0x2a2)]&&_0x38495e[_0x422055(0x485)][_0x422055(0x59e)]<=0x0){const _0x623000=this[_0x422055(0x2a2)];return _0x623000[_0x1b958b['floor'](_0xb6acbc[_0x422055(0x1fb)]()*_0x623000['length'])];}this[_0x422055(0x2a2)]=this[_0x422055(0x2a2)]||[];const _0xfbd32e=_0x32638e[_0x422055(0x485)][_0x422055(0x529)](),_0x17df53=_0x422055(0x4b0);{const _0x1ed474=0x8,_0x2974fa=new _0x43f078(_0x1ed474*0x2,_0x1ed474*0x2);_0x2974fa[_0x422055(0x1c8)](_0x1ed474,_0x1ed474,_0x1ed474,_0x17df53),_0x2974fa[_0x422055(0x1c8)](_0x1ed474,_0x1ed474,_0x1ed474-0x1,_0xfbd32e),_0x2974fa[_0x422055(0x275)]=![],this[_0x422055(0x2a2)][_0x422055(0x2fb)](_0x2974fa);}{const _0x5e6e96=new _0x492056(0x10,0x8);_0x5e6e96[_0x422055(0x376)](0x0,0x0,0x10,0x8,_0x17df53),_0x5e6e96[_0x422055(0x376)](0x1,0x1,0xe,0x6,_0xfbd32e),_0x5e6e96[_0x422055(0x275)]=![],this[_0x422055(0x2a2)][_0x422055(0x2fb)](_0x5e6e96);}const _0x22eb9a=new _0x22bb55(0x10,0x10);_0x22eb9a[_0x422055(0x57a)](0x8,0x8,_0x17df53,_0x17df53,0x5,0x8,0x4),_0x22eb9a['drawStar'](0x8,0x8,_0xfbd32e,_0xfbd32e,0x5,0x7,0x3),_0x22eb9a[_0x422055(0x275)]=![];if(_0x4931a4[_0x422055(0x36f)])_0x36070c[_0x422055(0x582)](_0x422055(0x359));return this[_0x422055(0x2a2)]['push'](_0x22eb9a),_0x22eb9a;}}if(_0x13fd3f){this['ax']=_0x13fd3f['screenX']()+this['_lockedOffsetX'],this['ay']=_0x13fd3f[_0x422055(0x1af)]()+this[_0x422055(0x46d)];return;}this[_0x422055(0x39c)]();},Sprite_WeatherParticle[_0x3cb96a(0x356)]['updatePositionBattleLockedTarget']=function(_0x20e23a){const _0x22dd01=_0x3cb96a;let _0x51e7da=null;if(SceneManager['isSceneBattle']())switch(this[_0x22dd01(0x46c)]){case _0x22dd01(0x586):const _0x45719a=this[_0x22dd01(0x297)];_0x51e7da=$gameActors['actor'](_0x45719a);break;case _0x22dd01(0x20c):const _0x5238d4=this['_trajectoryLockedID'];_0x51e7da=$gameTroop['members']()[_0x5238d4];break;case'user':_0x51e7da=BattleManager['_subject'];break;case _0x22dd01(0x4f3):_0x51e7da=BattleManager[_0x22dd01(0x21e)];!_0x51e7da&&BattleManager[_0x22dd01(0x3b9)]&&(_0x51e7da=BattleManager[_0x22dd01(0x3b9)][0x0]);break;}if(_0x51e7da){if(_0x22dd01(0x284)!==_0x22dd01(0x1e9)){const _0x5aa3e9=SceneManager[_0x22dd01(0x4ce)][_0x22dd01(0x5bb)];if(_0x5aa3e9){if(_0x22dd01(0x48d)==='ZYUuP'){const _0x9d4fa8=_0x30a1c8['randomInt'](_0xe152a4-_0x2e0229*0x2)+_0x1f5433*0x1,_0x3f3c8f=_0x2b4226[_0x22dd01(0x5e6)](_0x12d385-_0x2e2bd4*0x8)+_0x30cd6f*0x4,_0x2218f0=_0x35b213[_0x22dd01(0x5e6)](_0x4b0b2c*0x2/0x5)+_0x48f7c1*0x2/0x5,_0x205350=_0x33f858[_0x22dd01(0x5e6)](_0x54d3c5*0x1/0x3)+_0x5e15c2*0x2/0x3;_0x15fab3['drawFireball'](_0x9d4fa8,_0x3f3c8f,_0x2218f0,_0x205350);}else{const _0x4ddd10=_0x5aa3e9['findTargetSprite'](_0x51e7da);if(_0x4ddd10){if(_0x22dd01(0x34b)==='JfqiY'){const _0x3235d3=new Point(_0x4ddd10['x'],_0x4ddd10['y']),_0x4da688=_0x4ddd10[_0x22dd01(0x3da)][_0x22dd01(0x4e2)](_0x3235d3);this['ax']=_0x4ddd10['x']-_0x4da688['x']+this[_0x22dd01(0x334)],this['ay']=_0x4ddd10['y']-_0x4da688['y']+this[_0x22dd01(0x46d)];return;}else{const _0x599388=_0x12f22c[_0x22dd01(0x52d)]();_0x599388&&_0x599388[_0x22dd01(0x548)](_0x5f0e24||0x1);}}}}}else{_0x4b66c8=_0x2927e0['toLowerCase']()[_0x22dd01(0x285)]();switch(_0xb97760){case'none':return this[_0x22dd01(0x5c9)]();case _0x22dd01(0x3b5):return this[_0x22dd01(0x4f6)]();case _0x22dd01(0x2d1):return this[_0x22dd01(0x2ef)]();case _0x22dd01(0x52a):return this['weatherEffectsSnow']();case _0x22dd01(0x3a0):return this[_0x22dd01(0x5d4)]();case'firestorm':return this[_0x22dd01(0x3a2)]();case _0x22dd01(0x340):return this['weatherEffectsFireflies']();case _0x22dd01(0x331):return this[_0x22dd01(0x281)]();case _0x22dd01(0x1d7):return this['weatherEffectsHeatClouds']();case _0x22dd01(0x314):return this[_0x22dd01(0x1b2)]();case'flamehaze':return this[_0x22dd01(0x237)]();case _0x22dd01(0x21c):return this[_0x22dd01(0x5a7)]();case _0x22dd01(0x5d2):case _0x22dd01(0x1e6):return this[_0x22dd01(0x25f)]();case'blizzard':return this[_0x22dd01(0x23e)]();case _0x22dd01(0x556):return this['weatherEffectsSnowflakes']();case _0x22dd01(0x248):return this[_0x22dd01(0x5b9)]();case _0x22dd01(0x604):return this[_0x22dd01(0x515)]();case'diamonddust':return this[_0x22dd01(0x225)]();case'aurora':return this[_0x22dd01(0x493)]();case _0x22dd01(0x212):return this[_0x22dd01(0x4c0)]();case _0x22dd01(0x4b6):return this[_0x22dd01(0x2ae)]();case _0x22dd01(0x1b9):return this[_0x22dd01(0x48b)]();case _0x22dd01(0x3f5):case'thundersurge':case _0x22dd01(0x3e2):case'plasmasurge':case'discharge':return this[_0x22dd01(0x3c1)]();case _0x22dd01(0x1bb):return this[_0x22dd01(0x571)]();case'thunderclouds':return this['weatherEffectsThunderclouds']();case _0x22dd01(0x1ce):return this['weatherEffectsUltravioletBeams']();case _0x22dd01(0x1f6):case'staticcharge':return this['weatherEffectsSpiderbolt']();case _0x22dd01(0x511):return this[_0x22dd01(0x5b6)]();case _0x22dd01(0x24c):return this['weatherEffectsRainClouds']();case _0x22dd01(0x437):case _0x22dd01(0x2f0):return this['weatherEffectsMist']();case _0x22dd01(0x423):return this[_0x22dd01(0x1d9)]();case _0x22dd01(0x223):return this['weatherEffectsSoapBubbles']();case'cloudburst':return this[_0x22dd01(0x4b8)]();case _0x22dd01(0x206):return this[_0x22dd01(0x265)]();case _0x22dd01(0x1f3):return this['weatherEffectsSandstorm']();case _0x22dd01(0x5d8):return this['weatherEffectsPollutionClouds']();case _0x22dd01(0x46a):return this['weatherEffectsDustStorm']();case _0x22dd01(0x4c7):return this[_0x22dd01(0x4ea)]();case'sandclouds':return this[_0x22dd01(0x5d9)]();case'crumblingcave':return this[_0x22dd01(0x21f)]();case'toxicgas':return this[_0x22dd01(0x4dc)]();case _0x22dd01(0x2b9):return this[_0x22dd01(0x4f5)]();case _0x22dd01(0x601):return this['weatherEffectsRadioactiveBeams']();case'housedust':return this[_0x22dd01(0x4ac)]();case _0x22dd01(0x59d):return this[_0x22dd01(0x3e1)]();case _0x22dd01(0x387):return this['weatherEffectsCherryBlossoms']();case _0x22dd01(0x298):return this['weatherEffectsGreenLeaves']();case'dandelionseeds':return this[_0x22dd01(0x1e7)]();case _0x22dd01(0x202):return this[_0x22dd01(0x52e)]();case _0x22dd01(0x2f1):return this[_0x22dd01(0x5be)]();case _0x22dd01(0x550):return this[_0x22dd01(0x3ca)]();case _0x22dd01(0x419):return this[_0x22dd01(0x319)]();case'xtreme':return this['weatherEffectsXtremeSpeed']();case'balloons':return this['weatherEffectsBalloons']();case _0x22dd01(0x5db):return this[_0x22dd01(0x35b)]();case _0x22dd01(0x26e):return this['weatherEffectsPastelBrume']();case _0x22dd01(0x2b1):return this[_0x22dd01(0x364)]();case _0x22dd01(0x346):return this[_0x22dd01(0x354)]();case _0x22dd01(0x3c5):return this[_0x22dd01(0x385)]();case _0x22dd01(0x359):return this['weatherEffectsConfetti']();case _0x22dd01(0x5ad):return this[_0x22dd01(0x1b2)]();case'prismbeams':case _0x22dd01(0x2c0):return this[_0x22dd01(0x51c)]();case _0x22dd01(0x513):return this['weatherEffectsLensFlare']();case _0x22dd01(0x2a3):return this[_0x22dd01(0x5f9)]();case'ashfall':return this['weatherEffectsAshfall']();case _0x22dd01(0x2c7):return this[_0x22dd01(0x1be)]();case _0x22dd01(0x497):return this[_0x22dd01(0x1cd)]();case _0x22dd01(0x375):return this[_0x22dd01(0x371)]();case _0x22dd01(0x32d):return this[_0x22dd01(0x3f6)]();case'moonbeams':return this[_0x22dd01(0x4de)]();case'smokecloud':return this[_0x22dd01(0x36e)]();case'shadowburst':return this['weatherEffectsShadowBurst']();case'fumes':return this[_0x22dd01(0x1b6)]();case _0x22dd01(0x3ba):return this['weatherEffectsSparkle']();case _0x22dd01(0x57b):return this[_0x22dd01(0x504)]();case'icons':case _0x22dd01(0x465):case _0x22dd01(0x1c3):case'slow_icons_3':case _0x22dd01(0x2a1):case _0x22dd01(0x45b):case _0x22dd01(0x28c):case _0x22dd01(0x528):case _0x22dd01(0x443):case _0x22dd01(0x5da):case _0x22dd01(0x321):case'medium_icons_1':case _0x22dd01(0x242):case _0x22dd01(0x579):case _0x22dd01(0x2c8):case'medium_icons_5':case _0x22dd01(0x339):case _0x22dd01(0x3de):case _0x22dd01(0x1b5):case _0x22dd01(0x33a):case _0x22dd01(0x4c8):case _0x22dd01(0x5d1):case'fast_icons_2':case _0x22dd01(0x516):case _0x22dd01(0x3a9):case _0x22dd01(0x25b):case _0x22dd01(0x410):case _0x22dd01(0x353):case'fast_icons_8':case _0x22dd01(0x534):case _0x22dd01(0x5f4):return this[_0x22dd01(0x31a)]();default:return this[_0x22dd01(0x56f)]();}}}this[_0x22dd01(0x39c)]();},Sprite_WeatherParticle[_0x3cb96a(0x356)]['updatePositionTrajectorySpin']=function(){const _0x3cc680=_0x3cb96a;this[_0x3cc680(0x310)]+=this[_0x3cc680(0x471)],this[_0x3cc680(0x3c6)]+=this[_0x3cc680(0x310)];},Sprite_WeatherParticle[_0x3cb96a(0x356)][_0x3cb96a(0x1ea)]=function(){const _0x1feb2b=_0x3cb96a,_0xc1b736=Graphics[_0x1feb2b(0x1f8)]+this[_0x1feb2b(0x449)],_0x558dfa=Graphics[_0x1feb2b(0x1f8)]+this[_0x1feb2b(0x27d)];this['ax']+=Math[_0x1feb2b(0x31f)](_0xc1b736*this[_0x1feb2b(0x360)])*this[_0x1feb2b(0x316)]/0x2,this['ay']+=Math[_0x1feb2b(0x572)](_0x558dfa*this[_0x1feb2b(0x1f7)])*this[_0x1feb2b(0x344)]/0x2;},Spriteset_Base['prototype'][_0x3cb96a(0x255)]=function(){const _0x2b4860=_0x3cb96a;this[_0x2b4860(0x448)]?this[_0x2b4860(0x500)]=this['_upperWeatherContainer'][_0x2b4860(0x5c5)][0x0]:(this[_0x2b4860(0x500)]=new Weather(),this[_0x2b4860(0x436)](this[_0x2b4860(0x500)]));},Spriteset_Base[_0x3cb96a(0x356)]['createNewWeatherLayers']=function(_0xaa4351,_0x16517c){const _0x1a3673=_0x3cb96a;if(!_0xaa4351)return;const _0x28d742=Weather[_0x1a3673(0x23f)];for(let _0x26bb82=0x1;_0x26bb82<=_0x28d742;_0x26bb82++){if(_0x1a3673(0x5b8)!==_0x1a3673(0x5b8)){const _0x42f957=this[_0x1a3673(0x3b1)];return _0x42f957[_0x36e4bc[_0x1a3673(0x2db)](_0x5b8c96['random']()*_0x42f957[_0x1a3673(0x59e)])];}else{const _0x4430b0=VisuMZ['WeatherEffects'][_0x1a3673(0x454)](_0x26bb82,_0x16517c);_0xaa4351[_0x1a3673(0x436)](_0x4430b0);}}},Spriteset_Base[_0x3cb96a(0x356)]['createLowerWeatherLayer']=function(){const _0x30b8d9=_0x3cb96a;this[_0x30b8d9(0x3b2)]=new Sprite(),this[_0x30b8d9(0x214)](this['_lowerWeatherContainer'],!![]),this[_0x30b8d9(0x5f6)]['addChild'](this[_0x30b8d9(0x3b2)]);},Spriteset_Base[_0x3cb96a(0x356)][_0x3cb96a(0x337)]=function(){const _0x1272cd=_0x3cb96a;this[_0x1272cd(0x448)]=new Sprite(),this[_0x1272cd(0x214)](this[_0x1272cd(0x448)],![]),this[_0x1272cd(0x436)](this[_0x1272cd(0x448)]);},Spriteset_Base['prototype'][_0x3cb96a(0x282)]=function(){const _0x45e5b5=_0x3cb96a;this[_0x45e5b5(0x335)](!![]),this['updateWeatherLayers'](![]);},Spriteset_Base[_0x3cb96a(0x356)][_0x3cb96a(0x335)]=function(_0x21b221){const _0x1a84e5=_0x3cb96a,_0x24e6da=_0x21b221?this[_0x1a84e5(0x3b2)]:this[_0x1a84e5(0x448)];if(!_0x24e6da)return;for(const _0x3fd45a of _0x24e6da[_0x1a84e5(0x5c5)]){if(!_0x3fd45a)continue;_0x3fd45a[_0x1a84e5(0x5af)](),_0x3fd45a[_0x1a84e5(0x22b)]();}},VisuMZ[_0x3cb96a(0x5b2)]['Spriteset_Map_createTilemap']=Spriteset_Map[_0x3cb96a(0x356)][_0x3cb96a(0x290)],Spriteset_Map[_0x3cb96a(0x356)]['createTilemap']=function(){const _0x39ea02=_0x3cb96a;this[_0x39ea02(0x1cb)](),VisuMZ[_0x39ea02(0x5b2)][_0x39ea02(0x41d)][_0x39ea02(0x3b3)](this),this[_0x39ea02(0x337)]();},Spriteset_Map[_0x3cb96a(0x356)][_0x3cb96a(0x255)]=function(){const _0x163b20=_0x3cb96a;Spriteset_Base[_0x163b20(0x356)]['createWeather'][_0x163b20(0x3b3)](this);},Spriteset_Map[_0x3cb96a(0x356)][_0x3cb96a(0x282)]=function(){const _0x34e63b=_0x3cb96a;Spriteset_Base[_0x34e63b(0x356)][_0x34e63b(0x282)][_0x34e63b(0x3b3)](this);},VisuMZ[_0x3cb96a(0x5b2)]['Spriteset_Battle_createBattleback']=Spriteset_Battle[_0x3cb96a(0x356)][_0x3cb96a(0x358)],Spriteset_Battle['prototype']['createBattleback']=function(){const _0xee2346=_0x3cb96a;this['createLowerWeatherLayer'](),VisuMZ['WeatherEffects'][_0xee2346(0x5a6)][_0xee2346(0x3b3)](this);},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x21d)]=Spriteset_Battle[_0x3cb96a(0x356)][_0x3cb96a(0x240)],Spriteset_Battle[_0x3cb96a(0x356)][_0x3cb96a(0x240)]=function(){const _0x37c643=_0x3cb96a;VisuMZ[_0x37c643(0x5b2)][_0x37c643(0x21d)]['call'](this),this[_0x37c643(0x337)]();},Spriteset_Battle['prototype']['createLowerWeatherLayer']=function(){const _0x174f99=_0x3cb96a;Spriteset_Base[_0x174f99(0x356)][_0x174f99(0x1cb)][_0x174f99(0x3b3)](this),this['_baseSprite'][_0x174f99(0x436)](this[_0x174f99(0x3b2)]);},Spriteset_Battle['prototype'][_0x3cb96a(0x337)]=function(){const _0x4d0887=_0x3cb96a;Spriteset_Base[_0x4d0887(0x356)]['createUpperWeatherLayer'][_0x4d0887(0x3b3)](this),this[_0x4d0887(0x5f6)][_0x4d0887(0x436)](this[_0x4d0887(0x448)]);},Spriteset_Battle[_0x3cb96a(0x356)]['createWeather']=function(){const _0x3c488f=_0x3cb96a;Imported['VisuMZ_2_VisualBattleEnv']&&(_0x3c488f(0x32c)===_0x3c488f(0x32c)?this[_0x3c488f(0x2dc)]():_0x626fb7[_0x3c488f(0x5fc)](_0x662125,!![],_0x333f01)),Spriteset_Base[_0x3c488f(0x356)][_0x3c488f(0x255)]['call'](this);},Spriteset_Battle[_0x3cb96a(0x356)][_0x3cb96a(0x282)]=function(){const _0x544c07=_0x3cb96a;Spriteset_Base[_0x544c07(0x356)][_0x544c07(0x282)]['call'](this);},VisuMZ['WeatherEffects'][_0x3cb96a(0x3bf)]=Window_Options['prototype'][_0x3cb96a(0x397)],Window_Options['prototype'][_0x3cb96a(0x397)]=function(){const _0x47c313=_0x3cb96a;VisuMZ[_0x47c313(0x5b2)][_0x47c313(0x3bf)][_0x47c313(0x3b3)](this),this['addWeatherDensityCommand']();},Window_Options['prototype'][_0x3cb96a(0x54a)]=function(){const _0x5571da=_0x3cb96a;if(!VisuMZ[_0x5571da(0x5b2)][_0x5571da(0x2c4)][_0x5571da(0x58f)][_0x5571da(0x361)])return;const _0x3250e8=TextManager[_0x5571da(0x3d9)],_0xfa9401=_0x5571da(0x3d9);this[_0x5571da(0x342)](_0x3250e8,_0xfa9401);},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x1c2)]=Window_Options[_0x3cb96a(0x356)][_0x3cb96a(0x3ae)],Window_Options[_0x3cb96a(0x356)]['isVolumeSymbol']=function(_0x172e3c){const _0x35d1dc=_0x3cb96a;if(_0x172e3c==='weatherDensity')return!![];return VisuMZ['WeatherEffects'][_0x35d1dc(0x1c2)][_0x35d1dc(0x3b3)](this,_0x172e3c);},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x2d7)]=function(_0x43bd46){return _0x43bd46*(Math['PI']/0xb4);},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x329)]=function(_0x166a3a){return _0x166a3a*(0xb4/Math['PI']);},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x195)]=function(_0x680992){const _0x38831c=_0x3cb96a;return Math[_0x38831c(0x5e6)](_0x680992+0x1)+Math[_0x38831c(0x5e6)](_0x680992+0x1)-_0x680992;},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x2ab)]=function(_0x14ea32){const _0x655b70=_0x3cb96a;return Math['random']()*_0x14ea32+Math[_0x655b70(0x1fb)]()*_0x14ea32-_0x14ea32;},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x374)]=function(){const _0xb875a7=_0x3cb96a;this[_0xb875a7(0x434)]=[],this[_0xb875a7(0x2c3)]=[];const _0x5995c1=Weather['MAX_LAYERS'];let _0x5caade=!![];for(let _0x50d695=0x1;_0x50d695<=_0x5995c1;_0x50d695++){if(_0xb875a7(0x524)===_0xb875a7(0x524)){const _0x685ead=new Weather();_0x685ead[_0xb875a7(0x4ba)](_0x50d695,_0x5caade),this[_0xb875a7(0x434)][_0xb875a7(0x2fb)](_0x685ead);}else{if(this[_0xb875a7(0x39f)]&&this[_0xb875a7(0x39f)][_0xb875a7(0x59e)]>=_0x1e1048[_0xb875a7(0x292)]){const _0x4c6b8d=this[_0xb875a7(0x39f)];return _0x4c6b8d[_0x23d503[_0xb875a7(0x2db)](_0x10061d[_0xb875a7(0x1fb)]()*_0x4c6b8d['length'])];}const _0x2df742=_0x5a5285[_0xb875a7(0x50d)],_0x2dd8e9=1.3;let _0x33b786=_0x14b23d['adjustHexColor'](_0x2df742[_0x58d21f['floor'](_0x4e0a39[_0xb875a7(0x1fb)]()*_0x2df742[_0xb875a7(0x59e)])],_0x2dd8e9),_0xb3cd0=_0x418d69['adjustHexColor'](_0x2df742[_0x3d74c8[_0xb875a7(0x2db)](_0x46a99c[_0xb875a7(0x1fb)]()*_0x2df742[_0xb875a7(0x59e)])],_0x2dd8e9),_0x9a0bd8=_0x319230['adjustHexColor'](_0x2df742[_0x3d16ae['floor'](_0x3aef12['random']()*_0x2df742[_0xb875a7(0x59e)])],_0x2dd8e9);const _0x315efa=new _0x43f241(0x1f4,0x1f4);_0x315efa['drawCloud'](0xfa,0x15e,0x4b,_0x33b786,0x4,0x14),_0x315efa[_0xb875a7(0x35d)](0xfa,0xfa,0x64,_0x9a0bd8,0x8,0x19),_0x315efa[_0xb875a7(0x35d)](0xfa,0xfa,0x3c,_0xb3cd0,0x4,0x14);const _0x1db8f0=_0x315efa[_0xb875a7(0x197)],_0x1d6b68=_0x315efa[_0xb875a7(0x27f)],_0x1691df=0x4;let _0x2c49d4=0x10;while(_0x2c49d4--){const _0x1638d2=_0x26584f[_0xb875a7(0x5e6)](_0x1db8f0-_0x1691df*0x2)+_0x1691df,_0x4ec7ed=_0x491dff[_0xb875a7(0x5e6)](_0x1d6b68-_0x1691df*0x2)+_0x1691df;let _0x59d8b9=_0x2df742[_0x39b6ae[_0xb875a7(0x2db)](_0x5ab6d1['random']()*_0x2df742[_0xb875a7(0x59e)])];_0x59d8b9=_0x5c29cf[_0xb875a7(0x29d)](_0x59d8b9,_0x2dd8e9),_0x315efa[_0xb875a7(0x546)]=_0x36471d[_0xb875a7(0x5e6)](0x40)+0xc0,_0x315efa['drawStar'](_0x1638d2,_0x4ec7ed,_0x59d8b9,_0x59d8b9,0x4,_0x1691df,_0x1691df/0x2);}_0x315efa[_0xb875a7(0x275)]=![];if(_0x5e85ac['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x3a3a9a[_0xb875a7(0x582)]('sandstorm');return this['_cached_WeatherEffects_Sleet']=this['_cached_WeatherEffects_Sleet']||[],this[_0xb875a7(0x39f)][_0xb875a7(0x2fb)](_0x315efa),_0x315efa;}}_0x5caade=![];for(let _0x210f2c=0x1;_0x210f2c<=_0x5995c1;_0x210f2c++){const _0x532a2f=new Weather();_0x532a2f['setLayerData'](_0x210f2c,_0x5caade),this['_upperLayerSprites'][_0xb875a7(0x2fb)](_0x532a2f);}},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x454)]=function(_0x555b45,_0x3185d9){const _0x274c68=_0x3cb96a;if(this[_0x274c68(0x434)]===undefined)this[_0x274c68(0x374)]();if(this[_0x274c68(0x2c3)]===undefined)this[_0x274c68(0x374)]();_0x555b45=(_0x555b45||0x1)[_0x274c68(0x482)](0x1,Weather[_0x274c68(0x23f)]);const _0x1b34dd=_0x555b45-0x1;if(_0x3185d9)return this[_0x274c68(0x434)][_0x1b34dd];else{if(_0x274c68(0x4df)===_0x274c68(0x271)){if(this[_0x274c68(0x222)])return this['_cached_WeatherEffects_RainbowArch'];const _0x42c234=_0x160493[_0x274c68(0x2d0)](_0x5e673d['advanced'][_0x274c68(0x39d)],_0x4b4e8f['advanced'][_0x274c68(0x45e)])||0x1,_0x3ff389=new _0x4c4bbe(_0x42c234,_0x42c234);_0x3ff389[_0x274c68(0x19f)](_0x42c234/0x2,_0x42c234/0x2,_0x42c234/0x2),_0x3ff389[_0x274c68(0x275)]=![];if(_0x2e1d3f[_0x274c68(0x36f)])_0x21da7a[_0x274c68(0x582)](_0x274c68(0x206));return this['_cached_WeatherEffects_RainbowArch']=_0x3ff389,_0x3ff389;}else return this[_0x274c68(0x2c3)][_0x1b34dd];}},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x59c)]=function(){const _0x311d4a=_0x3cb96a;return{'type':'none','power':0x0,'powerTarget':0x0,'duration':0x0,'sprite':{'lifespan':0x3c,'lifespanVariance':0x0,'spawnLocationX':_0x311d4a(0x1fb),'spawnOffsetX':0x0,'spawnLocationY':_0x311d4a(0x1fb),'spawnOffsetY':0x0,'mapBound':!![],'opacity':0xff,'opacityVariance':0x0,'opacityEasingType':_0x311d4a(0x287),'opacityFadeInTime':0x10,'scale':0x1,'scaleVariance':0x0,'scaleRatioX':0x1,'scaleRatioY':0x1,'totalMinimum':0x14,'totalPerPower':0x5},'dimmer':{'color':_0x311d4a(0x4b0),'opacityMinimum':0x0,'opacityPerPower':0x0},'image':{'generated':!![],'generatedWeight':0x1,'icons':[],'iconsWeight':0x10,'pictures':[],'picturesWeight':0x10,'blendMode':0x0,'hueVariations':[],'toneVariations':[]},'flags':{'alwaysVisiblePlayer':![],'flatFlutter':![],'hueSwayRange':0x0,'hueSwaySpeed':0.01,'longevity':![],'respawnCommonEventID':0x0,'respawnDelayMin':0x0,'respawnDelayRngPerPower':0x0,'scaleIn':0x1,'scaleInDuration':0xa,'scaleOut':0x1,'scaleOutDuration':0xa,'fireworksFinish':![],'sparkleFinish':![]},'trajectory':{'type':'straight','lockedID':0x0,'lockedOffsetX':0x0,'lockedOffsetY':0x0,'speed':0x1,'speedVariance':0x0,'angle':0x0,'alignAngle':!![],'angleOffset':0x0,'angleVariance':0x0,'angleArc':0x0,'angleSwayRange':0x0,'angleSwaySpeed':0.01,'spinSpeed':0x0,'spinSpeedVariance':0x0,'reverseSpin':![],'xSwayRange':0x0,'xSwaySpeed':0.01,'ySwayRange':0x0,'ySwaySpeed':0.01}};},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x215)]=function(_0x564292){const _0x27726b=_0x3cb96a;if(!_0x564292)return;_0x564292[_0x27726b(0x42f)]['opacity']=0xbe,_0x564292[_0x27726b(0x42f)][_0x27726b(0x235)]=0x1e;if(_0x564292[_0x27726b(0x5ca)]===_0x27726b(0x3b5))_0x564292['sprite'][_0x27726b(0x33c)]=0x24,_0x564292[_0x27726b(0x42f)][_0x27726b(0x1bf)]=0x82,_0x564292[_0x27726b(0x42f)][_0x27726b(0x235)]=0x1e,_0x564292[_0x27726b(0x42f)][_0x27726b(0x43b)]=0x50,_0x564292[_0x27726b(0x42f)][_0x27726b(0x2ee)]=0x14,(_0x564292[_0x27726b(0x4e0)][_0x27726b(0x1a7)]=_0x27726b(0x51a),_0x564292['dimmer'][_0x27726b(0x459)]=0x6,_0x564292[_0x27726b(0x320)][_0x27726b(0x39b)]=0xc),_0x564292[_0x27726b(0x320)]['angle']=0xff,_0x564292[_0x27726b(0x320)]['angleVariance']=0x5;else{if(_0x564292[_0x27726b(0x5ca)]===_0x27726b(0x2d1))_0x564292[_0x27726b(0x42f)][_0x27726b(0x33c)]=0x1c,_0x564292[_0x27726b(0x42f)][_0x27726b(0x1bf)]=0x82,_0x564292[_0x27726b(0x42f)][_0x27726b(0x235)]=0x1e,_0x564292[_0x27726b(0x42f)][_0x27726b(0x43b)]=0x78,_0x564292[_0x27726b(0x42f)][_0x27726b(0x2ee)]=0x28,(_0x564292[_0x27726b(0x4e0)][_0x27726b(0x1a7)]=_0x27726b(0x204),_0x564292['dimmer'][_0x27726b(0x459)]=0x6,_0x564292[_0x27726b(0x320)][_0x27726b(0x39b)]=0x10),_0x564292[_0x27726b(0x320)][_0x27726b(0x3c6)]=0xf5,_0x564292[_0x27726b(0x320)][_0x27726b(0x252)]=0xa;else _0x564292[_0x27726b(0x5ca)]===_0x27726b(0x52a)&&(_0x564292[_0x27726b(0x42f)]['lifespan']=0x78,_0x564292[_0x27726b(0x42f)][_0x27726b(0x1bf)]=0xa0,_0x564292['sprite']['opacityVariance']=0x14,_0x564292[_0x27726b(0x42f)][_0x27726b(0x43b)]=0x96,_0x564292[_0x27726b(0x42f)][_0x27726b(0x2ee)]=0x28,(_0x564292[_0x27726b(0x4e0)]['color']='#888888',_0x564292[_0x27726b(0x4e0)][_0x27726b(0x459)]=0x6,_0x564292[_0x27726b(0x320)][_0x27726b(0x39b)]=0x2),_0x564292[_0x27726b(0x320)]['angle']=0xdc,_0x564292[_0x27726b(0x320)][_0x27726b(0x252)]=0xf,_0x564292[_0x27726b(0x320)][_0x27726b(0x357)]=0x2,_0x564292['trajectory'][_0x27726b(0x51d)]=0.01);}},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x29c)]=function(_0x4e9cd9){const _0x44dbb9=_0x3cb96a,_0x375744=VisuMZ[_0x44dbb9(0x5b2)]['newLayer']();this[_0x44dbb9(0x447)](_0x375744,_0x4e9cd9),this[_0x44dbb9(0x19e)](_0x375744,_0x4e9cd9),this[_0x44dbb9(0x2f5)](_0x375744,_0x4e9cd9),this[_0x44dbb9(0x574)](_0x375744,_0x4e9cd9),this[_0x44dbb9(0x338)](_0x375744,_0x4e9cd9);},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x1d8)]=function(){const _0x4e147e=_0x3cb96a;return![];if(!$gameTemp[_0x4e147e(0x2b8)]())return![];return Input['isPressed'](_0x4e147e(0x1ff))&&Input[_0x4e147e(0x19a)](_0x4e147e(0x2bd));},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x447)]=function(_0x56deef,_0x3efac5){const _0x219fa1=_0x3cb96a;_0x56deef[_0x219fa1(0x5ca)]=_0x3efac5['type']||_0x219fa1(0x427),_0x56deef['powerTarget']=(_0x3efac5[_0x219fa1(0x315)]||0x1)['clamp'](0x1,0x9),this['isDebugAllOption']()&&('uwCgM'===_0x219fa1(0x4d9)?_0x56deef[_0x219fa1(0x315)]=0x9:(_0x48fc65[_0x219fa1(0x50a)](_0x3c7a5c,_0x36dbe9),_0x25d849[_0x219fa1(0x5ca)]='steam',_0x44b4cd['WeatherEffects'][_0x219fa1(0x29c)](_0x1113b5)));},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x19e)]=function(_0x2224ae,_0x3400d2){const _0x39feaf=_0x3cb96a,_0x5a5ab4=['sprite',_0x39feaf(0x4e0),_0x39feaf(0x3b4),'flags',_0x39feaf(0x320)];for(const _0x229b27 of _0x5a5ab4){if(!_0x2224ae[_0x229b27])continue;if(!_0x3400d2[_0x39feaf(0x458)][_0x229b27])continue;this[_0x39feaf(0x3a7)](_0x2224ae[_0x229b27],_0x3400d2[_0x39feaf(0x458)][_0x229b27]);}},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x3a7)]=function(_0x16aec1,_0x535598){for(const _0x3a04c4 in _0x16aec1){if(_0x535598[_0x3a04c4]===undefined)continue;_0x16aec1[_0x3a04c4]=_0x535598[_0x3a04c4];}},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x2f5)]=function(_0x332e94,_0x2598bf){const _0x449c89=_0x3cb96a;if(_0x332e94[_0x449c89(0x320)][_0x449c89(0x5ca)]===_0x449c89(0x2d5)&&_0x332e94[_0x449c89(0x320)][_0x449c89(0x40a)]<=0x0){if(_0x449c89(0x5c3)!==_0x449c89(0x5c3)){const _0x4a358a=this[_0x449c89(0x20a)](_0x6e1854,_0x542b76);_0x4a358a[_0x449c89(0x33b)]=_0x3572a4||0x1,_0x4a358a[_0x449c89(0x315)]=(_0x4a358a[_0x449c89(0x315)]+_0x4e144c)['clamp'](0x1,0x9);}else{const _0x3ca1ae=$gameTemp[_0x449c89(0x52d)]();_0x332e94[_0x449c89(0x320)][_0x449c89(0x40a)]=_0x3ca1ae[_0x449c89(0x526)]();}}},VisuMZ[_0x3cb96a(0x5b2)]['applyPluginCmdSettingsLayers']=function(_0x5364de,_0x1f0941){const _0x1e2676=_0x3cb96a;let _0x568898=_0x1f0941[_0x1e2676(0x24b)][_0x1e2676(0x50b)](_0x25b8f2=>(Number(_0x25b8f2)||0x1)['clamp'](0x1,0xa)),_0x4c12bf=_0x1f0941['UpperLower'];_0x5364de[_0x1e2676(0x33b)]=_0x1f0941['duration']||0x1;if(this[_0x1e2676(0x1d8)]()){if(_0x1e2676(0x453)!=='UAzja')_0x568898=[0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa],_0x4c12bf=_0x1e2676(0x426);else{const _0x43e5bb=new _0x3f009(_0x41bc0b[_0x1e2676(0x5ab)],_0x48544b['iconHeight']);_0x43e5bb['fontSize']=0x1c,_0x43e5bb[_0x1e2676(0x43a)](_0x35600f,0x0,0x0,_0x43e5bb[_0x1e2676(0x197)],_0x43e5bb[_0x1e2676(0x27f)],_0x1e2676(0x2c9)),_0x43e5bb['_customModified']=![],this[_0x1e2676(0x37d)][_0x1e2676(0x2fb)](_0x43e5bb);}}for(const _0x53a62f of _0x568898){if(_0x1e2676(0x30d)===_0x1e2676(0x266)){const _0x1ea4fc=this[_0x1e2676(0x3d7)];_0x1ea4fc[_0x1e2676(0x1a5)](),_0x1ea4fc[_0x1e2676(0x3e6)](_0x414142-_0x38dff6,_0x43d2cf-_0x1f62e7);const _0x440e9d=0x168*(_0x4cba33['PI']/0xb4),_0xd947fb=_0xf8df99[_0x1e2676(0x5e6)](0x80),_0x1ec7ac=_0x1e2676(0x3dd)[_0x1e2676(0x5a3)](_0xd947fb),_0xfd1f38='rgba(128,%1,255,1)'[_0x1e2676(0x5a3)](_0xd947fb),_0x24112f=_0x1e2676(0x2e0)['format'](_0xd947fb),_0x52648f=_0x1e2676(0x5c1)[_0x1e2676(0x5a3)](_0xd947fb),_0x3a47e4=_0x1e2676(0x41e)[_0x1e2676(0x5a3)](_0xd947fb),_0x58840b=_0x1e2676(0x343)[_0x1e2676(0x5a3)](_0xd947fb),_0x21cb19=_0x1e2676(0x366)[_0x1e2676(0x5a3)](_0xd947fb),_0x1adf4e=_0x1e2676(0x429)[_0x1e2676(0x5a3)](_0xd947fb),_0x2f3301=_0x1ea4fc['createRadialGradient'](_0x163972,_0x589bfb,0xa,_0x349307,_0x3de53,_0x271f64);_0x2f3301[_0x1e2676(0x537)](0x0,_0x1ec7ac),_0x2f3301[_0x1e2676(0x537)](0.15,_0x1ec7ac),_0x2f3301[_0x1e2676(0x537)](0.25,_0xfd1f38),_0x2f3301['addColorStop'](0.3,_0xfd1f38),_0x2f3301[_0x1e2676(0x537)](0.4,_0x24112f),_0x2f3301[_0x1e2676(0x537)](0.45,_0x52648f),_0x2f3301[_0x1e2676(0x537)](0.5,_0x52648f),_0x2f3301[_0x1e2676(0x537)](0.55,_0x3a47e4),_0x2f3301[_0x1e2676(0x537)](0.6,_0x58840b),_0x2f3301[_0x1e2676(0x537)](0.65,_0x58840b),_0x2f3301[_0x1e2676(0x537)](0.75,_0x21cb19),_0x2f3301[_0x1e2676(0x537)](0.85,_0x1adf4e),_0x2f3301['addColorStop'](0.95,_0x1ec7ac),_0x2f3301[_0x1e2676(0x537)](0x1,_0x1ec7ac),_0x1ea4fc[_0x1e2676(0x45a)]=_0x2f3301,_0x1ea4fc['beginPath'](),_0x1ea4fc[_0x1e2676(0x494)](_0x2aa128,_0x28ab5a),_0x1ea4fc['lineTo'](_0x17133c,_0x11d426),_0x1ea4fc[_0x1e2676(0x336)](_0x5dda5a,_0x4ff534,_0x1d300e,0x0,_0x440e9d),_0x1ea4fc[_0x1e2676(0x1d4)](_0x37097f,_0x36bf1d),_0x1ea4fc[_0x1e2676(0x5bc)](),_0x1ea4fc[_0x1e2676(0x1aa)](),this[_0x1e2676(0x3a1)][_0x1e2676(0x4b1)]();}else[_0x1e2676(0x3c8),_0x1e2676(0x426)]['includes'](_0x4c12bf)&&$gameScreen[_0x1e2676(0x4a1)](_0x53a62f,![],_0x5364de),['lower','both']['includes'](_0x4c12bf)&&(_0x1e2676(0x308)===_0x1e2676(0x5a9)?(_0x18307b[_0x1e2676(0x50a)](_0x2b1dcf,_0x4762f7),_0x1ad68d[_0x1e2676(0x5ca)]=_0x1e2676(0x2b9),_0x1f70c1[_0x1e2676(0x5b2)]['applyPluginCmdSettings'](_0x53c12f)):$gameScreen[_0x1e2676(0x4a1)](_0x53a62f,!![],_0x5364de));}},VisuMZ[_0x3cb96a(0x5b2)][_0x3cb96a(0x338)]=function(_0x1c8be5,_0x2699f7){const _0x5215cf=_0x3cb96a;if(!_0x2699f7[_0x5215cf(0x588)])return;const _0x477fbe=$gameTemp[_0x5215cf(0x52d)]();_0x477fbe&&_0x477fbe[_0x5215cf(0x548)](_0x1c8be5[_0x5215cf(0x33b)]||0x1);};