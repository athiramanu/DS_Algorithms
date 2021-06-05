/**
 * @param {string} kingName
 */
 var ThroneInheritance = function(kingName) {
    
    this.king = kingName;
    this.inheritance = {};
    this.inheritance[kingName] = [];
    this.dead = new Set();
    
    return this;
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
    this.inheritance[childName] = [];
    this.inheritance[parentName].push(childName);
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
    this.dead.add(name);
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
    let result = [];
    
    let getInheritance = king => {         
        if (!this.dead.has(king)) result.push(king);
        this.inheritance[king].forEach(child => getInheritance(child));   
    }
    
    getInheritance(this.king);
    
    return result;
};

/** 
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */