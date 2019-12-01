### Not in any particular order:

* Added `closeChildren: boolean = false` parameter to `menu.Close()`. An optional parameter specifiing whether or not you want to close all children with the menu.
* Added `UIMenuDynamicListItem`.
* Descriptions are no longer cut off at 99 characters, but now support 99 * 3.
* Descriptions now support wrapping with font colour names, i.e `~HUD_COLOUR_FREEROAM~` will now wrap correctly.
* `UIMenuListItem` and `UIMenuSliderItem` can now store extra data.
* Improved description line wrapping.
* Description caption is now only updated when necessary.
* Description background is now only updated (recalculated) when necessary.
* Bettered the position of the left arrow for list items.
* Added new badges (Sale, Arrows and Voice Icons).
* Added `Menu.RemoveItem(item: UIMenuItem)`.
* When binding an item to a menu, automatically add that item if it isn't in the menu items list already.
* Added `MenuOpen` event when `menu.Visible` is changed.
* When hovering over the currently selected ListItem's title text, the cursor will be MiddleFinger, just like in the original * menus.
* `GoLeft` and `GoRight` now correctly handles disabled items.
* Added experimental automated menu pool system (It's a bit effy right now).
* MENUS ARE NO LONGER SHOWN BY DEFAULT.