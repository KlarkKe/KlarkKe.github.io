
gdjs.evtsExt__TiledUnitsBar__ResourceBar = gdjs.evtsExt__TiledUnitsBar__ResourceBar || {};

/**
 * Behavior generated from Resource bar
 */
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar = class ResourceBar extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Value = behaviorData.Value !== undefined ? behaviorData.Value : Number("1") || 0;
    this._behaviorData.MaxValue = behaviorData.MaxValue !== undefined ? behaviorData.MaxValue : Number("3") || 0;
    this._behaviorData.PreviousHighValue = Number("") || 0;
    this._behaviorData.PreviousHighValueDuration = behaviorData.PreviousHighValueDuration !== undefined ? behaviorData.PreviousHighValueDuration : Number("1") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Value !== newBehaviorData.Value)
      this._behaviorData.Value = newBehaviorData.Value;
    if (oldBehaviorData.MaxValue !== newBehaviorData.MaxValue)
      this._behaviorData.MaxValue = newBehaviorData.MaxValue;
    if (oldBehaviorData.PreviousHighValue !== newBehaviorData.PreviousHighValue)
      this._behaviorData.PreviousHighValue = newBehaviorData.PreviousHighValue;
    if (oldBehaviorData.PreviousHighValueDuration !== newBehaviorData.PreviousHighValueDuration)
      this._behaviorData.PreviousHighValueDuration = newBehaviorData.PreviousHighValueDuration;

    return true;
  }

  // Properties:
  
  _getValue() {
    return this._behaviorData.Value !== undefined ? this._behaviorData.Value : Number("1") || 0;
  }
  _setValue(newValue) {
    this._behaviorData.Value = newValue;
  }
  _getMaxValue() {
    return this._behaviorData.MaxValue !== undefined ? this._behaviorData.MaxValue : Number("3") || 0;
  }
  _setMaxValue(newValue) {
    this._behaviorData.MaxValue = newValue;
  }
  _getPreviousHighValue() {
    return this._behaviorData.PreviousHighValue !== undefined ? this._behaviorData.PreviousHighValue : Number("") || 0;
  }
  _setPreviousHighValue(newValue) {
    this._behaviorData.PreviousHighValue = newValue;
  }
  _getPreviousHighValueDuration() {
    return this._behaviorData.PreviousHighValueDuration !== undefined ? this._behaviorData.PreviousHighValueDuration : Number("1") || 0;
  }
  _setPreviousHighValueDuration(newValue) {
    this._behaviorData.PreviousHighValueDuration = newValue;
  }
}

/**
 * Shared data generated from Resource bar
 */
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.SharedData = class ResourceBarSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TiledUnitsBar_ResourceBarSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TiledUnitsBar_ResourceBarSharedData = new gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.SharedData(
      initialData
    );
  }
  return instanceContainer._TiledUnitsBar_ResourceBarSharedData;
}

// Methods:
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__ResourceBar.LastValueChange") <= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousHighValueDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdatePreviousHighValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.ValueContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.ValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.ValueContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.ValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue(); }}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.Value = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.ValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.ValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue(gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("Value"), 0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxValue()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousHighValue() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1[i].resetTimer("__ResourceBar.LastValueChange");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousHighValue() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdatePreviousHighValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.MaxValueContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.MaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.MaxValueContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.MaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxValue(); }}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.MaxValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.MaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.MaxValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.MaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetMaxValueContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetMaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetMaxValueContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetMaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetMaxValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetMaxValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetMaxValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxValue(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetMaxValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetMaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetMaxValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetMaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.GDObjectObjects1[k] = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmpty = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsEmptyContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() == eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxValue() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.GDObjectObjects1[k] = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFull = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsFullContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousHighValue(); }}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.UpdatePreviousHighValueContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.UpdatePreviousHighValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.UpdatePreviousHighValueContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.UpdatePreviousHighValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.UpdatePreviousHighValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.UpdatePreviousHighValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.UpdatePreviousHighValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousHighValue(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue());
}
}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.UpdatePreviousHighValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.UpdatePreviousHighValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.UpdatePreviousHighValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.UpdatePreviousHighValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueDurationContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousHighValueDuration(); }}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.PreviousHighValueDurationContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetPreviousHighValueDurationContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetPreviousHighValueDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetPreviousHighValueDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetPreviousHighValueDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetPreviousHighValueDurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetPreviousHighValueDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetPreviousHighValueDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousHighValueDuration(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetPreviousHighValueDuration = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetPreviousHighValueDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetPreviousHighValueDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.SetPreviousHighValueDurationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext = {};
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects2= [];


gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PreviousHighValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1[k] = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__ResourceBar.LastValueChange") <= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousHighValueDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1[k] = gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChanging = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.IsChangingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("TiledUnitsBar::ResourceBar", gdjs.evtsExt__TiledUnitsBar__ResourceBar.ResourceBar);
