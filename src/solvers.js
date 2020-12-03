/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  const board = new this.Board({n: n});

  let rowIdx = 0;

  const placePieceOnRow = (row) => {
    if (row === n) {
      return;
    }

    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()) {
        rowIdx++;
        placePieceOnRow(rowIdx);
      }

      if (rowIdx === n) {
        return;
      }

      board.togglePiece(row, i);
    }
  };

  placePieceOnRow(rowIdx);

  const solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solutionCount = 0;
  const board = new this.Board({n: n});

  const placePieceOnRow = (row) => {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()) {
        placePieceOnRow(row + 1);
      }

      board.togglePiece(row, i);
    }
  };

  placePieceOnRow(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  const board = new this.Board({n: n});

  let rowIdx = 0;

  const placePieceOnRow = (row) => {
    if (row === n) {
      return;
    }

    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyQueensConflicts()) {
        rowIdx++;
        placePieceOnRow(rowIdx);
      }

      if (rowIdx === n) {
        return;
      }

      board.togglePiece(row, i);
      if (i === n - 1) {
        rowIdx--;
      }
    }
  };

  placePieceOnRow(rowIdx);

  const solution = board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let solutionCount = 0;
  const board = new this.Board({n: n});

  const placePieceOnRow = (row) => {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyQueensConflicts()) {
        placePieceOnRow(row + 1);
      }

      board.togglePiece(row, i);
    }
  };

  placePieceOnRow(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
