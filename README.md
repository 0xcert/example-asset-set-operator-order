This is an example of how to use the Asset set operator order within the 0xcert Framework v2.

The example is put in the context of a simple dApp to showcase not only functionalities but also the basic principles of handling blockchain communication through the 0xcert Framework. The main logic is isolated in the `src/example.ts` file while response handling is located in `index.ts`. The basic configuration needed for communication can be found in the `src/config.ts` file.

To keep the example as simple as possible, some values are hardcoded, such as order definition. You can change those in the `src/config.ts` file.

The `src/config.ts` file also contains some empty variables that you need to set for the example to work. Mainly, the valueLedgerId, which you got at deploying a new value ledger in the value management guide, assetLedgerId which you got at deploying a new asset ledger in the asset management guide, the MetaMask primary account (account1Id) that deployed the value ledger and MetaMask secondary acccount (account2Id).

Project structure:

| Path           | Description                                   |
| -------------- | --------------------------------------------- |
| src/example.ts | Main logic showing the use.                   |
| src/config.ts  | Configuration file.                           |
| index.html     | Front-end styling.                            |
| index.ts       | Controller connecting front-end to the logic. |
| package.json   | Dependencies.                                 |
| style.css      | Front-end styling.                            |
