# Description
* Set of JavaScript classes for general use.
* Shouldn't include anything too large(move to separate project).
* Shouldn't include anything too specialized(partion elsewhere as unlikely to be used in most cases).
* Should move into own project once gets of a substantial size.
* May have varying formats, as is an ungrouped collection of classes.

# Technical Info
Originally written using old custom JavaScript classes that simply returned an object.  
For example: `var myClass = TargetClass();`  
However, the above also works with the new keyword, for example: `var myClass = new TargetClass();`  

Future coding will be written in the latest JavaScript. Please use a transcompiler like Babel if using on older browsers is required.
Due to above, using new to instatiate a class is preferred.

# Status
This project is currently under development. There are small bugs and class-wide bugs remaining. The following classes have relatively few problems:  

CanvasManager
DOMHelper
Log
Drawer
DrawableCanvas

# Examples
Check ./examples/