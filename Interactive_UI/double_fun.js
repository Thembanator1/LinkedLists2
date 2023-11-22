class DoubleTests {
    constructor(newN, oldN) {
        this.newNodes = oldN;
        this.oldNodes = newN;
        this.Check = "false"; // Move this line to the constructor
    }
    

    testNochange() {

        var sourceNode = this.newNodes.find(node => node.name === "head");
        var sourceN = this.oldNodes.find(node => node.name === "head");
       
        if(this.newNodes.length!=this.oldNodes.length){
            return this.Check;
        }
        while (sourceNode != null) { 
            if (sourceNode.name == sourceN.name) {
                this.Check = "true";
            } else {
                this.Check = "false";
                break;
            }
            sourceNode = this.newNodes.find(node => node.name === sourceNode.next);
            sourceN = this.oldNodes.find(node => node.name === sourceN.next);
        }
       

        return this.Check;
    }
    testAdd(node){
        this.add = "false";
        var sourceNode = this.newNodes.find(node => node.name === "head");
        
        if(this.newNodes.length==this.oldNodes.length){
            return this.add;
        }
        while (sourceNode != null) {

            if(sourceNode.name ==node){

                if(sourceNode.prev!=null){
                    this.add = "true";
                }
                
                break;
            }
            sourceNode = this.newNodes.find(node => node.name === sourceNode.next);
        }
        return this.add;
    }

    testAddFront(node){
        this.add = "false";
        var sourceNode = this.newNodes.find(node => node.name === "head");
        if(this.newNodes.length==this.oldNodes.length){
            return this.add;
        }
       else{

        sourceNode = this.newNodes.find(node => node.name === sourceNode.next);
            if(sourceNode.name ==node){
                if(sourceNode.prev =="head"){
                    this.add = "true";  
                }
                
            }
           
        }
        return this.add;
    }

    testRemove(node){
        this.add = "true";
        var sourceNode = this.newNodes.find(node => node.name === "head");
        
        while (sourceNode != null) {

            if(sourceNode.name ==node){
                this.add = "false"; 
            }
            if(sourceNode.name!="head" && sourceNode.prev==null){
                this.add = "false";
            }
            sourceNode = this.newNodes.find(node => node.name === sourceNode.next);
        }
        return this.add;

    }

    testRemoveBack(node){
        this.add = "true";
        var sourceNode = this.newNodes.find(node => node.name === "head");
        var temp = this.newNodes.find(node => node.name === sourceNode.next);

        if(this.newNodes.length==this.oldNodes.length){
            return this.add;
        }
        while (sourceNode != null) {

            if(sourceNode.name ==node && temp.name =="tail"){
                this.add = "false"; 
            }

            if(sourceNode.next =="tail"){
                var curr = sourceNode.next;
                if(curr.prev ==null){
                    this.add = "false";  
                }
            }
            sourceNode = this.newNodes.find(node => node.name === sourceNode.next);

            if(sourceNode != null){            
            if(sourceNode.name!="tail"){
             temp = this.newNodes.find(node => node.name === sourceNode.next);
            }
        }
            
        }
        return this.add;

    }

    testRemoveFront(node){

        this.add = "true";
        var sourceNode = this.newNodes.find(node => node.name === "head");

        if(sourceNode.next==null){
            this.add = "false";
            return this.add;
        }
        if(this.newNodes.length==this.oldNodes.length){
            return this.add;
        }
       else{
        sourceNode = this.newNodes.find(node => node.name === sourceNode.next);
            if(sourceNode.name ==node){
                this.add = "false";  
            }
            
           
        }
        return this.add;

    }
   testAddBack(node){
    this.add = "false";
        var sourceNode = this.newNodes.find(node => node.name === "head");
        var temp = this.newNodes.find(node => node.name === sourceNode.next);

        if(this.newNodes.length==this.oldNodes.length){
            return this.add;
        }
        while (sourceNode != null) {
            if(sourceNode.name ==node && temp.name =="tail"){
                if(sourceNode.prev!=null){
                    
                    this.add = "true"; 
                }
               
            }
            sourceNode = this.newNodes.find(node => node.name === sourceNode.next);

            if(sourceNode != null){            
            if(sourceNode.name!="tail"){
             temp = this.newNodes.find(node => node.name === sourceNode.next);
            }
        }
            
        }
        return this.add;

   }
    

}

//export default DoubleTests;
module.exports = DoubleTests;

