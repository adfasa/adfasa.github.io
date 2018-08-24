define("plugins/adfasaPlugin/package.adfasaPlugin", [], {
    "name": "adfasaPlugin",
    "c9": {
        "plugins": [
            {
                "packagePath": "plugins/adfasaPlugin/__static__"
            }
        ]
    }
});

define("plugins/adfasaPlugin/__static__",[], function(require, exports, module) {
    main.consumes = [
        "Plugin", "plugin.debug"
    ];
    main.provides = [];
    return main;
    function main(options, imports, register) {
        var debug = imports["plugin.debug"];
        var Plugin = imports.Plugin;
        var plugin = new Plugin();
        plugin.version = "undefined";
        plugin.on("load", function load() {
            [
                {
                    "type": "snippets",
                    "filename": "html.snippets",
                    "data": "# scope: html\nsnippet fre\n\t<?php foreach($${1:result} as $${2:${3:key}=>$${4:row}}): ?>\n\t\t${5:#source}\n\t<?php endforeach; ?>\nsnippet php\n\t<?php ${1:code} ?>\nsnippet eco\n\t<?php echo ${1} ?>\nsnippet iff\n\t<?php if(${1:condition}): ?>\n\t\t${2:#source}\n\t<?php endif; ?>\nsnippet ife\n\t<?php if(${1:condition}): ?>\n\t\t${2:#source}\n\t<?php else: ?>\n\t\t${3:#source}\n\t<?php endif; ?>"
                },
                {
                    "type": "snippets",
                    "filename": "javascript.snippets",
                    "data": "# scope: javascript\nsnippet log\n\tconsole.log(${1:\"${2}\"})$0\nsnippet ajax\n\t$.ajax({\n\t\ttype: \"${1}\",\n\t\turl: \"${2}\",\n\t\tdata: {${3}},\n\t\tsuccess: function(res){\n\t\t\t${4}\n\t\t}\n\t})\nsnippet ready\n\t$(function(){\n\t\n\t\t${1://Goodluck!}\n\t\t\n\t});\nsnippet click\n\t$(\"${1}\").click(function(e){\n\t\t${2}\n\t});"
                },
                {
                    "type": "snippets",
                    "filename": "php.snippets",
                    "data": "# scope: php\nsnippet this\n\t\\$this->${1}\nsnippet model\n\t\\$this->load->model(\"${1}_m\");\nsnippet addjs\n\t\\$this->load->add_js(\"${1}\");\nsnippet addcss\n\t\\$this->load->add_css(\"${1}\");\nsnippet post\n\t\\$this->input->post(\"${1}\")$0\nsnippet get\n\t\\$this->input->get(\"${1}\")$0"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "adfasaPlugin", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("adfasaPlugin.bundle");
        
        register(null, {});
    }
});
