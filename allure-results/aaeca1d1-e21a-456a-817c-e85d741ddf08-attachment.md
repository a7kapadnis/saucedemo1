# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\auth.setup.ts >> Kapruka Authentication
- Location: tests\e2e\auth.setup.ts:26:1

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> C:\Users\a7kap\AppData\Local\ms-playwright\chromium-1255\chrome-win64\chrome.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,HttpsUpgrades,HttpsFirstBalancedModeAutoEnable,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,AvoidCorsURLLoaderRestartOnRedirect,TcpPortRandomizationWin,OptimizationHints,NetworkTimeServiceQuerying,AimEnabled,PreconnectToSearch,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface,SkipListAccountsWithoutGaiaCookies --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --disable-updater-scheduler --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --enable-unsafe-swiftshader --edge-skip-compat-layer-relaunch --disable-stack-profiler --disable-infobars --disable-sync --do-not-de-elevate --no-sandbox --user-data-dir=C:\Users\a7kap\AppData\Local\Temp\playwright_chromiumdev_profile-GkYD88 --remote-debugging-pipe --no-startup-window
<launched> pid=25688
Call log:
  - <launching> C:\Users\a7kap\AppData\Local\ms-playwright\chromium-1255\chrome-win64\chrome.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,HttpsUpgrades,HttpsFirstBalancedModeAutoEnable,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,AvoidCorsURLLoaderRestartOnRedirect,TcpPortRandomizationWin,OptimizationHints,NetworkTimeServiceQuerying,AimEnabled,PreconnectToSearch,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface,SkipListAccountsWithoutGaiaCookies --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --disable-updater-scheduler --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --enable-unsafe-swiftshader --edge-skip-compat-layer-relaunch --disable-stack-profiler --disable-infobars --disable-sync --do-not-de-elevate --no-sandbox --user-data-dir=C:\Users\a7kap\AppData\Local\Temp\playwright_chromiumdev_profile-GkYD88 --remote-debugging-pipe --no-startup-window
  - <launched> pid=25688
  - [pid=25688] <gracefully close start>
  - [pid=25688] <kill>
  - [pid=25688] <will force kill>
  - [pid=25688] <process did exit: exitCode=3236495362, signal=null>
  - [pid=25688] starting temporary directories cleanup
  - [pid=25688] finished temporary directories cleanup
  - [pid=25688] <gracefully close end>

```