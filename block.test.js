const Block = require("./block"); 

describe("Block", () => {
    let data, lastBlock, block;

    beforeEach(() => {
        data = "boo";
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

  it("set the ´data´ to match the inpt", () =>{
      expect(blok.data).toEqual(data);
  });

  it("set the ´lastHash´ to match the hash of the last block", () =>{
        expact(block.lastHash).toEqual(lastBlock.hash);
  });

});
