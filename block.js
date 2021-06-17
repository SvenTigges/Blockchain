
// Klassen Block
class Block {

    // Konstruktor + Parameter 
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;   // Zeitstemel
        this.lastHash = lastHash;    // Hash des verheriger Block 
        this.hash = hash;           // Eigener Hash
        this.data = data;          // Data
    }

    toString(){
         return ` Block-
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash.substring(0,10)}
            Hash:      ${this.hash.substring(0,10)}
            data:      ${this.data}`;
    }

        static genesis() {
            return new this("Genesis time", "-------", "f1r57-h45h", []);
        }

     static mineBlock(lastBlock, data) {  // Block 2 usw....
        const timestamp = Date.now();     // Zeit im ms seit 01.01.1970 || how soon is now? 
        const lastHash = lastBlock.hash;    
        const hash = "to Du hash";

        return new this(timestamp, lastHash, hash, data);
     }
}

module.exports = Block; // Export als Modul 