// SPDX-License-Identifier: MIT
pragma solidity 0.6.9;
pragma experimental ABIEncoderV2;



contract Delance{
    address payable public employer;
    address payable public freelancer;
    uint public deadline;
    uint public price;
    uint256 withdrawIndex;
    struct Request {
    string title;
    uint256 amount;
    bool locked;
    bool paid;
    }
  
    event RequestPaid(address receiver, uint256 amount);
    event RequestCreated(string title, uint256 amount, bool locked, bool paid);
    event RequestUnlocked(bool locked);
    Request[] public requests;

    constructor(address payable _freelancer,uint256 _deadline) public payable{
        freelancer=_freelancer;
        deadline=_deadline;
        employer=msg.sender;
        price=msg.value;

    } 
    function show() external view returns (address)
    {
        return employer;
    }
      function withdraw () external
      {
          require(msg.sender==employer,"");
          freelancer.transfer(address(this))
         

      }
    receive() external payable{
        price+=msg.value;
    }
    function getDeadline() public view returns (uint)
    {
        return deadline;
    }
    function getPrice() public view returns (uint)
    {
        return price;
    }
    modifier onlyFreelancer() {
        require(msg.sender == freelancer, "Only Freelancer!");
        _;
    }
    
    function createRequest(string memory _title, uint256 _amount) public onlyFreelancer {
      Request memory request = Request({
      title: _title,
      amount: _amount,
      locked: true,
      paid: false
    });

    requests.push(request);

    emit RequestCreated(_title, _amount, request.locked,request.paid);    
    
    }

    function getAllRequests() public view returns (Request[] memory) {
        return requests;
    }

    modifier onlyEmployer() {
    require(msg.sender == employer, "Only Employer!");
        _;
    } 
    
    function unlockRequest(uint256 _index) public onlyEmployer {
        Request storage request = requests[_index];
        require(request.locked, "Already unlocked");
        request.locked = false;
        // withdrawIndex=_index;
        emit RequestUnlocked(request.locked);

    }
      bool locked = false;
    function withdraw() external {
        require(!locked, "Reentrant call detected!");
        Request storage request = requests[withdrawIndex];

        locked = true;
        
       (bool success, bytes memory transactionBytes) =    
        freelancer.call{value:request.amount}('');
        
        require(success, "Transfer failed.");
        
        locked = false;
    }

    function payRequest(uint256 _index) public onlyFreelancer {
        
        require(!locked,'Reentrant detected!');
        
        Request storage request = requests[_index];
        require(!request.locked, "Request is locked");
        require(!request.paid, "Already paid");
        
        locked = true;
        
        (bool success,) = 
        freelancer.call{value:request.amount}('');
        
        require(success, "Transfer failed.");
        
        request.paid = true;
        
        locked = false;
        
        emit RequestPaid(msg.sender, request.amount);
    }


 
}
