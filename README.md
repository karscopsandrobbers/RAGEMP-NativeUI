# RageMP-NativeUI
NativeUI for RageMP written in Javascript

### Compilation instructions:

1. gulp must be installed globally (`npm install gulp -g`).
2. `gulp build` to compile nativeui typescript files.

# Contributors

| Name |
|:----------:|
| [Kar](https://github.com/karimcambridge) |
| [Wolvey](https://github.com/berndwl) |
| [XMGamingMaster](https://github.com/XMGamingMaster) |
| [sprayzcs](https://github.com/sprayzcs) |

### NOTE BRIEFLY:

* The description and optimization updates for me saved over 20-30 FPS while a menu is open.
* You might want to be careful with menu pools right now. I haven't went deep into it but for simple menu pools it works GREAT.
* `MenuClose` event is NOT emitted when Visible is set to false. This is to allow users to reopen menus at it's same state, for e.g searching through a store.