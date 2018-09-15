import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container full">
          <h1>Timeline Plus</h1>

          <h2 id="Overview">Overview</h2>
          <p>
            The Timeline is an interactive visualization chart to visualize data in time.
            The data items can take place on a single date, or have a start and end date (a range).
            You can freely move and zoom in the timeline by dragging and scrolling in the
            Timeline. Items can be created, edited, and deleted in the timeline.
            The time scale on the axis is adjusted automatically, and supports scales ranging
            from milliseconds to years.
          </p>
          <p>
            Timeline uses regular HTML DOM to render the timeline and items put on the
            timeline. This allows for flexible customization using css styling.
          </p>

          <h2 id="Contents">Contents</h2>
          <ul>
            <li><a href="#Overview">Overview</a></li>
            <li><a href="#Basic_Example">Basic Example</a></li>
            <li><a href="#More_Examples">More Examples</a></li>
            <li><a href="#Loading">Loading</a></li>
            <li><a href="#Data_Format">Data Format</a>
              <ul>
                <li><a href="#items">Items</a></li>
                <li><a href="#groups">Groups</a></li>
              </ul>
            </li>
            <li><a href="#Configuration_Options">Configuration Options</a></li>
            <li><a href="#Methods">Methods</a></li>
            <li><a href="#Events">Events</a></li>
            <li><a href="#Editing_Items">Editing Items</a></li>
            <li><a href="#Templates">Templates</a></li>
            <li><a href="#Localization">Localization</a></li>
            <li><a href="#Time_zone">Time zone</a></li>
            <li><a href="#Styles">Styles</a></li>
          </ul>

          <h2 id="Basic_Example">Basic Example</h2>
          <p>
            The following code shows how to create a Timeline and provide it with data.
            More examples can be found in the <a href="#More_Examples">timeline examples</a>.
          </p>

<pre className="prettyprint lang-html">
{`<!DOCTYPE HTML>
  <html>
  <head>
    <title>Timeline | Basic demo</title>

    <style type="text/css">
      body, html {
        font-family: sans-serif;
      }
    </style>

    <script src="./dist/timeline.js"></script>
    <link href="./dist/timeline.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
  <div id="timeline"></div>

  <script type="text/javascript">
    // DOM element where the Timeline will be attached
    var container = document.getElementById('timeline');

    // Create a DataSet (allows two way data-binding)
    var items = new timeline.DataSet([
      {id: 1, content: 'item 1', start: '2013-04-20'},
      {id: 2, content: 'item 2', start: '2013-04-14'},
      {id: 3, content: 'item 3', start: '2013-04-18'},
      {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
      {id: 5, content: 'item 5', start: '2013-04-25'},
      {id: 6, content: 'item 6', start: '2013-04-27'}
    ]);

    // Configuration for the Timeline
    var options = {};

    // Create a Timeline
    var timeline = new timeline.Timeline(container, items, options);
  </script>
  </body>
</html>`}
</pre>

          {
          //   <div className="contentWrapper">
          //   <h1 id='More_Examples'>More Examples</h1>
          //   This page contains examples which show how to use Timeline. <br/><br/>
          //   <h3>basic usage</h3>
          //   <a className='exampleLink' href="../examples/basicUsage.html">basic usage</a><br />
  
          //   <h3>interaction</h3>
          //   <a className='exampleLink' href="../examples/interaction/animateWindow.html">animate window</a><br />
          //   <a className='exampleLink' href="../examples/interaction/clickToUse.html">click to use</a><br />
          //   <a className='exampleLink' href="../examples/interaction/eventListeners.html">event listeners</a><br />
          //   <a className='exampleLink' href="../examples/interaction/limitMoveAndZoom.html">limit move and zoom of the window</a><br />
          //   <a className='exampleLink' href="../examples/interaction/navigationMenu.html">navigation menu</a><br />
          //   <a className='exampleLink' href="../examples/interaction/rollingMode.html">rolling mode</a><br />
          //   <a className='exampleLink' href="../examples/interaction/setSelection.html">set selection</a><br />
  
          //   <h3>editing</h3>
          //   <a className='exampleLink' href="../examples/editing/customSnappingOfItems.html">custom snapping of items</a><br />
          //   <a className='exampleLink' href="../examples/editing/editingItems.html">editing items</a><br />
          //   <a className='exampleLink' href="../examples/editing/editingItemsCallbacks.html">editing items, manipulate using callbacks</a><br />
          //   <a className='exampleLink' href="../examples/editing/individualEditableItems.html">individually editable items</a><br />
          //   <a className='exampleLink' href="../examples/editing/overrideEditingItems.html">override editable items</a><br />
          //   <a className='exampleLink' href="../examples/editing/tooltipOnItemChange.html">tooltip on item change</a><br />
          //   <a className='exampleLink' href="../examples/editing/updateDataOnEvent.html">update data on event</a><br />
  
          //   <h3>items</h3>
          //   <a className='exampleLink' href="../examples/items/backgroundAreas.html">background areas</a><br />
          //   <a className='exampleLink' href="../examples/items/backgroundAreasWithGroups.html">background areas with groups</a><br />
          //   <a className='exampleLink' href="../examples/items/expectedVsActualTimesItems.html">expected vs actual times items</a><br />
          //   <a className='exampleLink' href="../examples/items/htmlContents.html">HTML contents</a><br />
          //   <a className='exampleLink' href="../examples/items/itemOrdering.html">Item ordering</a><br />
          //   <a className='exampleLink' href="../examples/items/pointItems.html">point items</a><br />
          //   <a className='exampleLink' href="../examples/items/rangeOverflowItem.html">range overflow</a><br />
          //   <a className='exampleLink' href="../examples/items/tooltip.html">Tooltips</a><br />
          //   <a className='exampleLink' href="../examples/items/visibleFrameTemplateContent.html">Dynamic Content</a><br />
  
          //   <h3>groups</h3>
          //   <a className='exampleLink' href="../examples/groups/groups.html">groups</a><br />
          //   <a className='exampleLink' href="../examples/groups/groupsEditable.html">editable groups</a><br />
          //   <a className='exampleLink' href="../examples/groups/groupsOrdering.html">ordering of groups</a><br />
          //   <a className='exampleLink' href="../examples/groups/nestedGroups.html">nested groups</a><br />
          //   <a className='exampleLink' href="../examples/groups/subgroups.html">subgroups</a><br />
          //   <a className='exampleLink' href="../examples/groups/verticalItemsHide.html">hide vertical items</a><br />
  
          //   <h3>styling</h3>
          //   <a className='exampleLink' href="../examples/styling/axisOrientation.html">axis orientation</a><br />
          //   <a className='exampleLink' href="../examples/styling/customCss.html">custom CSS</a><br />
          //   <a className='exampleLink' href="../examples/styling/gridStyling.html">grid styling</a><br />
          //   <a className='exampleLink' href="../examples/styling/itemClassNames.html">item class names</a><br />
          //   <a className='exampleLink' href="../examples/styling/itemTemplates.html">item templates</a><br />
          //   <a className='exampleLink' href="../examples/styling/weekStyling.html">week styling</a><br />
  
          //   <h3>data handling</h3>
          //   <a className='exampleLink' href="../examples/dataHandling/dataSerialization.html">data serialization</a><br />
          //   <a className='exampleLink' href="../examples/dataHandling/loadExternalData.html">load external data</a><br />
  
          //   <h3>other</h3>
          //   <a className='exampleLink' href="../examples/other/customTimeBars.html">custom time bars</a><br />
          //   <a className='exampleLink' href="../examples/other/dataAttributes.html">data attributes</a><br />
          //   <a className='exampleLink' href="../examples/other/dataAttributesAll.html">all data attributes</a><br />
  
          //   <a className='exampleLink' href="../examples/other/drag&drop.html">Drag and Drop</a><br />
          //   <a className='exampleLink' href="../examples/other/functionLabelFormats.html">label formats function</a><br />
          //   <a className='exampleLink' href="../examples/other/groupsPerformance.html">performance of groups</a><br />
          //   <a className='exampleLink' href="../examples/other/hidingPeriods.html">hiding periods</a><br />
          //   <a className='exampleLink' href="../examples/other/horizontalScroll.html">horizontal scroll</a><br />
          //   <a className='exampleLink' href="../examples/other/localization.html">localization</a><br />
          //   <a className='exampleLink' href="../examples/other/performance.html">performance</a><br />
          //   <a className='exampleLink' href="../examples/other/rtl.html">right to left (rtl)</a><br />
          //   <a className='exampleLink' href="../examples/other/timezone.html">timezone</a><br />
          //   <a className='exampleLink' href="../examples/other/usingReact.html">React example</a><br />
          //   <a className='exampleLink' href="../examples/other/verticalScroll.html">vertical scroll</a><br />
          //   <a className='exampleLink' href="../examples/other/requirejs/requirejs_example.html">require.js example</a><br />
          // </div>
  
          }
        

          <h2 id="Loading">Loading</h2>
         

        <pre className="prettyprint lang-html">
{`<script src="vis/dist/timeline.js"></script>
<link href="vis/dist/timeline.css" rel="stylesheet" type="text/css" />`}
        </pre>

          The constructor of the Timeline is <code>{`timeline.Timeline`}</code>
          <pre className="prettyprint lang-js">{`var timeline = new timeline.Timeline(container, items, options);`}</pre>
          or when using groups:
          <pre className="prettyprint lang-js">{`var timeline = new timeline.Timeline(container, items, groups, options);`}</pre>

          The constructor accepts four parameters:
          <ul>
            <li>
              <code>{`container`}</code> is the DOM element in which to create the timeline.
            </li>
            <li>
              <code>{`items`}</code> is an Array containing items. The properties of an
              item are described in section <a href="#Data_Format">Data Format, items</a>.
            </li><li>
            <code>{`groups`}</code> is an Array containing groups. The properties of a
            group are described in section <a href="#groups">Data Format, groups</a>.
          </li>
            <li>
              <code>{`options`}</code> is an optional Object containing a name-value map
              with options. Options can also be set using the method
              <code>{`setOptions`}</code>.
            </li>
          </ul>

          <h2 id="Data_Format">Data Format</h2>

          <p>
            The timeline can be provided with two types of data:
          </p>
          <ul>
            <li><a href="#items">Items</a> containing a set of items to be displayed in time.</li>
            <li><a href="#groups">Groups</a> containing a set of groups used to group items
              together.</li>
          </ul>

          <h3 id="items">Items</h3>
          <p>
            For items, the Timeline accepts an Array, a DataSet (offering 2 way data binding),
            or a DataView (offering 1 way data binding).
            Items are regular objects and can contain the properties <code>{`start`}</code>,
            <code>{`end`}</code> (optional), <code>{`content`}</code>,
            <code>{`group`}</code> (optional), <code>{`className`}</code> (optional),
            <code>{`editable`}</code> (optional), and <code>{`style`}</code> (optional).
          </p>

          <p>
            A DataSet is constructed as:
          </p>

          <pre className="prettyprint lang-js">
{`var items = new timeline.DataSet([
  {
    start: new Date(2010, 7, 15),
    end: new Date(2010, 8, 2),  // end is optional
    content: 'Trajectory A'
    // Optional: fields 'id', 'type', 'group', 'className', 'style'
  }
  // more items...
]);`}
          </pre>

          <p>
            The item properties are defined as:
          </p>

          <table className="properties" id="itemOptionTable">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>className</td>
              <td>String</td>
              <td>no</td>
              <td>This field is optional. A className can be used to give items
                an individual css style. For example, when an item has className
                'red', one can define a css style like:
                <pre className="prettyprint lang-css">
{`.timeline-item.red {
    color: white;
    background-color: red;
    border-color: darkred;
}`}
                </pre>
                More details on how to style items can be found in the section
                <a href="#Styles">Styles</a>.
              </td>
            </tr>
            <tr>
              <td>align</td>
              <td>String</td>
              <td>no</td>
              <td>This field is optional. If set this overrides the global <code>{`align`}</code> configuration option for this item.
              </td>
            </tr>
            <tr>
              <td>content</td>
              <td>String</td>
              <td>yes</td>
              <td>The contents of the item. This can be plain text or html code.</td>
            </tr>
            <tr>
              <td>end</td>
              <td>Date or number or string or Moment</td>
              <td>no</td>
              <td>The end date of the item. The end date is optional, and can be left <code>{`null`}</code>.
                If end date is provided, the item is displayed as a range.
                If not, the item is displayed as a box.</td>
            </tr>
            <tr>
              <td>group</td>
              <td>any type</td>
              <td>no</td>
              <td>This field is optional. When the group column is provided,
                all items with the same group are placed on one line.
                A vertical axis is displayed showing the groups.
                Grouping items can be useful for example when showing availability of multiple
                people, rooms, or other resources next to each other.<br/>
              </td>
            </tr>
            <tr>
              <td>id</td>
              <td>String or Number</td>
              <td>no</td>
              <td>An id for the item. Using an id is not required but highly
                recommended. An id is needed when dynamically adding, updating,
                and removing items in a DataSet.</td>
            </tr>
            <tr>
              <td>start</td>
              <td>Date or number or string or Moment</td>
              <td>yes</td>
              <td>The start date of the item, for example <code>{`new Date(2010,9,23)`}</code>.</td>
            </tr>
            <tr>
              <td>style</td>
              <td>String</td>
              <td>no</td>
              <td>
                A css text string to apply custom styling for an individual item, for
                example <code>{`"color: red; background-color: pink;"`}</code>.
              </td>
            </tr>
            <tr>
              <td>subgroup</td>
              <td>String or Number</td>
              <td>none</td>
              <td>The id of a subgroup.
                Groups all items within a group per subgroup, and positions them on the
                same height instead of staking them on top of each other. can be ordered
                by specifying the option <code>{`subgroupOrder`}</code> of a group.
              </td>
            </tr>
            <tr>
              <td>title</td>
              <td>String</td>
              <td>none</td>
              <td>Add a title for the item, displayed when holding the mouse on the item.
                The title can be an HTML element or a string containing plain text or HTML.
              </td>
            </tr>
            <tr>
              <td>type</td>
              <td>String</td>
              <td>no</td>
              <td>The type of the item. Can be 'box' (default), 'point', 'range', or 'background'.
                Types 'box' and 'point' need a start date, the types 'range' and 'background' needs both a start and end date.
              </td>
            </tr>
            <tr>
              <td>limitSize</td>
              <td>Boolean</td>
              <td>no</td>
              <td>Some browsers cannot handle very large DIVs so by default range DIVs can be truncated outside the visible area.
                Setting this to <code>{`false`}</code> will cause the creation of full-size DIVs.
              </td>
            </tr>
            <tr className='toggle collapsible' onclick="toggleTable('itemOptionTable', 'itemEditable', this);">
              <td><span parent="itemEditable" className="right-caret"></span> editable</td>
              <td>Boolean or Object</td>
              <td>no</td>
              <td>Override the editable option of the timeline for a specific item (assuming <code>{`timeline.editable.overrideItems`}</code> is false).</td>
            </tr>
            <tr parent="itemEditable" className="hidden">
              <td className="indent">editable.remove</td>
              <td>boolean</td>
              <td>no</td>
              <td>If true, item can be deleted by first selecting it, and then clicking the delete button on the top right of the item. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
            </tr>
            <tr parent="itemEditable" className="hidden">
              <td className="indent">editable.updateGroup</td>
              <td>boolean</td>
              <td>no</td>
              <td>If true, item can be dragged from one group to another. Only applicable when the Timeline has groups. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
            </tr>
            <tr parent="itemEditable" className="hidden">
              <td className="indent">editable.updateTime</td>
              <td>boolean</td>
              <td>no</td>
              <td>If true, items can be dragged to another moment in time. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
            </tr>
          </tbody>
            </table>

          <h3 id="groups">Groups</h3>
          <p>
            For the items, groups can be an Array, a DataSet (offering 2 way data binding),
            or a DataView (offering 1 way data binding).

            Using groups, items can be grouped together.
            Items are filtered per group, and displayed as

            Group items can contain the properties <code>{`id`}</code>,
            <code>{`content`}</code>, and <code>{`className`}</code> (optional).
          </p>
          <p>
            Groups can be applied to a timeline using the method <code>{`setGroups`}</code> or supplied in the constructor.
            A table with groups can be created like:
          </p>

        <pre className="prettyprint lang-js">
{`var groups = [
    {
      id: 1,
      content: 'Group 1'
      // Optional: a field 'className', 'style', 'order', [properties]
    }
    // more groups...
  ]);`}
        </pre>


          <p>
            Groups can have the following properties:
          </p>

          <table className="properties">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>className</td>
              <td>String</td>
              <td>no</td>
              <td>This field is optional. A className can be used to give groups
                an individual css style. For example, when a group has className
                'red', one can define a css style
                <code>{`
                  .red {
                  color: red;
                  }
                `}</code>.
                More details on how to style groups can be found in the section
                <a href="#Styles">Styles</a>.
              </td>
            </tr>
            <tr>
              <td>content</td>
              <td>String or Element</td>
              <td>yes</td>
              <td>The contents of the group. This can be plain text, html code or an html element.</td>
            </tr>
            <tr>
              <td>id</td>
              <td>String or Number</td>
              <td>yes</td>
              <td>An id for the group. The group will display all items having a
                property <code>{`group`}</code> which matches the <code>{`id`}</code>
                of the group.</td>
            </tr>
            <tr>
              <td>style</td>
              <td>String</td>
              <td>no</td>
              <td>
                A css text string to apply custom styling for an individual group label, for
                example <code>{`"color: red; background-color: pink;"`}</code>.
              </td>
            </tr>
            <tr>
              <td>order</td>
              <td>number</td>
              <td>no</td>
              <td>Order of the group in the list.
                By default, groups are ordered by first-come, first-show.
              </td>
            </tr>
            <tr>
              <td>subgroupOrder</td>
              <td>String or Function</td>
              <td>no</td>
              <td>Order the subgroups by a field name or custom sort function.
                By default, groups are ordered by first-come, first-show.
              </td>
            </tr>
            <tr>
              <td>subgroupStack</td>
              <td>Object or Boolean</td>
              <td>no</td>
              <td>Enables stacking within individual subgroups. Example: <code>{`{'subgroup0': true, 'subgroup1': false, 'subgroup2': true}`}</code> 
                  For each subgroup where stacking is enabled, items will be stacked on top of each other within that subgroup such that they do no overlap.
                  If set to <code>{`true`}</code> all subgroups will be stacked.
                  If a value was specified for the <code>{`order`}</code> parameter in the options, that ordering will be used when stacking the items.
              </td>
            </tr>
            <tr>
              <td>title</td>
              <td>String</td>
              <td>no</td>
              <td>A title for the group, displayed when holding the mouse on the groups label.
                The title can only contain plain text.
              </td>
            </tr>
            <tr>
              <td>visible</td>
              <td>Boolean</td>
              <td>no</td>
              <td>Provides a means to toggle the whether a group is displayed or not. Defaults to <code>{`true`}</code>.</td>
            </tr>
            <tr>
              <td>nestedGroups</td>
              <td>Array</td>
              <td>no</td>
              <td>Array of group ids nested in the group. Nested groups will appear under this nesting group.</td>
            </tr>
            <tr>
              <td>showNested</td>
              <td>Boolean</td>
              <td>no</td>
              <td>Assuming the group has nested groups, this will set the initial state of the group - shown or collapsed. The <code>{`showNested`}</code> is defaulted to <code>{`true`}</code>.</td>
            </tr>
            <tr>
              <td>heightMode</td>
              <td>String</td>
              <td>no</td>
              <td>This field is optional. Can be 'auto' (default) or 'fixed'. If set this overrides the global <code>{`groupHeightMode`}</code> configuration option for this group.</td>
            </tr>
          </tbody>
            </table>



          <h2 id="Configuration_Options">Configuration Options</h2>

          <p>
            Options can be used to customize the timeline.
            Options are defined as a JSON object. All options are optional.
          </p>

        <pre className="prettyprint lang-js">
{`var options = {
    width: '100%',
    height: '30px',
    margin: {
      item: 20
    }
  };`}
        </pre>

          <p>
            The following options are available.
          </p>

          <table className="options" id="optionTable">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>

            <tr>
              <td>align</td>
              <td>String</td>
              <td><code>{`'center'`}</code></td>
              <td>Alignment of items with type 'box', 'range', and 'background'. Available values are 'auto' (default), 'center', 'left', or 'right'. For 'box' items, the 'auto' alignment is 'center'. For 'range' items, the auto alignment is dynamic: positioned left and shifted such that the contents is always visible on screen.</td>
            </tr>

            <tr>
              <td>alignCurrentTime</td>
              <td>String</td>
              <td>none</td>
              <td>If set, the current time bar will be aligned to the start of the chosen unit of time. Available values are 'year', 'month', 'quarter', 'week', 'isoWeek', 'day', 'date', 'hour', 'minute' or 'second'. If not provided, the current time bar will be updated at every tick.</td>
            </tr>

            <tr>
              <td>autoResize</td>
              <td>boolean</td>
              <td><code>{`true`}</code></td>
              <td>If true, the Timeline will automatically detect when its container is resized, and redraw itself accordingly. If false, the Timeline can be forced to repaint after its container has been resized using the function <code>{`redraw()`}</code>.</td>
            </tr>

            <tr>
              <td>clickToUse</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>When a Timeline is configured to be <code>{`clickToUse`}</code>, it will react to mouse and touch events only when active.
                When active, a blue shadow border is displayed around the Timeline. The Timeline is set active by clicking on it, and is changed to inactive again by clicking outside the Timeline or by pressing the ESC key.</td>
            </tr>

            <tr>
              <td>configure</td>
              <td>boolean or function</td>
              <td><code>{`false`}</code></td>
              <td>When true, a configurator is loaded where all configuration options of the Timeline can be changed live.

                The displayed options can be filtered by providing a filter function. This function is invoked with two arguments: the current <code>{`option`}</code> and the <code>{`path`}</code> (an Array) of the option within the options object. The option will be displayed when the filter function returns true. For example to only display format options:
                <pre className="prettyprint lang-js">
{`function (option, path) {
  return option === 'format' || path.indexOf('format') !== -1;
}`}
                </pre>
              </td>
            </tr>

            <tr>
              <td>dataAttributes</td>
              <td>string[] or 'all'</td>
              <td><code>{`false`}</code></td>
              <td>An array of fields optionally defined on the timeline items that will be appended as <code>{`data-`}</code> attributes to the DOM element of the items.<br/>
                If value is <code>{`'all'`}</code> then each field defined on the timeline item will become a <code>{`data-`}</code> attribute.</td>
            </tr>

            <tr className='toggle collapsible' onclick="toggleTable('optionTable','editable', this);">
              <td><span parent="editable" className="right-caret"></span> editable</td>
              <td>boolean or Object</td>
              <td><code>{`false`}</code></td>
              <td>If true, the items in the timeline can be manipulated. Only applicable when option <code>{`selectable`}</code> is <code>{`true`}</code>. See also the callbacks <code>{`onAdd`}</code>, <code>{`onUpdate`}</code>, <code>{`onMove`}</code>, and <code>{`onRemove`}</code>. When <code>{`editable`}</code> is an object, one can enable or disable individual manipulation actions.
                See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.
              </td>
            </tr>
            <tr parent="editable" className="hidden">
              <td className="indent">editable.add</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, new items can be created by double tapping an empty space in the Timeline. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
            </tr>
            <tr parent="editable" className="hidden">
              <td className="indent">editable.remove</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, items can be deleted by first selecting them, and then clicking the delete button on the top right of the item. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
            </tr>
            <tr parent="editable" className="hidden">
              <td className="indent">editable.updateGroup</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, items can be dragged from one group to another. Only applicable when the Timeline has groups. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
            </tr>
            <tr parent="editable" className="hidden">
              <td className="indent">editable.updateTime</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, items can be dragged to another moment in time. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
            </tr>
            <tr parent="editable" className="hidden">
              <td className="indent">editable.overrideItems</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, item specific editable properties are overridden by timeline settings</td>
            </tr>

            <tr>
              <td>end</td>
              <td>Date or Number or String or Moment</td>
              <td>none</td>
              <td>The initial end date for the axis of the timeline.
                If not provided, the latest date present in the items set is taken as
                end date.</td>
            </tr>

            <tr>
              <td>format</td>
              <td>Object or Function</td>
              <td>none</td>
              <td>
                Apply custom date formatting of the labels on the time axis. The default value of <code>{`format`}</code> is:
              <pre className="prettyprint lang-js">
{`{
  minorLabels: {
    millisecond:'SSS',
    second:     's',
    minute:     'HH:mm',
    hour:       'HH:mm',
    weekday:    'ddd D',
    day:        'D',
    week:       'w',
    month:      'MMM',
    year:       'YYYY'
  },
  majorLabels: {
    millisecond:'HH:mm:ss',
    second:     'D MMMM HH:mm',
    minute:     'ddd D MMMM',
    hour:       'ddd D MMMM',
    weekday:    'MMMM YYYY',
    day:        'MMMM YYYY',
    week:       'MMMM YYYY',
    month:      'YYYY',
    year:       ''
  }
}`}
              </pre>

                For values which not provided in the customized <code>{`options.format`}</code>, the default values will be used.
                All available formatting syntax is described in the <a href="http://momentjs.com/docs/#/displaying/format/">docs of moment.js</a>.
                <br/>
                You can also use a function format for each label. The function accepts as arguments the date, scale and step in that order, and expects to return a string for the label.

                <pre className="prettyprint lang-js">
{`function format({
  minorLabels: Function(date: Date, scale: Number, step: Number),
  majorLabels: Function(date: Date, scale: Number, step: Number)
}`}
                </pre>
              </td>
            </tr>

            <tr className='toggle collapsible' onclick="toggleTable('optionTable','groupEditable', this);">
              <td><span parent="groupEditable" className="right-caret"></span> groupEditable</td>
              <td>boolean or Object</td>
              <td><code>{`false`}</code></td>
              <td>If true, the groups in the timeline can be manipulated. See also the callbacks <code>{`onAddGroup`}</code>, <code>{`onMoveGroup`}</code>, and <code>{`onRemoveGroup`}</code>. When <code>{`groupEditable`}</code> is an object, one can enable or disable individual manipulation actions.
                The editing of groups follows the same principles as for items, see section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.
              </td>
            </tr>
            <tr parent="groupEditable" className="hidden">
              <td className="indent">groupEditable.add</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, new groups can be created in the Timeline. For now adding new groups is done by the user.</td>
            </tr>
            <tr parent="groupEditable" className="hidden">
              <td className="indent">groupEditable.remove</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, groups can be deleted. For now removing groups is done by the user.</td>
            </tr>
            <tr parent="groupEditable" className="hidden">
              <td className="indent">groupEditable.order</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, groups can be dragged to change their order. Only applicable when the Timeline has groups. For this option to work properly the groupOrder and groupOrderSwap options have to be set as well.</td>
            </tr>

            <tr>
              <td>groupHeightMode</td>
              <td>String</td>
              <td>'auto'</td>
              <td>Specifies how the height of a group is calculated. Choose from 'auto' and 'fixed'. If it is set to 'auto' the height will be calculated based on the visible items. While if it is set to 'fixed' the group will keep the same height even if there are no visible items in the window.</td>
            </tr>

            <tr>
              <td>groupOrder</td>
              <td>String or Function</td>
              <td>'order'</td>
              <td>Order the groups by a field name or custom sort function.
                By default, groups are ordered by a property <code>{`order`}</code> (if set).
                If no <code>{`order`}</code> properties are provided, the order will be undetermined.
              </td>
            </tr>

            <tr>
              <td>groupOrderSwap</td>
              <td>Function</td>
              <td>none</td>
              <td>Swaps the positions of two groups. If groups have a custom order (via <code>{`groupOrder`}</code>) and groups are configured to be reorderable (via <code>{`groupEditable.order`}</code>), the user has to provide a function that swaps the positions of two given groups.
              If this option is not set, the default implementation assumes that groups hold an attribute <code>{`order`}</code> which values are changed. The signature of the <code>{`groupOrderWap`}</code> function is:
              <pre className="prettyprint lang-js">{`function groupOrderSwap(fromGroup: Object, toGroup: Object, groups: DataSet)`}</pre>
              The first to arguments hold the groups of which the positions are to be swapped and the third argument holds the DataSet with all groups.
              </td>
            </tr>

            <tr>
              <td>groupTemplate</td>
              <td>function</td>
              <td>none</td>
              <td>A template function used to generate the contents of the groups. The function is called by the Timeline with a groups data as the first argument and the group element as the second, and must return HTML code, a string or a template as result. When the option groupTemplate is specified, the groups do not need to have a field <code>{`content`}</code>. See section <a href="#Templates">Templates</a> for a detailed explanation.</td>
            </tr>

            <tr>
              <td>height</td>
              <td>number or String</td>
              <td>none</td>
              <td>The height of the timeline in pixels or as a percentage.
                When height is undefined or null, the height of the timeline is automatically
                adjusted to fit the contents.
                It is possible to set a maximum height using option <code>{`maxHeight`}</code>
                to prevent the timeline from getting too high in case of automatically
                calculated height.
              </td>
            </tr>

            <tr>
              <td>hiddenDates</td>
              <td>Object</td>
              <td>none</td>
              <td>This option allows you to hide specific timespans from the time axis. The dates can be supplied as an object:
                <code>{`{start: '2014-03-21 00:00:00', end: '2014-03-28 00:00:00', [repeat:'daily']}`}</code> or as an Array of these objects. The repeat argument is optional.
                The possible values are (case-sensitive): <code>{`daily, weekly, monthly, yearly`}</code>. To hide a weekend, pick any Saturday as start and the following Monday as end
                and set repeat to weekly.
              </td>
            </tr>

            <tr>
              <td>horizontalScroll</td>
              <td>Boolean</td>
              <td>false</td>
              <td>This option allows you to scroll horizontally to move backwards and forwards in the time range.
              Only applicable when option <code>{`zoomCtrl`}</code> is defined or <code>{`zoomable`}</code> is <code>{`false`}</code>.
              </td>
            </tr>

            <tr className='toggle collapsible' onclick="toggleTable('optionTable','itemsAlwaysDraggable', this);">
              <td><span parent="itemsAlwaysDraggable" className="right-caret"></span> itemsAlwaysDraggable</td>
              <td>boolean or Object</td>
              <td>Object</td>
              <td>When a boolean, applies the value only to <code>{`itemsAlwaysDraggable.item`}</code>.</td>
            </tr>
            <tr parent="itemsAlwaysDraggable" className="hidden">
              <td className="indent">itemsAlwaysDraggable.item</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, all items in the Timeline are draggable without being selected. If false, only the selected item(s) are draggable.</td>
            </tr>
            <tr parent="itemsAlwaysDraggable" className="hidden">
              <td className="indent">itemsAlwaysDraggable.range</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, range of all items in the Timeline is draggable without being selected. If false, range is only draggable for the selected item(s). Only applicable when option <code>{`itemsAlwaysDraggable.item`}</code> is set <code>{`true`}</code>. </td>
            </tr>

            <tr>
              <td>loadingScreenTemplate</td>
              <td>function</td>
              <td>none</td>
              <td>A template function used to generate the timeline initial loading screen. See section <a href="#Templates">Templates</a> for a detailed explanation.</td>
            </tr>

            <tr>
              <td>locale</td>
              <td>String</td>
              <td>none</td>
              <td>Select a locale for the Timeline. See section <a href="#Localization">Localization</a> for more information.</td>
            </tr>

            <tr>
              <td>locales</td>
              <td>Object</td>
              <td>none</td>
              <td>A map with i18n locales. See section <a href="#Localization">Localization</a> for more information.</td>
            </tr>

            <tr>
              <td>moment</td>
              <td>function</td>
              <td>timeline.moment</td>
              <td>A constructor for creating a moment.js Date. Allows for applying a custom time zone. See section <a href="#Time_zone">Time zone</a> for more information.</td>
            </tr>

            <tr className='toggle collapsible' onclick="toggleTable('optionTable','margin', this);">
              <td><span parent="margin" className="right-caret"></span> margin</td>
              <td>number or Object</td>
              <td>Object</td>
              <td>When a number, applies the margin to <code>{`margin.axis`}</code>, <code>{`margin.item.horizontal`}</code>, and <code>{`margin.item.vertical`}</code>.</td>
            </tr>
            <tr parent="margin" className="hidden">
              <td className="indent">margin.axis</td>
              <td>number</td>
              <td><code>{`20`}</code></td>
              <td>The minimal margin in pixels between items and the time axis.</td>
            </tr>
            <tr parent="margin" className="hidden">
              <td className="indent">margin.item</td>
              <td>number</td>
              <td><code>{`10`}</code></td>
              <td>The minimal margin in pixels between items in both horizontal and vertical direction.</td>
            </tr>
            <tr parent="margin" className="hidden">
              <td className="indent2">margin.item.horizontal</td>
              <td>number</td>
              <td><code>{`10`}</code></td>
              <td>The minimal horizontal margin in pixels between items.</td>
            </tr>
            <tr parent="margin" className="hidden">
              <td className="indent2">margin.item.vertical</td>
              <td>number</td>
              <td><code>{`10`}</code></td>
              <td>The minimal vertical margin in pixels between items.</td>
            </tr>

            <tr>
              <td>max</td>
              <td>Date or Number or String or Moment</td>
              <td>none</td>
              <td>Set a maximum Date for the visible range.
                It will not be possible to move beyond this maximum.
              </td>
            </tr>

            <tr>
              <td>maxHeight</td>
              <td>number or String</td>
              <td>none</td>
              <td>Specifies the maximum height for the Timeline. Can be a number in pixels or a string like "300px".</td>
            </tr>

            <tr>
              <td>maxMinorChars</td>
              <td>number</td>
              <td>7</td>
              <td>
                Specifies the maximum number of characters that should fit in minor grid labels.
                If larger, less and wider grids will be drawn.
              </td>
            </tr>

            <tr>
              <td>min</td>
              <td>Date or Number or String or Moment</td>
              <td>none</td>
              <td>Set a minimum Date for the visible range.
                It will not be possible to move beyond this minimum.
              </td>
            </tr>

            <tr>
              <td>minHeight</td>
              <td>number or String</td>
              <td>none</td>
              <td>Specifies the minimum height for the Timeline. Can be a number in pixels or a string like "300px".</td>
            </tr>

            <tr>
              <td>moveable</td>
              <td>boolean</td>
              <td><code>{`true`}</code></td>
              <td>
                Specifies whether the Timeline can be moved and zoomed by dragging the window.
                See also option <code>{`zoomable`}</code>.
              </td>
            </tr>

            <tr>
              <td>multiselect</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>
                If true, multiple items can be selected using ctrl+click, shift+click, or by holding items.
                Only applicable when option <code>{`selectable`}</code> is <code>{`true`}</code>.
              </td>
            </tr>

            <tr>
              <td style={{fontSize: '0.9em'}}>multiselectPerGroup</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>
                If true, selecting multiple items using shift+click will only select items residing in the same group as the <i>first</i> selected item.
                Only applicable when option <code>{`selectable`}</code> and <code>{`multiselect`}</code> are <code>{`true`}</code>.
              </td>
            </tr>

            <tr>
              <td>onAdd</td>
              <td>function</td>
              <td>none</td>
              <td>Callback function triggered when an item is about to be added: when the user double taps an empty space in the Timeline. See section <a href="#Editing_Items">Editing Items</a> for more information. Only applicable when both options <code>{`selectable`}</code> and <code>{`editable.add`}</code> are set <code>{`true`}</code>.
              </td>
            </tr>
            
            <tr>
              <td>onAddGroup</td>
              <td>function</td>
              <td>none</td>
              <td>Callback function triggered when a group is about to be added. The signature and semantics are the same as for <code>{`onAdd`}</code>.
              </td>
            </tr>
            
            <tr>
                <td>onDropObjectOnItem</td>
                <td>function</td>
                <td>none</td>
                <td>Callback function triggered when an object containing <code>{`target:'item'`}</code> in its drag data is dropped in to a timeline item.
                </td>
            </tr>

            <tr>
              <td>onInitialDrawComplete</td>
              <td>function</td>
              <td>none</td>
              <td>Callback function triggered when the timeline is initially drawn. This function fires once per timeline creation.
              </td>
            </tr>
            
            <tr>
              <td>onMove</td>
              <td>function</td>
              <td>none</td>
              <td>Callback function triggered when an item has been moved: after the user has dragged the item to an other position. See section <a href="#Editing_Items">Editing Items</a> for more information. Only applicable when both options <code>{`selectable`}</code> and <code>{`editable.updateTime`}</code> or <code>{`editable.updateGroup`}</code> are set <code>{`true`}</code>.
              </td>
            </tr>
            
            <tr>
              <td>onMoveGroup</td>
              <td>function</td>
              <td>none</td>
              <td>Callback function triggered when a group has been moved: after the user has dragged the group to an other position. The signature and semantics are the same as for <code>{`onMove`}</code>.
              </td>
            </tr>
            
            <tr>
              <td>onMoving</td>
              <td>function</td>
              <td>none</td>
              <td>Callback function triggered repeatedly when an item is being moved. See section <a href="#Editing_Items">Editing Items</a> for more information. Only applicable when both options <code>{`selectable`}</code> and <code>{`editable.updateTime`}</code> or <code>{`editable.updateGroup`}</code> are set <code>{`true`}</code>.
              </td>
            </tr>
            
            <tr>
              <td>onRemove</td>
              <td>function</td>
              <td>none</td>
              <td>Callback function triggered when an item is about to be removed: when the user tapped the delete button on the top right of a selected item. See section <a href="#Editing_Items">Editing Items</a> for more information. Only applicable when both options <code>{`selectable`}</code> and <code>{`editable.remove`}</code> are set <code>{`true`}</code>.
              </td>
            </tr>
            
            <tr>
              <td>onRemoveGroup</td>
              <td>function</td>
              <td>none</td>
              <td>Callback function triggered when a group is about to be removed. The signature and semantics are the same as for <code>{`onRemove`}</code>.
              </td>
            </tr>

            <tr className='toggle collapsible' onclick="toggleTable('optionTable','onTimeout', this);">
              <td><span parent="onTimeout" className="right-caret"></span> onTimeout</td>
              <td>Object</td>
              <td><code>{`Object`}</code></td>
              <td>Specify timeline bailing options when a specified timeout is reached.</td>
            </tr>
            <tr parent="onTimeout" className="hidden">
              <td className="indent">onTimeout.timeoutMs</td>
              <td>number</td>
              <td>none</td>
              <td>Number of milliseconds until the callback function should be called. 
                The callback will not be called if the timeline gets drawn completely before the timeoutMs limit.</td>
            </tr>

            <tr parent="onTimeout" className="hidden">
              <td className="indent">onTimeout.callback</td>
              <td>function</td>
              <td>none</td>
              <td>
                A callback function called when <code>{`timeoutMs`}</code> milliseconds pass and the timeline has yet to be fully drawn initially.
              </td>
            </tr>
            
            <tr>
              <td>onUpdate</td>
              <td>function</td>
              <td>none</td>
              <td>Callback function triggered when an item is about to be updated, when the user double taps an item in the Timeline. See section <a href="#Editing_Items">Editing Items</a> for more information. Only applicable when both options <code>{`selectable`}</code> and <code>{`editable.updateTime`}</code> or <code>{`editable.updateGroup`}</code> are set <code>{`true`}</code>.
              </td>
            </tr>
            
            <tr>
              <td>order</td>
              <td>function</td>
              <td>none</td>
              <td>
                <p>Provide a custom sort function to order the items. The order of the
                  items is determining the way they are stacked. The function
                  order is called with two arguments containing the data of two items to be
                  compared.
                </p>
                <p style={{fontStyle: 'italic'}}>WARNING: Use with caution. Custom ordering is not suitable for large amounts of items. On load, the Timeline will render all items once to determine their width and height. Keep the number of items in this configuration limited to a maximum of a few hundred items.</p>
              </td>
            </tr>

            <tr className='toggle collapsible' onclick="toggleTable('optionTable','orientation', this);">
              <td><span parent="orientation" className="right-caret"></span> orientation</td>
              <td>String or Object</td>
              <td><code>{`'bottom'`}</code></td>
              <td>Orientation of the timelines axis and items. When orientation is a string, the value is applied to both items and axis. Can be 'top', 'bottom' (default), 'both', or 'none'.</td>
            </tr>
            <tr parent="orientation" className="hidden">
              <td className="indent">orientation.axis</td>
              <td>String</td>
              <td><code>{`'bottom'`}</code></td>
              <td>Orientation of the timeline axis: 'top', 'bottom' (default), 'both', or 'none'. If orientation is 'bottom', the time axis is drawn at the bottom. When 'top', the axis is drawn on top. When 'both', two axes are drawn, both on top and at the bottom. In case of 'none', no axis is drawn at all.</td>
            </tr>
            <tr parent="orientation" className="hidden">
              <td className="indent">orientation.item</td>
              <td>String</td>
              <td><code>{`'bottom'`}</code></td>
              <td>Orientation of the timeline items: 'top' or 'bottom' (default). Determines whether items are aligned to the top or bottom of the Timeline.</td>
            </tr>

            <tr className='toggle collapsible' onclick="toggleTable('optionTable','rollingMode', this);">
              <td><span parent="rollingMode" className="right-caret"></span> rollingMode</td>
              <td>Object</td>
              <td><code>{`Object`}</code></td>
              <td>Specify how the timeline implements rolling mode.</td>
            </tr>
            <tr parent="rollingMode" className="hidden">
              <td className="indent">rollingMode.follow</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, the timeline will initial in a rolling mode - the current time will always be centered. I the user drags the timeline, the timeline will go out of rolling mode and a toggle button will appear. Clicking that button will go back to rolling mode. Zooming in rolling mode will zoom in to the center without consideration of the mouse position.</td>
            </tr>

            <tr parent="rollingMode" className="hidden">
              <td className="indent">rollingMode.offset</td>
              <td>Number</td>
              <td><code>{`'0.5'`}</code></td>
              <td>
                Set how far from the left the rolling mode is implemented from. A percentage (i.e. a decimal between 0 and 1)
                Defaults to the middle or 0.5 (50%)
              </td>
            </tr>

            <tr>
              <td>rtl</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, the timeline will be right-to-left. Note: you can achieve rtl timeline by defining a parent node with <code>{`dir="rtl"`}</code>. The timeline knows to take the nearest parent node direction and apply it. Notice that the timeline will prefer the <code>{`option.rtl`}</code> over any parent <code>{`dir="rtl"`}</code></td>
            </tr>

            <tr>
              <td>selectable</td>
              <td>boolean</td>
              <td><code>{`true`}</code></td>
              <td>If true, the items on the timeline can be selected. Multiple items can be selected by long pressing them, or by using ctrl+click or shift+click. The event <code>{`select`}</code> is fired each time the selection has changed (see section <a href="#Events">Events</a>).</td>
            </tr>

            <tr>
              <td>showCurrentTime</td>
              <td>boolean</td>
              <td><code>{`true`}</code></td>
              <td>Show a vertical bar at the current time.</td>
            </tr>

            <tr>
              <td>showMajorLabels</td>
              <td>boolean</td>
              <td><code>{`true`}</code></td>
              <td>By default, the timeline shows both minor and major date labels on the
                time axis.
                For example the minor labels show minutes and the major labels show hours.
                When <code>{`showMajorLabels`}</code> is <code>{`false`}</code>, no major labels
                are shown.</td>
            </tr>

            <tr>
              <td>showMinorLabels</td>
              <td>boolean</td>
              <td><code>{`true`}</code></td>
              <td>By default, the timeline shows both minor and major date labels on the
                time axis.
                For example the minor labels show minutes and the major labels show hours.
                When <code>{`showMinorLabels`}</code> is <code>{`false`}</code>, no minor labels
                are shown. When both <code>{`showMajorLabels`}</code> and
                <code>{`showMinorLabels`}</code> are false, no horizontal axis will be
                visible.</td>
            </tr>

            <tr>
              <td>showTooltips</td>
              <td>boolean</td>
              <td><code>{`true`}</code></td>
              <td>If true, items with titles will display a tooltip. If false, item tooltips are prevented from showing.</td>
            </tr>

            <tr>
              <td>stack</td>
              <td>boolean</td>
              <td><code>{`true`}</code></td>
              <td>If true (default), items will be stacked on top of each other such that they do not overlap.</td>
            </tr>

            <tr>
              <td>stackSubgroups</td>
              <td>boolean</td>
              <td><code>{`true`}</code></td>
              <td>If true (default), subgroups will be stacked on top of each other such that they do not overlap.</td>
            </tr>

            <tr>
              <td>snap</td>
              <td>function or null</td>
              <td>function</td>
              <td>When moving items on the Timeline, they will be snapped to nice dates like full hours or days, depending on the current scale. The <code>{`snap`}</code> function can be replaced with a custom function, or can be set to <code>{`null`}</code> to disable snapping. The signature of the snap function is:
                <pre className="prettyprint lang-js">{`function snap(date: Date, scale: string, step: number) : Date or number`}</pre>
                The parameter <code>{`scale`}</code> can be can be 'millisecond', 'second', 'minute', 'hour', 'weekday, 'week', 'day, 'month, or 'year'. The parameter <code>{`step`}</code> is a number like 1, 2, 4, 5.
              </td>
            </tr>

            <tr>
              <td>start</td>
              <td>Date or Number or String or Moment</td>
              <td>none</td>
              <td>The initial start date for the axis of the timeline.
                If not provided, the earliest date present in the events is taken as start date.</td>
            </tr>

            <tr>
              <td>template</td>
              <td>function</td>
              <td>none</td>
              <td>A template function used to generate the contents of the items. The function is called by the Timeline with an items' data as the first argument, the item element as the second argument and the edited data as the third argument, and must return HTML code, a string or a template as result. When the option template is specified, the items do not need to have a field <code>{`content`}</code>. See section <a href="#Templates">Templates</a> for a detailed explanation.</td>
            </tr>

            <tr>
              <td>visibleFrameTemplate</td>
              <td>function</td>
              <td>none</td>
              <td>A template function used to generate the visible frame of the items. The function is called by the Timeline with an items' data as the first argument and the item frame element as the second, and must return HTML code, a string or a template as result. When the option template is specified, the items do not need to have a field <code>{`content`}</code>. See section <a href="#Templates">Templates</a> for a detailed explanation.
              This would be used as an additional way to add content that is constant in size with the visible frame of the item and does not get visibly hidden with the item's internal container: <code>{`timeline-item-overflow`}</code> which is <code>{`overflow:hidden`}</code>.</td>
            </tr>

            <tr className='deprecated'>
              <td>throttleRedraw</td>
              <td>number</td>
              <td><code>{`0`}</code></td>
              <td>This option is <b>DEPRECATED</b> and no longer supported. It will be removed in the next MAJOR release.</td>
            </tr>

            <tr className='toggle collapsible' onclick="toggleTable('optionTable','timeAxis', this);">
              <td><span parent="timeAxis" className="right-caret"></span> timeAxis</td>
              <td>Object</td>
              <td><code>{`Object`}</code></td>
              <td>Specify a fixed scale and step size for the time axis.</td>
            </tr>
            <tr parent="timeAxis" className="hidden">
              <td className="indent">timeAxis.scale</td>
              <td>String</td>
              <td>none</td>
              <td>Set a fixed scale for the time axis of the Timeline. Choose from <code>{`'millisecond'`}</code>, <code>{`'second'`}</code>, <code>{`'minute'`}</code>, <code>{`'hour'`}</code>, <code>{`'weekday'`}</code>, <code>{`'week'`}</code>, <code>{`'day'`}</code>, <code>{`'month'`}</code>, <code>{`'year'`}</code>. Example usage:
              <pre className="prettyprint lang-js">
{`var options = {
  timeAxis: {scale: 'minute', step: 5}
}`}
              </pre>
                <p>Note: The 'week' scale only works properly when <a href="#Localization">locales</a> are enabled.</p>
              </td>
            </tr>

            <tr parent="timeAxis" className="hidden">
              <td className="indent">timeAxis.step</td>
              <td>number</td>
              <td><code>{`1`}</code></td>
              <td>
                Set a fixed step size for the time axis. Only applicable when used together with <code>{`timeAxis.scale`}</code>.
                Choose for example 1, 2, 5, or 10.</td>
            </tr>

            <tr>
              <td>type</td>
              <td>String</td>
              <td>none</td>
              <td>Specifies the default type for the timeline items. Choose from 'box', 'point', 'range', and 'background'. Note that individual items can override this default type. If undefined, the Timeline will auto detect the type from the items data: if a start and end date is available, a 'range' will be created, and else, a 'box' is created. Items of type 'background' are not editable.
              </td>
            </tr>

            <tr className='toggle collapsible' onclick="toggleTable('optionTable','tooltip', this);">
              <td><span parent="tooltip" className="right-caret"></span> tooltip</td>
              <td>Object</td>
              <td><code>{`Object`}</code></td>
              <td>Specify how the tooltip is positioned.</td>
            </tr>
            <tr parent="tooltip" className="hidden">
              <td className="indent">tooltip.followMouse</td>
              <td>boolean</td>
              <td><code>{`false`}</code></td>
              <td>If true, tooltips will follow the mouse as they move around in the item.</td>
            </tr>

            <tr parent="tooltip" className="hidden">
              <td className="indent">tooltip.overflowMethod</td>
              <td>String</td>
              <td><code>{`'flip'`}</code></td>
              <td>
                Set how the tooltip should act if it is about to overflow out of the timeline.<br />
                Choose from <code>{`'cap'`}</code> and <code>{`'flip'`}</code>. <br />
                If it is set to <code>{`'cap'`}</code>, the tooltip will just cap its position to inside to timeline. <br />
                While if it is set to <code>{`'flip'`}</code>, the position of the tooltip will flip around the cursor so that a corner is at the cursor, and the rest of it is visible. <br />
              </td>
            </tr>

            <tr className='toggle collapsible' onclick="toggleTable('optionTable','tooltipOnItemUpdateTime', this);">
              <td><span parent="tooltipOnItemUpdateTime" className="right-caret"></span> tooltipOnItemUpdateTime</td>
              <td>Object/Boolean</td>
              <td><code>{`false`}</code></td>
              <td>Show a tooltip on updating an item's time. Note: <code>{`editable.updateTime`}</code> must be <code>{`true`}</code></td>
            </tr>
            <tr parent="tooltipOnItemUpdateTime" className="hidden">
              <td className="indent">template</td>
              <td>Function</td>
              <td>none</td>
              <td>A template function used to generate the contents of the tooltip. The function is called by the Timeline with an item data as the first argument, and must return HTML code, a string or a template as result. See section <a href="#Templates">Templates</a> for a detailed explanation.
              </td>
            </tr>
            <tr>
              <td>verticalScroll</td>
              <td>Boolean</td>
              <td><code>{`false`}</code></td>
              <td> Show a vertical scroll on the side of the group list and link it to the scroll event when zoom is not triggered. Notice that defining this option as <code>{`true`}</code> will NOT override <code>{`horizontalScroll`}</code>. The scroll event will be vertically ignored, but a vertical scrollbar will be visible
              </td>
            </tr>

            <tr>
              <td>width</td>
              <td>String or Number</td>
              <td><code>{`'100%'`}</code></td>
              <td>The width of the timeline in pixels or as a percentage.</td>
            </tr>

            <tr>
              <td>zoomable</td>
              <td>boolean</td>
              <td><code>{`true`}</code></td>
              <td>
                Specifies whether the Timeline can be zoomed by pinching or scrolling in the window.
                Only applicable when option <code>{`moveable`}</code> is set <code>{`true`}</code>.
              </td>
            </tr>

            <tr>
              <td>zoomKey</td>
              <td>String</td>
              <td><code>{`''`}</code></td>
              <td>Specifies whether the Timeline is only zoomed when an additional key is down.
                Available values are '' (does not apply), 'altKey', 'ctrlKey', or 'metaKey'.
                Only applicable when option <code>{`moveable`}</code> is set <code>{`true`}</code>.
              </td>
            </tr>

            <tr>
              <td>zoomMax</td>
              <td>number</td>
              <td><code>{`315360000000000`}</code></td>
              <td>Set a maximum zoom interval for the visible range in milliseconds.
                It will not be possible to zoom out further than this maximum.
                Default value equals about 10000 years.
              </td>
            </tr>

            <tr>
              <td>zoomMin</td>
              <td>number</td>
              <td><code>{`10`}</code></td>
              <td>Set a minimum zoom interval for the visible range in milliseconds.
                It will not be possible to zoom in further than this minimum.
              </td>
            </tr>
          </tbody>
          </table>

          <h2 id="Methods">Methods</h2>
          <p>
            The Timeline supports the following methods.
          </p>

          <table className="methods">
          <tbody>
            <tr>
              <th>Method</th>
              <th>Return&nbsp;Type</th>
              <th>Description</th>
            </tr>

            <tr>
              <td>addCustomTime([time] [, id])</td>
              <td>number or String</td>
              <td>
                Add new vertical bar representing a custom time that can be dragged by the user.
                Parameter <code>{`time`}</code> can be a Date, Number, or String, and is <code>{`new Date()`}</code> by default.
                Parameter <code>{`id`}</code> can be Number or String and is <code>{`undefined`}</code> by default.
                The <code>{`id`}</code>code> is added as CSS class name of the custom time bar, allowing to style multiple time bars differently.
                The method returns id of the created bar.
              </td>
            </tr>

            <tr>
              <td>destroy()</td>
              <td>none</td>
              <td>Destroy the Timeline. The timeline is removed from memory. all DOM elements and event listeners are cleaned up.
              </td>
            </tr>

            <tr>
              <td>fit([options])</td>
              <td>none</td>
              <td>Adjust the visible window such that it fits all items. See also function <code>{`focus(id)`}</code>.
                Available options:
                <ul>
                  <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>focus(id or ids [, options])</td>
              <td>none</td>
              <td>Adjust the visible window such that the selected item (or multiple items) are centered on screen. See also function <code>{`fit()`}</code>. Available options:
                <ul>
                  <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>getCurrentTime()</td>
              <td>Date</td>
              <td>Get the current time. Only applicable when option <code>{`showCurrentTime`}</code> is true.
              </td>
            </tr>

            <tr>
              <td>getCustomTime([id])</td>
              <td>Date</td>
              <td>Retrieve the custom time from the custom time bar with given id. Id is <code>{`undefined`}</code> by default.
              </td>
            </tr>

            <tr id="getEventProperties">
              <td>getEventProperties(event)</td>
              <td>Object</td>
              <td>
                Returns an Object with relevant properties from an event:
                <ul>
                  <li><code>{`group`}</code> (Number or null): the id of the clicked group.</li>
                  <li><code>{`item`}</code> (Number or null): the id of the clicked item.</li>
                  <li><code>{`pageX`}</code> (Number): absolute horizontal position of the click event.</li>
                  <li><code>{`pageY`}</code> (Number): absolute vertical position of the click event.</li>
                  <li><code>{`x`}</code> (Number): relative horizontal position of the click event.</li>
                  <li><code>{`y`}</code> (Number): relative vertical position of the click event.</li>
                  <li><code>{`time`}</code> (Date): Date of the clicked event.</li>
                  <li><code>{`snappedTime`}</code> (Date): Date of the clicked event, snapped to a nice value.</li>
                  <li><code>{`what`}</code> (String or null): name of the clicked thing: <code>{`item`}</code>, <code>{`background`}</code>, <code>{`axis`}</code>, <code>{`group-label`}</code>, <code>{`custom-time`}</code>, or <code>{`current-time`}</code>.</li>
                  <li><code>{`event`}</code> (Object): the original click event.</li>
                </ul>
                Example usage:
                <pre className="prettyprint lang-js">
{`document.getElementById('myTimeline').onclick = function (event) {
  var props = timeline.getEventProperties(event)
  console.log(props);
}`}
                </pre>
              </td>
            </tr>

            <tr>
              <td>getItemRange()</td>
              <td>Object</td>
              <td>Get the range of all the items as an object containing <code>{`min: Date`}</code> and <code>{`max: Date`}</code>.</td>
            </tr>

            <tr>
              <td>getSelection()</td>
              <td>number[]</td>
              <td>Get an array with the ids of the currently selected items.</td>
            </tr>

            <tr>
              <td>getVisibleItems()</td>
              <td>number[]</td>
              <td>Get an array with the ids of the currently visible items.</td>
            </tr>

            <tr>
              <td>getWindow()</td>
              <td>Object</td>
              <td>Get the current visible window. Returns an object with properties <code>{`start: Date`}</code> and <code>{`end: Date`}</code>.</td>
            </tr>

            <tr>
              <td>isActive()</td>
              <td>Boolean</td>
              <td>Denotes whether the timeline is currently active. This method only returns <code>{`false`}</code> if the timline has the <code>{`{clickToUse:true}`}</code> option enabled and the timeline is currently unselected.</td>
            </tr>
            
            <tr>
              <td>moveTo(time [, options, callback])</td>
              <td>none</td>
              <td>Move the window such that given time is centered on screen. Parameter <code>{`time`}</code> can be a <code>{`Date`}</code>, <code>{`Number`}</code>, or <code>{`String`}</code>. Available options:
                <ul>
                  <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
                </ul>
                A callback <code>{`function`}</code> can be passed as an optional parameter. This function will be called at the end of moveTo function.
              </td>
            </tr>

            <tr>
              <td>on(event, callback)</td>
              <td>none</td>
              <td>Create an event listener. The callback function is invoked every time the event is triggered. Available events: <code>{`rangechange`}</code>, <code>{`rangechanged`}</code>, <code>{`select`}</code>, <code>{`itemover`}</code>, <code>{`itemout`}</code>. The callback function is invoked as <code>{`callback(properties)`}</code>, where <code>{`properties`}</code> is an object containing event specific properties. See section <a href="#Events">Events for more information</a>.</td>
            </tr>

            <tr>
              <td>off(event, callback)</td>
              <td>none</td>
              <td>Remove an event listener created before via function <code>{`on(event, callback)`}</code>. See section <a href="#Events">Events for more information</a>.</td>
            </tr>

            <tr>
              <td>redraw()</td>
              <td>none</td>
              <td>Force a redraw of the Timeline. The size of all items will be recalculated.
                Can be useful to manually redraw when option <code>{`autoResize=false`}</code> and the window
                has been resized, or when the items CSS has been changed.
              </td>
            </tr>

            <tr>
              <td>removeCustomTime(id)</td>
              <td>none</td>
              <td>
                Remove vertical bars previously added to the timeline via <code>{`addCustomTime`}</code> method. Parameter <code>{`id`}</code> is the ID of the custom vertical bar returned by <code>{`addCustomTime`}</code> method.
              </td>
            </tr>

            <tr>
              <td>setCurrentTime(time)</td>
              <td>none</td>
              <td>Set a current time. This can be used for example to ensure that a client's time is synchronized with a shared server time.
                <code>{`time`}</code> can be a Date object, numeric timestamp, or ISO date string.
                Only applicable when option <code>{`showCurrentTime`}</code> is true.</td>
            </tr>

            <tr>
              <td>setCustomTime(time [, id])</td>
              <td>none</td>
              <td>Adjust the time of a custom time bar.
                Parameter <code>{`time`}</code> can be a Date object, numeric timestamp, or ISO date string.
                Parameter <code>{`id`}</code> is the id of the custom time bar, and is <code>{`undefined`}</code> by default.
              </td>
            </tr>

            <tr>
              <td>setCustomTimeTitle(title [, id])</td>
              <td>none</td>
              <td>Adjust the title attribute of a custom time bar.
                Parameter <code>{`title`}</code> is the string or function to be set as title. Use empty string to hide the title completely.
                Parameter <code>{`id`}</code> is the id of the custom time bar, and is <code>{`undefined`}</code> by default.
              </td>
            </tr>

            <tr>
              <td>{`setData({groups: groups, items: items})`}</td>
              <td>none</td>
              <td>Set both groups and items at once. Both properties are optional. This is a convenience method for individually calling both <code>{`setItems(items)`}</code> and <code>{`setGroups(groups)`}</code>.
                Both <code>{`items`}</code> and <code>{`groups`}</code> can be an Array with Objects,
                a DataSet (offering 2 way data binding), or a DataView (offering 1 way data binding).
                For each of the groups, the items of the timeline are filtered on the
                property <code>{`group`}</code>, which must correspond with the id of the group.
              </td>
            </tr>

            <tr>
              <td>setGroups(groups)</td>
              <td>none</td>
              <td>Set a data set with groups for the Timeline.
                <code>{`groups`}</code> can be an Array with Objects,
                a DataSet (offering 2 way data binding), or a DataView (offering 1 way data binding).
                For each of the groups, the items of the timeline are filtered on the
                property <code>{`group`}</code>, which must correspond with the id of the group.
              </td>
            </tr>

            <tr>
              <td>setItems(items)</td>
              <td>none</td>
              <td>Set a data set with items for the Timeline.
                <code>{`items`}</code> can be an Array with Objects,
                a DataSet (offering 2 way data binding), or a DataView (offering 1 way data binding).
              </td>
            </tr>

            <tr>
              <td>setOptions(options)</td>
              <td>none</td>
              <td>Set or update options. It is possible to change any option of the timeline at any time. You can for example switch orientation on the fly.
              </td>
            </tr>

            <tr>
              <td>setSelection(id or ids [, options])</td>
              <td>none</td>
              <td>Select one or multiple items by their id. The currently selected items will be unselected. To unselect all selected items, call `setSelection([])`. Available options:
                <ul>
                  <li><code>{`focus: boolean`}</code><br/>If true, focus will be set to the selected item(s)</li>
                  <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Only applicable when option focus is true. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>setWindow(start, end [, options, callback])</td>
              <td>none</td>
              <td>Set the current visible window. The parameters <code>{`start`}</code> and <code>{`end`}</code> can be a <code>{`Date`}</code>, <code>{`Number`}</code>, or <code>{`String`}</code>. If the parameter value of <code>{`start`}</code> or <code>{`end`}</code> is null, the parameter will be left unchanged. Available options:
                <ul>
                  <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
                </ul>
                A callback <code>{`function`}</code> can be passed as an optional parameter. This function will be called at the end of setWindow function. 
              </td>
            </tr>

            <tr>
              <td>toggleRollingMode()</td>
              <td>none</td>
              <td>Toggle rollingMode.
              </td>
            </tr>

            <tr>
              <td>zoomIn(percentage [, options, callback])</td>
              <td>none</td>
              <td>Zoom in the current visible window. The parameter <code>{`percentage`}</code> can be a <code>{`Number`}</code> and must be between 0 and 1. If the parameter value of <code>{`percentage`}</code> is null, the window will be left unchanged. Available options:
                <ul>
                  <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
                </ul>
                A callback <code>{`function`}</code> can be passed as an optional parameter. This function will be called at the end of zoomIn function.
              </td>
            </tr>
            <tr>
              <td>zoomOut(percentage [, options, callback])</td>
              <td>none</td>
              <td>Zoom out the current visible window. The parameter <code>{`percentage`}</code> can be a <code>{`Number`}</code> and must be between 0 and 1. If the parameter value of <code>{`percentage`}</code> is null, the window will be left unchanged. Available options:
                <ul>
                  <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
                </ul>
                A callback <code>{`function`}</code> can be passed as an optional parameter. This function will be called at the end of zoomOut function.
              </td>
            </tr>

          </tbody>
            </table>

          <h2 id="Events">Events</h2>
          <p>
            Timeline fires events when changing the visible window by dragging, when
            selecting items, and when dragging the custom time bar.
          </p>

          <p>
            Here an example on how to listen for a <code>{`select`}</code> event.
          </p>

        <pre className="prettyprint lang-js">
{`timeline.on('select', function (properties) {
  alert('selected items: ' + properties.items);
});`}
        </pre>

          <p>
            A listener can be removed via the function <code>{`off`}</code>:
          </p>

        <pre className="prettyprint lang-js">
{`function onSelect (properties) {
  alert('selected items: ' + properties.items);
}

// add event listener
timeline.on('select', onSelect);

// do stuff...

// remove event listener
timeline.off('select', onSelect);`}
        </pre>

          <p>
            The following events are available.
          </p>

          <table className="events">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Properties</th>
              <th>Description</th>
            </tr>

            <tr>
              <td>currentTimeTick</td>
              <td>Has no properties</td>
              <td>Fired when the current time bar redraws. The rate depends on the zoom level.</td>
            </tr>

            <tr>
              <td>click</td>
              <td>
                Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
              </td>
              <td>Fired when clicked inside the Timeline.
              </td>
            </tr>

            <tr>
              <td>contextmenu</td>
              <td>
                Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
              </td>
              <td>Fired when right-clicked inside the Timeline. Note that in order to prevent the context menu from showing up, default behavior of the event must be stopped:
        <pre className="prettyprint lang-js">
{`timeline.on('contextmenu', function (props) {
  alert('Right click!');
  props.event.preventDefault();
});`}
        </pre>
              </td>
            </tr>

            <tr>
              <td>doubleClick</td>
              <td>
                Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
              </td>
              <td>Fired when double clicked inside the Timeline.
              </td>
            </tr>

            <tr>
              <td>drop</td>
              <td>
                Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
              </td>
              <td>Fired when dropping inside the Timeline.
              </td>
            </tr>


            <tr>
              <td>mouseOver</td>
              <td>
                Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
              </td>
              <td>Fired when the mouse hovers over a timeline element.
              </td>
            </tr>

            <tr>
              <td>mouseDown</td>
              <td>
                Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
              </td>
              <td>Fired when the mouse down event is triggered over a timeline element.
              </td>
            </tr>

            <tr>
              <td>mouseUp</td>
              <td>
                Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
              </td>
              <td>Fired when the mouse up event is triggered over a timeline element.
              </td>
            </tr>

            <tr>
              <td>mouseMove</td>
              <td>
                Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
              </td>
              <td>Fired when the mouse is moved over a timeline element.
              </td>
            </tr>

            <tr>
              <td>groupDragged</td>
              <td>
                Passes the id of the dragged group.
              </td>
              <td>Fired after the dragging of a group is finished.
              </td>
            </tr>

            <tr>
              <td>changed</td>
              <td>
                Has no properties.
              </td>
              <td>Fired once after each graph redraw.
              </td>
            </tr>
            <tr>
              <td>rangechange</td>
              <td>
                <ul>
                  <li><code>{`start`}</code> (Number): timestamp of the current start of the window.</li>
                  <li><code>{`end`}</code> (Number): timestamp of the current end of the window.</li>
                  <li><code>{`byUser`}</code> (Boolean): change happened because of user drag/zoom.</li>
                  <li><code>{`event`}</code> (Object): original event triggering the rangechange.</li>
                </ul>
              </td>
              <td>Fired repeatedly when the timeline window is being changed.
              </td>
            </tr>

            <tr>
              <td>rangechanged</td>
              <td>
                <ul>
                  <li><code>{`start`}</code> (Number): timestamp of the current start of the window.</li>
                  <li><code>{`end`}</code> (Number): timestamp of the current end of the window.</li>
                  <li><code>{`byUser`}</code> (Boolean): change happened because of user drag/zoom.</li>
                  <li><code>{`event`}</code> (Object): original event triggering the rangechanged.</li>
                </ul>
              </td>
              <td>Fired once after the timeline window has been changed.
              </td>
            </tr>

            <tr>
              <td>select</td>
              <td>
                <ul>
                  <li><code>{`items`}</code>: an array with the ids of the selected items</li>
                  <li><code>{`event`}</code>: the original click event</li>
                </ul>
              </td>
              <td>Fired after the user selects or deselects items by tapping or holding them.
                When a user taps an already selected item, the select event is fired again.
                Not fired when the method <code>{`setSelection`}</code>is executed.
              </td>
            </tr>

            <tr>
              <td>itemover</td>
              <td>
                <ul>
                  <li><code>{`item`}</code>: hovered item id</li>
                  <li><code>{`event`}</code>: the original mouseover event</li>
                </ul>
              </td>
              <td>Fired when the user moves the mouse over an item.</td>
            </tr>

            <tr>
              <td>itemout</td>
              <td>
                <ul>
                  <li><code>{`item`}</code>: hovered item id</li>
                  <li><code>{`event`}</code>: the original mouseout event</li>
                </ul>
              </td>
              <td>Fired when the user moves the mouse out of an item.</td>
            </tr>

            <tr>
              <td>timechange</td>
              <td>
                <ul>
                  <li><code>{`id`}</code> (Number or String): custom time bar id.</li>
                  <li><code>{`time`}</code> (Date): the custom time.</li>
                  <li><code>{`event`}</code> (Object): original event triggering the timechange.</li>
                </ul>
              </td>
              <td>Fired repeatedly when the user is dragging the custom time bar.
                Only available when the custom time bar is enabled.
              </td>
            </tr>

            <tr>
              <td>timechanged</td>
              <td>
                <ul>
                  <li><code>{`id`}</code> (Number or String): custom time bar id.</li>
                  <li><code>{`time`}</code> (Date): the custom time.</li>
                  <li><code>{`event`}</code> (Object): original event triggering the timechanged.</li>
                </ul>
              </td>
              <td>Fired once after the user has dragged the custom time bar.
                Only available when the custom time bar is enabled.
              </td>
            </tr>

          </tbody>
            </table>

          <h2 id="Editing_Items">Editing Items</h2>
          <p>
            When the Timeline is configured to be editable (both options <code>{`selectable`}</code> and <code>{`editable`}</code> are <code>{`true`}</code>), the user can:
          </p>
          <ul>
            <li>Select an item by clicking it, and use ctrl+click to or shift+click to select multiple items (when <code>{`multiselect: true`}</code>).</li>
            <li>Move selected items by dragging them.</li>
            <li>Create a new item by double tapping on an empty space.</li>
            <li>Create a new range item by dragging on an empty space with the ctrl key down.</li>
            <li>Update an item by double tapping it.</li>
            <li>Delete a selected item by clicking the delete button on the top right.</li>
          </ul>

          <p>Option <code>{`editable`}</code> accepts a boolean or an object. When <code>{`editable`}</code> is a boolean, all manipulation actions will be either enabled or disabled. When <code>{`editable`}</code> is an object, one can enable individual manipulation actions:</p>

        <pre className="prettyprint lang-js">
{` //enable or disable all manipulation actions
var options = {
  editable: true       // true or false
};

// enable or disable individual manipulation actions
var options = {
  editable: {
    add: true,         // add new items by double tapping
    updateTime: true,  // drag items horizontally
    updateGroup: true, // drag items from one group to another
    remove: true,       // delete an item by tapping the delete button top right
    overrideItems: false  // allow these options to override item.editable
  }
};`}
        </pre>

          <p>
            Editing can be enabled/disabled for specific items. Setting the property <code>{`editable`}</code> to <code>{`true`}</code> or <code>{`false`}</code> on a data item will override the timeline option except when <code>{`timeline.editable.overrideItems`}</code> is set to <code>{`true`}</code>.
          </p>

        <pre className="prettyprint lang-js">
{`var items = new timeline.DataSet([
  {id: 1, content: 'read-only item', start: '2013-04-20', editable: false},
  {id: 2, content: 'editable item', start: '2013-04-14'}
]);`}
        </pre>

          <p>
            Individual manipulation actions (<code>{`updateTime`}</code>, <code>{`updateGroup`}</code> and <code>{`remove`}</code>) can also be set on individual items. If any of the item-level
            actions are specified (and <code>{`overrideItems`}</code> is not <code>{`false`}</code>) then that takes precedence over the settings at the timeline level. Current behavior is
            that if any of the item-level actions are not specified, those items get <code>{`undefined`}</code> value (rather than inheriting from the timeline level). This may change
            in future major releases, and code that specifies all item level values will handle major release changes better. That is, instead of using
            <code>{`editable: {updateTime : true}`}</code>, use <code>{`editable: {updateTime : true, updateGroup: false, remove: false}`}</code>.
          </p>

          <p>
            One can specify callback functions to validate changes made by the user. There are a number of callback functions for this purpose:
          </p>

          <ul>
            <li><code>{`onAdd(item, callback)`}</code> Fired when a new item is about to be added. If not implemented, the item will be added with default text contents.</li>
            <li><code>{`onUpdate(item, callback)`}</code> Fired when an item is about to be updated. This function typically has to show a dialog where the user change the item. If not implemented, nothing happens.</li>
            <li><code>{`onDropObjectOnItem(objectData, item)`}</code> Fired when an object is dropped in to an existing timeline item.</li>
            <li><code>{`onMove(item, callback)`}</code> Fired when an item has been moved. If not implemented, the move action will be accepted.</li>
            <li><code>{`onMoving(item, callback)`}</code> Fired repeatedly while an item is being moved (dragged). Can be used to adjust the items start, end, and/or group to allowed regions.</li>
            <li><code>{`onRemove(item, callback)`}</code> Fired when an item is about to be deleted. If not implemented, the item will be always removed.</li>
          </ul>

          <p>
            Each of the callbacks is invoked with two arguments:
          </p>
          <ul>
            <li><code>{`item`}</code>: the item being manipulated</li>
            <li><code>{`callback`}</code>: a callback function which must be invoked to report back. The callback must be invoked as <code>{`callback(item)`}</code> or <code>{`callback(null)`}</code>.
            Here, <code>{`item`}</code> can contain changes to the passed item. Parameter <code>{`item`}</code> typically contains fields `content`, `start`, and optionally `end`. The type of `start`
            and `end` is determined by the DataSet type configuration and is `Date` by default.  When invoked as <code>{`callback(null)`}</code>, the action will be cancelled.</li>
          </ul>

          <p>
            Example code:
          </p>

        <pre className="prettyprint lang-js">
{`var options = {
  onUpdate: function (item, callback) {
    item.content = prompt('Edit items text:', item.content);
    if (item.content != null) {
      callback(item); // send back adjusted item
    }
    else {
      callback(null); // cancel updating the item
    }
  }
};`}
        </pre>

          A full example is available here: <a href="../examples/editing/editingItemsCallbacks.html">editingItemsCallbacks.html</a>.


          <h2 id="Templates">Templates</h2>

          <p>
            Timeline supports templates to format item contents. Any template engine (such as <a href="http://handlebarsjs.com/">handlebars</a> or <a href="http://mustache.github.io/">mustache</a>) can be used, and one can also manually build HTML. In the options, one can provide a template handler. This handler is a function accepting an item's data as the first argument, the item element as the second argument and the edited data as the third argument, and outputs formatted HTML:
          </p>

        <pre className="prettyprint lang-js">
{`var options = {
  template: function (item, element, data) {
    var html = ... // generate HTML markup for this item
    return html;
  }
};`}
        </pre>

          <h3>Create HTML manually</h3>

          The HTML for an item can be created manually:

        <pre className="prettyprint lang-js">
{`var options = {
  template: function (item, element, data) {
    return '<h1>' + item.header + data.moving?' '+ data.start:'' + '</h1><p>' + item.description + '</p>';
  },
  onMoving: function (item, callback) {
    item.moving = true;
  }
};`}
        </pre>

          <h3>Using a template engine</h3>

          Using <a href="http://handlebarsjs.com/">handlebars</a>, one can write the template in HTML:

        <pre className="prettyprint lang-html">
{`<script id="item-template" type="text/x-handlebars-template">
  <h1>{{header}}</h1>
  <p>{{description}}</p>
</script> `}
        </pre>

          Compile the template:

        <pre className="prettyprint lang-js">
{`var source = document.getElementById('item-template').innerHTML;
var template = Handlebars.compile(source);`}
        </pre>

          And then specify the template in the Timeline options

        <pre className="prettyprint lang-js">
{`var options = {
  template: template
};`}
        </pre>

        <h3>React templates</h3>

        You can use a React component for the templates by rendering them to the templates' element directly:

        <pre className="prettyprint lang-js">
{`template: function (item, element, data) {
  return ReactDOM.render(<b>{item.content}</b>, element);
}`}
        </pre>


          <h3>Multiple templates</h3>

          In order to support multiple templates, the template handler can be extended to switch between different templates, depending on a specific item property:

        <pre className="prettyprint lang-js">
{`var templates = {
  template1: Handlebars.compile(...),
  template2: Handlebars.compile(...),
  template2: Handlebars.compile(...),
  ...
};

var options = {
  template: function (item, element, data) {
    var template = templates[item.template];  // choose the right template
    return template(item);                    // execute the template
  }
};`}
        </pre>

          Now the items can be extended with a property <code>{`template`}</code>, specifying which template to use for the item.


          <h2 id="Localization">Localization</h2>
          <p>
            Timeline can be localized. For localization, Timeline depends largely on the localization of <a href="http://momentjs.com">moment.js</a>. Locales are not included in timeline.js by default. To enable localization, moment.js must be loaded with locales. Moment.js offers a bundle named "moment-with-locales.min.js" for this and there are various alternative ways to load locales.
          </p>

          <p>
            To set a locale for the Timeline, specify the option <code>{`locale`}</code>:
          </p>

        <pre className="prettyprint lang-js">
{`var options = {
  locale: 'nl'
};`}
        </pre>

          <h3>Create a new locale</h3>

          To load a locale (that is not supported by default) into the Timeline, one can add a new locale to the option <code>{`locales`}</code>:

        <pre className="prettyprint lang-js">
{`var options = {
  locales: {
    // create a new locale (text strings should be replaced with localized strings)
    mylocale: {
      current: 'current',
      time: 'time',
    }
  },

  // use the new locale
  locale: 'mylocale'
};
`}
        </pre>

          <h3 id="available-locales">Available locales</h3>

          <p>
            Timeline comes with support for the following locales:
          </p>

          <table>
          <tbody>
            <tr>
              <th>Language</th>
              <th>Code</th>
            </tr>
            <tr>
              <td>English</td>
              <td>
                <code>{`en`}</code><br/>
                <code>{`en_EN`}</code><br/>
                <code>{`en_US`}</code>
              </td>
            </tr>
            <tr>
              <td>Italian</td>
              <td>
                <code>{`it`}</code><br/>
                <code>{`it_IT`}</code><br/>
                <code>{`it_CH`}</code>
              </td>
            </tr>
            <tr>
              <td>Dutch</td>
              <td>
                <code>{`nl`}</code><br/>
                <code>{`nl_NL`}</code><br/>
                <code>{`nl_BE`}</code>
              </td>
            </tr>
          <tr>
              <td>German</td>
              <td>
                <code>{`de`}</code><br/>
                <code>{`de_DE`}</code><br/>
              </td>
            </tr>
          </tbody>
            </table>


          <h2 id="Time_zone">Time zone</h2>
          <p>
            By default, the Timeline displays time in local time. To display a Timeline in another time zone or in UTC, the date constructor can be overloaded via the configuration option <code>{`moment`}</code>, which by default is the constructor function of moment.js. More information about UTC with moment.js can be found in the docs: <a href="http://momentjs.com/docs/#/parsing/utc/">http://momentjs.com/docs/#/parsing/utc/</a>.
          </p>

          <p>
            Examples:
          </p>

        <pre className="prettyprint lang-js">
{`//display in UTC
var options = {
  moment: function(date) {
    return timeline.moment(date).utc();
  }
};

// display in UTC +08:00
var options = {
  moment: function(date) {
    return timeline.moment(date).utcOffset('+08:00');
  }
};`}
        </pre>



          <h2 id="Styles">Styles</h2>
          <p>
            All parts of the Timeline have a class name and a default css style.
            The styles can be overwritten, which enables full customization of the layout
            of the Timeline.
          </p>

          <p>For example, to change the border and background color of all items, include the
            following code inside the head of your html code or in a separate stylesheet.</p>
        <pre className="prettyprint lang-html">
{`<style>
  .timeline-item {
    border-color: orange;
    background-color: yellow;
  }
</style>`}
        </pre>

          <h3 id="Grid_Backgrounds">Grid Backgrounds</h3>
          <p>
            The background grid of the time axis can be styled, for example to highlight
            weekends or to create grids with an alternating white/lightgray background.
          </p>
          <p>
            Depending on the zoom level, the grids get certain css classes attached.
            The following classes are available:
          </p>

          <table className="styles">
          <tbody>
            <tr>
              <th>Description</th><th>Values</th>
            </tr>
            <tr>
              <td>Alternating columns</td><td><code>{`timeline-even`}</code>, <code>{`timeline-odd`}</code></td>
            </tr>
            <tr>
              <td>Current date</td><td><code>{`timeline-today`}</code>, <code>{`timeline-tomorrow`}</code>, <code>{`timeline-yesterday`}</code>, <code>{`timeline-current-week`}</code>, <code>{`timeline-current-month`}</code>, <code>{`timeline-current-year`}</code></td>
            </tr>
            <tr>
              <td>Hours</td><td><code>{`timeline-h0`}</code>, <code>{`timeline-h1`}</code>, ..., <code>{`timeline-h23`}</code></td>
            </tr>
            <tr>
              <td>Grouped hours</td><td><code>{`timeline-h0-h4`}</code> to <code>{`timeline-h20-h24`}</code></td>
            </tr>
            <tr>
              <td>Weekday</td><td><code>{`timeline-monday`}</code>, <code>{`timeline-tuesday`}</code>, <code>{`timeline-wednesday`}</code>, <code>{`timeline-thursday`}</code>, <code>{`timeline-friday`}</code>, <code>{`timeline-saturday`}</code>, <code>{`timeline-sunday`}</code></td>
            </tr>
            <tr>
              <td>Days</td><td><code>{`timeline-day1`}</code>, <code>{`timeline-day2`}</code>, ..., <code>{`timeline-day31`}</code></td>
            </tr>
            <tr>
              <td>Week</td><td><code>{`timeline-week1`}</code>, <code>{`timeline-week2`}</code>, ..., <code>{`timeline-week53`}</code></td>
            </tr>
            <tr>
              <td>Months</td><td><code>{`timeline-january`}</code>, <code>{`timeline-february`}</code>, <code>{`timeline-march`}</code>, <code>{`timeline-april`}</code>, <code>{`timeline-may`}</code>, <code>{`timeline-june`}</code>, <code>{`timeline-july`}</code>, <code>{`timeline-august`}</code>, <code>{`timeline-september`}</code>, <code>{`timeline-october`}</code>, <code>{`timeline-november`}</code>, <code>{`timeline-december`}</code></td>
            </tr>
            <tr>
              <td>Years</td><td><code>{`timeline-year2014`}</code>, <code>{`timeline-year2015`}</code>, ...</td>
            </tr>
          </tbody>
            </table>
          <p>
            Note: the 'week' scale is not included in the automatic zoom levels as its scale is not a direct logical successor of 'days' nor a logical predecessor of 'months'
          </p>

          <p>Examples:</p>

          <pre className="prettyprint lang-html">
{`<style>
  /* alternating column backgrounds */
  .timeline-time-axis .grid.timeline-odd {
    background: #f5f5f5;
  }

  /* gray background in weekends, white text color */
  .timeline-time-axis .timeline-grid.timeline-saturday,
  .timeline-time-axis .timeline-grid.timeline-sunday {
    background: gray;
  }
  .timeline-time-axis .timeline-text.timeline-saturday,
  .timeline-time-axis .timeline-text.timeline-sunday {
    color: white;
  }
</style>`}
          </pre>

        <h3 id="Performance_Tips">Performance  Tips</h3>
        <p>Defining a timeline with many items and/or groups might affect initial loading time and general performance.
          Here are some tips to improve performance and avoid slow loading time:</p>
        <ul>
          <li>Define items and group with <code>{`DataSets`}</code></li>
          <li>Avoid applying heavy CSS on items (such as <code>{`box-shadow`}</code>, gradient background colors, etc.)</li>
          <li>Defining a <code>{`start`}</code> and an <code>{`end`}</code> in the timeline options.
          This will improve initial loading time.</li>
        </ul>
        </div>
        





        
      </div>
    );
  }
}

export default App;
