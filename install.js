const { execSync } = require('child_process');
const os = require("os");
const platform = os.platform();

if(platform === 'win32') {
  execSync("node-pre-gyp install --target_platform=win32 --runtime=electron --target=11.3.0 --fallback-to-build");
}else{
  // This is skipped silently rather than throwing an error to allow this to be installed
  // on an unsupported platform as part of an automated build process.
 console.log('Skipping build on unsupported platform', platform);
}
