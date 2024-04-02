export default async function ({ addon }) {
    const oScratchBlocks = await addon.tab.traps.getBlockly();
    const ScratchBlocks = oScratchBlocks;
    const source = ScratchBlocks.mainWorkspace.options.pathToMedia;
    const svg = addon.self.dir + "/svg/"
    function apply(block, msg, arg, categ, ext) {
        ScratchBlocks.Blocks[block] = { init: function () { this.jsonInit({ type: ScratchBlocks.Msg[block.toUpperCase()], message0: msg, args0: arg, category: ScratchBlocks.Categories[categ], extensions: ext }) } }
    }
    function apply1(block, msg, arg, categ, ext) {
        ScratchBlocks.Blocks[block] = { init: function () { this.jsonInit({ type: ScratchBlocks.Msg[block.toUpperCase()], message0: msg, args0: arg, category: ScratchBlocks.Categories[categ], extensions: ext, checkboxInFlyout: true }) } }
    }
    function apl() {
        //motion
        function motion() {
            apply("motion_movesteps", "%1 %2", [
                { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                { type: "input_value", name: "STEPS" }
            ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_turnright", "%1 %2°", [
                { type: "field_image", src: source + "rotate-right.svg", width: 24, height: 24 },
                { type: "input_value", name: "DEGREES" }
            ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_turnleft", "%1 %2°", [
                { type: "field_image", src: source + "rotate-left.svg", width: 24, height: 24 },
                { type: "input_value", name: "DEGREES" }
            ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_gotoxy", "%1 %2 %3", [
                { type: "field_image", src: svg + "move.svg", width: 24, height: 24 },
                { type: "input_value", name: "X" },
                { type: "input_value", name: "Y" }
            ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_goto", "%1 %2", [
                { type: "field_image", src: svg + "move.svg", width: 24, height: 24 },
                { "type": "input_value", "name": "TO" },
            ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_glidesecstoxy", "%1 %2 %3 %4 %5", [
                { type: "field_image", src: svg + "arrow_down_right.svg", width: 24, height: 24 },
                { "type": "input_value", "name": "SECS" },
                { type: "field_image", src: svg + "clock.svg", width: 24, height: 24 },
                { "type": "input_value", "name": "X" },
                { "type": "input_value", "name": "Y" },
            ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_glideto", "%1 %2 %3 %4", [
                { type: "field_image", src: svg + "arrow_down_right.svg", width: 24, height: 24 },
                { "type": "input_value", "name": "SECS" },
                { type: "field_image", src: svg + "clock.svg", width: 24, height: 24 },
                { "type": "input_value", "name": "TO" }
            ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_pointindirection", "%1 %2",
                [
                    { type: "field_image", src: svg + "direction.svg", width: 24, height: 24 },
                    { type: "input_value", name: "DIRECTION" }
                ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_pointtowards", "%1 %2",
                [
                    { type: "field_image", src: svg + "direction.svg", width: 24, height: 24 },
                    { type: "input_value", name: "TOWARDS" }
                ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_changexby", "%1 %2 %3",
                [
                    { type: "field_image", src: svg + "fig/x.svg", width: 24, height: 24 },
                    { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                    { type: "input_value", name: "DX" }
                ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_setx", "%1 %2",
                [
                    { type: "field_image", src: svg + "fig/x.svg", width: 24, height: 24 },
                    { type: "input_value", name: "X" }
                ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_changeyby", "%1 %2 %3",
                [
                    { type: "field_image", src: svg + "fig/y.svg", width: 24, height: 24 },
                    { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                    { type: "input_value", name: "DY" }
                ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_sety", "%1 %2",
                [
                    { type: "field_image", src: svg + "fig/y.svg", width: 24, height: 24 },
                    { type: "input_value", name: "Y" }
                ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_ifonedgebounce", "%1",
                [
                    { type: "field_image", src: svg + "bounce.svg", width: 24, height: 24 }
                ], "motion", ["colours_motion", "shape_statement"]);

            apply("motion_setrotationstyle", "%1 %2",
                [
                    { type: "field_image", src: svg + "direction.svg", width: 24, height: 24 },
                    {
                        "type": "field_dropdown",
                        "name": "STYLE",
                        "options": [
                            [ScratchBlocks.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT, 'left-right'],
                            [ScratchBlocks.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE, 'don\'t rotate'],
                            [ScratchBlocks.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND, 'all around']
                        ]
                    }
                ], "motion", ["colours_motion", "shape_statement"]);
            apply1("motion_xposition", "%1 %2",
                [
                    { type: "field_image", src: svg + "move.svg", width: 24, height: 24 },
                    { type: "field_image", src: svg + "fig/x.svg", width: 24, height: 24 }
                ], "motion", ["colours_motion", "output_number"]);

            apply1("motion_yposition", "%1 %2",
                [
                    { type: "field_image", src: svg + "move.svg", width: 24, height: 24 },
                    { type: "field_image", src: svg + "fig/y.svg", width: 24, height: 24 }
                ], "motion", ["colours_motion", "output_number"]);

            apply1("motion_direction", "%1",
                [
                    { type: "field_image", src: svg + "direction.svg", width: 24, height: 24 }
                ], "motion", ["colours_motion", "output_number"]);
        }
        //looks
        function looks() {
            apply("looks_sayforsecs", "%1 %2 %3 %4", [
                { type: "field_image", src: svg + "speech_bubble.svg", width: 24, height: 24 },
                { type: "input_value", name: "MESSAGE" },
                { type: "field_image", src: svg + "clock.svg", width: 24, height: 24 },
                { type: "input_value", name: "SECS" },
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_say", "%1 %2", [
                { type: "field_image", src: svg + "speech_bubble.svg", width: 24, height: 24 },
                { type: "input_value", name: "MESSAGE" }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_thinkforsecs", "%1 %2 %3 %4 %5", [
                { type: "field_image", src: svg + "speech_bubble.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "question_mark.svg", width: 24, height: 24 },
                { type: "input_value", name: "MESSAGE" },
                { type: "field_image", src: svg + "clock.svg", width: 24, height: 24 },
                { type: "input_value", name: "SECS" }
            ], "looks", ["colours_looks", "shape_statement"]);
            apply("looks_think", "%1 %2 %3", [
                { type: "field_image", src: svg + "speech_bubble.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "question_mark.svg", width: 24, height: 24 },
                { type: "input_value", name: "MESSAGE" }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_show", "%1", [
                { type: "field_image", src: svg + "eye.svg", width: 24, height: 24 }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_hide", "%1", [
                { type: "field_image", src: svg + "eye_off.svg", width: 24, height: 24 }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_switchcostumeto", "%1 %2", [
                { type: "field_image", src: svg + "change.svg", width: 24, height: 24 },
                { type: "input_value", name: "COSTUME" }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_nextcostume", "%1", [
                { type: "field_image", src: svg + "change.svg", width: 24, height: 24 }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_switchbackdropto", "%1 %2 %3", [
                { type: "field_image", src: svg + "change.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "stage.svg", width: 24, height: 24 },
                { type: "input_value", name: "BACKDROP" }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_nextbackdrop", "%1 %2", [
                { type: "field_image", src: svg + "stage.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "change.svg", width: 24, height: 24 }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_changesizeby", "%1 %2 %3", [
                { type: "field_image", src: svg + "size.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                { type: "input_value", name: "CHANGE" }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_setsizeto", "%1 %2\%", [
                { type: "field_image", src: svg + "size.svg", width: 24, height: 24 },
                { type: "input_value", name: "SIZE" }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_gotofrontback", "%1 %2", [
                { type: "field_image", src: svg + "layer.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown",
                    name: "FRONT_BACK",
                    options: [
                        [ScratchBlocks.Msg.LOOKS_GOTOFRONTBACK_FRONT, 'front'],
                        [ScratchBlocks.Msg.LOOKS_GOTOFRONTBACK_BACK, 'back']
                    ]
                }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_goforwardbackwardlayers", "%1 %2", [
                { type: "field_image", src: svg + "stage.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown",
                    name: "NUMBER_NAME",
                    options: [
                        [ScratchBlocks.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
                        [ScratchBlocks.Msg.LOOKS_NUMBERNAME_NAME, 'name']
                    ]
                }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply1("looks_backdropnumbername", "%1 %2", [
                { type: "field_image", src: svg + "layer.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown", name: "FORWARD_BACKWARD",
                    options: [
                        [ScratchBlocks.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD, 'forward'],
                        [ScratchBlocks.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD, 'backward']
                    ]
                }
            ], "looks", ["colours_looks", "output_number"]);

            apply1("looks_costumenumbername", "%1 %2", [
                { type: "field_image", src: svg + "square.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown", name: "FORWARD_BACKWARD",
                    options: [
                        [ScratchBlocks.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
                        [ScratchBlocks.Msg.LOOKS_NUMBERNAME_NAME, 'name']
                    ]
                }
            ], "looks", ["colours_looks", "output_number"]);

            apply1("looks_size", "%1", [
                { type: "field_image", src: svg + "size.svg", width: 24, height: 24 }
            ], "looks", ["colours_looks", "output_number"]);

            apply1("looks_backdropnumbername", "%1 %2", [
                { type: "field_image", src: svg + "layer.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown", name: "FORWARD_BACKWARD",
                    options: [
                        [ScratchBlocks.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
                        [ScratchBlocks.Msg.LOOKS_NUMBERNAME_NAME, 'name']
                    ]
                }
            ], "looks", ["colours_looks", "output_number"]);

            apply("looks_changeeffectby", "%1 %2 %3 %4", [
                { type: "field_image", src: svg + "spiral.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown", name: "EFFECT",
                    options: [
                        [ScratchBlocks.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_GHOST, 'GHOST']
                    ]
                },
                { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                { type: "input_value", name: "CHANGE" }
            ], "looks", ["colours_looks", "output_number"]);

            apply("looks_seteffectto", "%1 %2 %3", [
                { type: "field_image", src: svg + "spiral.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown", name: "EFFECT",
                    options: [
                        [ScratchBlocks.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_GHOST, 'GHOST']
                    ]
                },
                { type: "input_value", name: "VALUE" }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_changeeffectby", "%1 %2 %3 %4", [
                { type: "field_image", src: svg + "spiral.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown", name: "EFFECT",
                    options: [
                        [ScratchBlocks.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
                        [ScratchBlocks.Msg.LOOKS_EFFECT_GHOST, 'GHOST']
                    ]
                },
                { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                { type: "input_value", name: "CHANGE" }
            ], "looks", ["colours_looks", "shape_statement"]);

            apply("looks_cleargraphiceffects", "%1 %2", [
                { type: "field_image", src: svg + "spiral.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "x.svg", width: 24, height: 24 }
            ], "looks", ["colours_looks", "shape_statement"]);
        }
        //sound
        function sounds() {
            apply("sound_play", "%1 %2", [
                { type: "field_image", src: svg + "sound.svg", width: 24, height: 24 },
                { type: "input_value", name: "SOUND_MENU" }
            ], "sound", ["colours_sounds", "shape_statement"]);

            apply("sound_playuntildone", "%1 %2 %3", [
                { type: "field_image", src: svg + "sound.svg", width: 24, height: 24 },
                { type: "input_value", name: "SOUND_MENU" },
                { type: "field_image", src: svg + "arrow_down_right.svg", width: 24, height: 24 },
            ], "sound", ["colours_sounds", "shape_statement"]);

            apply("sound_stopallsounds", "%1 %2", [
                { type: "field_image", src: svg + "sound.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "x.svg", width: 24, height: 24 },
            ], "sound", ["colours_sounds", "shape_statement"]);

            apply("sound_changeeffectby", "%1 %2 %3 %4", [
                { type: "field_image", src: svg + "spiral.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown", name: "EFFECT",
                    options: [
                        [ScratchBlocks.Msg.SOUND_EFFECTS_PITCH, 'PITCH'],
                        [ScratchBlocks.Msg.SOUND_EFFECTS_PAN, 'PAN']
                    ]
                },
                { type: "input_value", name: "VALUE" },
            ], "sound", ["colours_sounds", "shape_statement"]);

            apply("sound_seteffectto", "%1 %2 %3", [
                { type: "field_image", src: svg + "spiral.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown", name: "EFFECT",
                    options: [
                        [ScratchBlocks.Msg.SOUND_EFFECTS_PITCH, 'PITCH'],
                        [ScratchBlocks.Msg.SOUND_EFFECTS_PAN, 'PAN']
                    ]
                },
                { type: "input_value", name: "VALUE" },
            ], "sound", ["colours_sounds", "shape_statement"]);
            apply("sound_cleareffects", "%1 %2", [
                { type: "field_image", src: svg + "spiral.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "x.svg", width: 24, height: 24 }
            ], "sound", ["colours_sounds", "shape_statement"]);

            apply("sound_changevolumeby", "%1 %2 %3", [
                { type: "field_image", src: svg + "sound.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                { type: "input_value", name: "VOLUME" },
            ], "sound", ["colours_sounds", "shape_statement"]);

            apply("sound_setvolumeto", "%1 %2\%", [
                { type: "field_image", src: svg + "sound.svg", width: 24, height: 24 },
                { type: "input_value", name: "VOLUME" },
            ], "sound", ["colours_sounds", "shape_statement"]);

            apply1("sound_volume", "%1", [
                { type: "field_image", src: svg + "sound.svg", width: 24, height: 24 },
            ], "sound", ["colours_sounds", "output_number"]);
        }
        //event
        function event() {
            apply("event_whenflagclicked", "%1", [
                { type: "field_image", src: source + "green-flag.svg", width: 24, height: 24 }
            ], "event", ["colours_event", "shape_hat"]);

            apply("event_whenkeypressed", "%1 %2", [
                { type: "field_image", src: svg + "keyboard_keys.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown", name: "KEY_OPTION",
                    options: [
                        [ScratchBlocks.Msg.EVENT_WHENKEYPRESSED_SPACE, 'space'],
                        [ScratchBlocks.Msg.EVENT_WHENKEYPRESSED_UP, 'up arrow'],
                        [ScratchBlocks.Msg.EVENT_WHENKEYPRESSED_DOWN, 'down arrow'],
                        [ScratchBlocks.Msg.EVENT_WHENKEYPRESSED_RIGHT, 'right arrow'],
                        [ScratchBlocks.Msg.EVENT_WHENKEYPRESSED_LEFT, 'left arrow'],
                        [ScratchBlocks.Msg.EVENT_WHENKEYPRESSED_ANY, 'any'],
                        ['a', 'a'], ['b', 'b'], ['c', 'c'], ['d', 'd'],
                        ['e', 'e'], ['f', 'f'], ['g', 'g'], ['h', 'h'],
                        ['i', 'i'], ['j', 'j'], ['k', 'k'], ['l', 'l'],
                        ['m', 'm'], ['n', 'n'], ['o', 'o'], ['p', 'p'],
                        ['q', 'q'], ['r', 'r'], ['s', 's'], ['t', 't'],
                        ['u', 'u'], ['v', 'v'], ['w', 'w'], ['x', 'x'],
                        ['y', 'y'], ['z', 'z'], ['0', '0'], ['1', '1'],
                        ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
                        ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9']
                    ]
                }
            ], "event", ["colours_event", "shape_hat"]);

            apply("event_whenthisspriteclicked", "%1 %2", [
                { type: "field_image", src: svg + "square.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "mouse_pointer.svg", width: 24, height: 24 }
            ], "event", ["colours_event", "shape_hat"]);

            apply("event_whenbackdropswitchesto", "%1 %2 %3", [
                { type: "field_image", src: svg + "stage.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                { type: "field_dropdown", name: "BACKDROP", options: [['backdrop1', 'BACKDROP1']] }
            ], "event", ["colours_event", "shape_hat"]);

            apply("event_whengreaterthan", "%1 %2 > %3", [
                { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                {
                    type: "field_dropdown", name: "WHENGREATERTHANMENU",
                    options: [
                        [ScratchBlocks.Msg.EVENT_WHENGREATERTHAN_LOUDNESS, 'LOUDNESS'],
                        [ScratchBlocks.Msg.EVENT_WHENGREATERTHAN_TIMER, 'TIMER']
                    ]
                },
                { type: "input_value", name: "VALUE" }
            ], "event", ["colours_event", "shape_hat"]);

            apply("event_whenbroadcastreceived", "%1 %2 %3", [
                { type: "field_image", src: svg + "wifi.svg", width: 24, height: 24 },
                { type: "field_image", src: svg + "square.svg", width: 24, height: 24 },
                {
                    type: "field_variable", name: "BROADCAST_OPTION",
                    variableTypes: [ScratchBlocks.BROADCAST_MESSAGE_VARIABLE_TYPE],
                    variable: ScratchBlocks.Msg.DEFAULT_BROADCAST_MESSAGE_NAME
                }
            ], "event", ["colours_event", "shape_hat"]);

            apply("event_broadcast", "%1 %2", [
                { type: "field_image", src: svg + "wifi.svg", width: 24, height: 24 },
                { type: "input_value", name: "BROADCAST_INPUT" }
            ], "event", ["colours_event", "shape_statement"]);

            apply("event_broadcastandwait", "%1 %2 %3", [
                { type: "field_image", src: svg + "wifi.svg", width: 24, height: 24 },
                { type: "input_value", name: "BROADCAST_INPUT" },
                { type: "field_image", src: svg + "arrow_down_right.svg", width: 24, height: 24 },
            ], "event", ["colours_event", "shape_statement"]);
        }

        apply("control_wait", "%1 %2", [
            { type: "field_image", src: svg + "clock.svg", width: 24, height: 24 },
            { type: "input_value", name: "DURATION" },
        ], "control", ["colours_control", "shape_statement"]);

        ScratchBlocks.Blocks['control_repeat'] = {
            init: function () {
                this.jsonInit({
                    id: "control_repeat",
                    message0: "%1 %2",
                    message1: "%1", message2: "%1",
                    lastDummyAlign2: "RIGHT",
                    args0: [
                        { type: "field_image", src: svg + "repeat.svg", width: 24, height: 24 },
                        { type: "input_value", name: "TIMES" }
                    ],
                    args1: [
                        { type: "input_statement", name: "SUBSTACK" }
                    ],
                    args2: [
                        {
                            type: "field_image", src: source + "repeat.svg", width: 24,
                            height: 24, alt: "*", flip_rtl: true
                        }
                    ],
                    "category": ScratchBlocks.Categories.control,
                    "extensions": ["colours_control", "shape_statement"]
                });
            }
        };

        ScratchBlocks.Blocks['control_forever'] = {
            init: function () {
                this.jsonInit({
                    id: "control_forever", message0: "%1", message1: "%1", message2: "%1",
                    lastDummyAlign2: "RIGHT",
                    args0: [
                        { type: "field_image", src: svg + "repeat.svg", width: 24, height: 24 },
                    ],
                    args1: [{ type: "input_statement", name: "SUBSTACK" }],
                    args2: [{ type: "field_image", src: source + "repeat.svg", width: 24, height: 24, alt: "*", flip_rtl: true }],
                    category: ScratchBlocks.Categories.control,
                    extensions: ["colours_control", "shape_end"]
                });
            }
        };
        ScratchBlocks.Blocks['control_if'] = {
            init: function () {
                this.jsonInit({
                    id: "control_if", message0: "%1 %2", message1: "%1",
                    lastDummyAlign2: "RIGHT",
                    args0: [
                        { type: "field_image", src: svg + "question_mark.svg", width: 24, height: 24 },
                        { type: "input_value", name: "CONDITION", check: "Boolean" }
                    ],
                    args1: [{ type: "input_statement", name: "SUBSTACK" }],
                    category: ScratchBlocks.Categories.control,
                    extensions: ["colours_control", "shape_statement"]
                });
            }
        };

        ScratchBlocks.Blocks['control_if_else'] = {
            init: function () {
                this.jsonInit({
                    id: "control_if", message0: "%1 %2", message1: "%1", message2: "%1", message3: "%1",
                    args0: [
                        { type: "field_image", src: svg + "question_mark.svg", width: 24, height: 24 },
                        { type: "input_value", name: "CONDITION", check: "Boolean" }
                    ],
                    args1: [{ type: "input_statement", name: "SUBSTACK" }],
                    args2: [
                        { type: "field_image", src: svg + "exclamation.svg", width: 24, height: 24 },
                    ],
                    args3: [{ type: "input_statement", name: "SUBSTACK2" }],
                    category: ScratchBlocks.Categories.control,
                    extensions: ["colours_control", "shape_statement"]
                });
            }
        };

        ScratchBlocks.Blocks['control_wait_until'] = {
            init: function () {
                this.jsonInit({
                    id: "control_waituntil", message0: "%1 %2 %3",
                    args0: [
                        { type: "field_image", src: svg + "clock.svg", width: 24, height: 24 },
                        { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                        { type: "input_value", name: "CONDITION", check: "Boolean" }
                    ],
                    category: ScratchBlocks.Categories.control,
                    extensions: ["colours_control", "shape_statement"]
                });
            }
        };

        ScratchBlocks.Blocks['control_repeat_until'] = {
            init: function () {
                this.jsonInit({
                    id: "control_repeatuntil", message0: "%1 %2 %3", message1: "%1", message2: "%1",
                    lastDummyAlign2: "RIGHT",
                    args0: [
                        { type: "field_image", src: svg + "clock.svg", width: 24, height: 24 },
                        { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                        { type: "input_value", name: "CONDITION", check: "Boolean" }
                    ],
                    args1: [{ type: "input_statement", name: "SUBSTACK" }],
                    args2: [
                        {
                            type: "field_image", src: source + "repeat.svg",
                            width: 24, height: 24,
                            alt: "*", flip_rtl: true
                        }
                    ],
                    category: ScratchBlocks.Categories.control,
                    extensions: ["colours_control", "shape_statement"]
                });
            }
        };

        apply("control_start_as_clone", "%1 %2", [
            { type: "field_image", src: svg + "square.svg", width: 24, height: 24 },
            { type: "field_image", src: svg + "clone.svg", width: 24, height: 24 },
        ], "control", ["colours_control", "shape_hat"]);

        ScratchBlocks.Blocks['control_create_clone_of'] = {
            init: function () {
                this.jsonInit({
                    id: "control_start_as_clone",
                    message0: "%1 %2 %3",
                    args0: [
                        { type: "field_image", src: svg + "clone.svg", width: 24, height: 24 },
                        { type: "field_image", src: svg + "arrow_right.svg", width: 24, height: 24 },
                        { type: "input_value", name: "CLONE_OPTION" }
                    ],
                    category: ScratchBlocks.Categories.control,
                    extensions: ["colours_control", "shape_statement"]
                });
            }
        };

        ScratchBlocks.Blocks['control_delete_this_clone'] = {
            init: function () {
                this.jsonInit({
                    message0: "%1 %2",
                    args0: [
                        { type: "field_image", src: svg + "clone.svg", width: 24, height: 24 },
                        { type: "field_image", src: svg + "x.svg", width: 24, height: 24 },
                    ],
                    category: ScratchBlocks.Categories.control,
                    extensions: ["colours_control", "shape_end"]
                });
            }
        };

        //sensing
        apply("sensing_keypressed", "%1 %2", [
            { type: "field_image", src: svg + "keyboard_keys.svg", width: 24, height: 24 },
            { type: "input_value", name: "KEY_OPTION" }
        ], "sensing", ["colours_sensing", "output_boolean"]);
        motion(); looks(); sounds(); event();
    }
    addon.self.addEventListener("disabled", () => Object.assign(ScratchBlocks, oScratchBlocks));
    addon.self.addEventListener("reenabled", () => apl());
    apl();
}
