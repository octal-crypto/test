accounts = await ethereum.request({ method: 'eth_requestAccounts' });
ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x037ccb73fd73f956901bcc4851040db81b8769d2',
          value: '1000',
          gasLimit: '0x5028',
          maxPriorityFeePerGas: '0x3b9aca00', 
          maxFeePerGas: '0x2540be400',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error(error));
