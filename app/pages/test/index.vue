<template>
<body class="bg-gray-50 font-sans">
    <div id="header" class="bg-white shadow-sm section-clickable">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <i class="text-primary text-2xl" data-fa-i2svg=""><svg class="svg-inline--fa fa-code" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg></i>
                    <h1 class="text-xl font-semibold" contenteditable="false">Schema Builder</h1>
                </div>
                <div class="flex items-center space-x-4">
                    <button id="saveSchema" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors section-clickable" contenteditable="false">
                        <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-floppy-disk" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="floppy-disk" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i>Save Schema
                    </button>
                </div>
            </div>
        </div>
    </div>

    <main class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-4">
                <div id="schema-tools" class="bg-white rounded-xl shadow-sm p-6 section-clickable">
                    <h2 class="text-lg font-semibold mb-4" contenteditable="false">Add Field</h2>
                    <div class="space-y-4">
                        <button class="w-full bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-left flex items-center" onclick="addField('string')">
                            <i class="w-8 text-primary" data-fa-i2svg=""><svg class="svg-inline--fa fa-font" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="font" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"></path></svg></i>
                            <span contenteditable="false">String</span>
                        </button>
                        <button class="w-full bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-left flex items-center" onclick="addField('number')">
                            <i class="w-8 text-primary" data-fa-i2svg=""><svg class="svg-inline--fa fa-hashtag" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hashtag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"></path></svg></i>
                            <span contenteditable="false">Number</span>
                        </button>
                        <button class="w-full bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-left flex items-center" onclick="addField('boolean')">
                            <i class="w-8 text-primary" data-fa-i2svg=""><svg class="svg-inline--fa fa-toggle-on" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="toggle-on" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg></i>
                            <span contenteditable="false">Boolean</span>
                        </button>
                        <button class="w-full bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-left flex items-center" onclick="addField('array')">
                            <i class="w-8 text-primary" data-fa-i2svg=""><svg class="svg-inline--fa fa-list" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"></path></svg></i>
                            <span contenteditable="false">Array</span>
                        </button>
                        <button class="w-full bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-left flex items-center" onclick="addField('object')">
                            <i class="w-8 text-primary" data-fa-i2svg=""><svg class="svg-inline--fa fa-cube" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"></path></svg></i>
                            <span contenteditable="false">Object</span>
                        </button>
                        <button class="w-full bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-left flex items-center" onclick="addField('null')">
                            <i class="w-8 text-primary" data-fa-i2svg=""><svg class="svg-inline--fa fa-ban" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ban" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg></i>
                            <span contenteditable="false">Null</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-span-8">
                <div id="schema-editor" class="bg-white rounded-xl shadow-sm p-6 section-clickable">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-semibold" contenteditable="false">Schema Editor</h2>
                        <button id="formatCode" class="text-primary hover:text-secondary section-clickable" contenteditable="false">
                            <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-wand-magic-sparkles" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wand-magic-sparkles" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"></path></svg></i>Format
                        </button>
                    </div>
                    <div id="editor" class="h-[600px] w-full rounded-lg border border-gray-200 ace_editor section-clickable ace-tomorrow"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; font-size: 1px; height: 1px; width: 1px; top: 42px; left: 51px;"></textarea><div class="ace_gutter" aria-hidden="true" style="left: 0px; width: 40px;"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="height: 1e+06px; top: 0px; left: 0px; width: 40px;"><div class="ace_gutter-cell " contenteditable="false" style="height: 14px; top: 0px;">1<span class="ace_fold-widget ace_start ace_open" style="height: 14px; display: inline-block;"></span></div><div class="ace_gutter-cell " contenteditable="false" style="height: 14px; top: 14px;">2<span style="display: none;"></span></div><div class="ace_gutter-cell ace_gutter-active-line " contenteditable="false" style="height: 14px; top: 28px;">3<span style="display: none;"></span></div></div></div><div class="ace_scroller" style="line-height: 14px; left: 40px; right: 0px; bottom: 0px;"><div class="ace_content" style="top: 0px; left: 0px; width: 734px; height: 626px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 532px; visibility: visible;"></div></div><div class="ace_layer ace_marker-layer"><div class="ace_active-line" style="height: 14px; top: 28px; left: 0px; right: 0px;"></div><div class="ace_selection ace_br1 ace_start" style="height: 14px; right: 0px; top: 0px; left: 4px;"></div><div class="ace_selection ace_br12" style="height: 14px; width: 6.59766px; top: 28px; left: 4px;"></div><div class="ace_selection" style="height: 14px; right: 0px; top: 14px; left: 4px;"></div><div class="ace_bracket ace_start ace_br15" style="height: 14px; width: 6.59766px; top: 28px; left: 4px;"></div><div class="ace_bracket ace_start ace_br15" style="height: 14px; width: 6.59766px; top: 0px; left: 4px;"></div></div><div class="ace_layer ace_text-layer" style="height: 1e+06px; margin: 0px 4px; top: 0px; left: 0px;"><div class="ace_line" style="height: 14px; top: 0px;"><span class="ace_paren ace_lparen">{</span></div><div class="ace_line" contenteditable="false" style="height: 14px; top: 14px;">  <span class="ace_variable">"key"</span>: <span class="ace_string">"value"</span></div><div class="ace_line" style="height: 14px; top: 28px;"><span class="ace_paren ace_rparen">}</span></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_hidden-cursors"><div class="ace_cursor" style="display: block; top: 28px; left: 11px; width: 7px; height: 14px;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="display: none; width: 20px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 20px; height: 42px;">&nbsp;</div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 20px; left: 40px; right: 0px;"><div class="ace_scrollbar-inner" style="height: 20px; width: 734px;">&nbsp;</div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div contenteditable="false" style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;">הההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההה</div><div contenteditable="false" style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; font-optical-sizing: inherit; font-size-adjust: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div>
                </div>
            </div>
        </div>
    </main>

    <!-- <script>
        let editor = ace.edit("editor");
        editor.setTheme("ace/theme/tomorrow");
        editor.session.setMode("ace/mode/json");
        editor.setValue(JSON.stringify({
            "key": "value"
        }, null, 2));

        function addField(type) {
            let currentValue = JSON.parse(editor.getValue());
            let newField = {};
            
            switch(type) {
                case 'string':
                    newField = {"newString": "value"};
                    break;
                case 'number':
                    newField = {"newNumber": 123};
                    break;
                case 'boolean':
                    newField = {"newBoolean": true};
                    break;
                case 'array':
                    newField = {"newArray": ["item1", "item2"]};
                    break;
                case 'object':
                    newField = {"newObject": {"key": "value"}};
                    break;
                case 'null':
                    newField = {"newNull": null};
                    break;
            }
            
            Object.assign(currentValue, newField);
            editor.setValue(JSON.stringify(currentValue, null, 2));
        }

        document.getElementById('formatCode').addEventListener('click', function() {
            try {
                const parsed = JSON.parse(editor.getValue());
                editor.setValue(JSON.stringify(parsed, null, 2));
            } catch (e) {
                alert('Invalid JSON');
            }
        });

        document.getElementById('saveSchema').addEventListener('click', function() {
            try {
                const schema = JSON.parse(editor.getValue());
                localStorage.setItem('savedSchema', JSON.stringify(schema));
                alert('Schema saved successfully!');
            } catch (e) {
                alert('Invalid JSON. Please check your schema.');
            }
        });
    </script> -->

</body>
</template>
