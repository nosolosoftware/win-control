{
    "targets": [
        {
            "target_name": "wincontrol",
            "cflags!": ["-fno-exceptions"],
            "cflags_cc!": ["-fno-exceptions"],
            "sources": [
                "src/c++/window.cpp",
                "src/c++/main.cpp"
            ],
            'msvs_settings': {
                'VCCLCompilerTool': {
                    'ObjectFile': "$(IntDir)/%(Directory)/"
                }
            },
            'include_dirs': [
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            'libraries': [],
            'dependencies': [
                "<!(node -p \"require('node-addon-api').gyp\")"
            ],
            'defines': ['NAPI_DISABLE_CPP_EXCEPTIONS', "NAPI_EXPERIMENTAL"]
        },
        {
            "target_name": "action_after_build",
            "type": "none",
            "dependencies": ["wincontrol"],
            "copies": [
                {
                    "files": ["<(PRODUCT_DIR)/wincontrol.node"],
                    "destination": "./lib/binding/"
                }
            ]
        }
    ]
}
