const Game = {
    map = [0, 0, 0, 0, 0, 0, 0, 0, 0],
    setMap => (position, player) = {
        if (this.map == 0) {
            this.map[position - 1] = player
        } else {
            console.log("Invalid position, choose again.")
        }
    }
    const ToString = function(row) {
        let newRow = ""
        for (value of row) {
            if (value == 0) {
                newRow += "-"
            } else if (value == 1) {
                newRow += "O"
            } else {
                newRow += "X"
            }
        }
        return newRow + "\n"
    }
    const draw = function() {
        console.log(ToString(this.map.splice(0, 2)) + ToString(this.map.splice(3, 5)) + ToString(this.map.splice(6, 8)))
    }
    const numZeros = function() {
        let count0 = 0
        for (num of this.map) {
            (num == 0) ? count0++ : null
        }
        return count0
    }
    const winner = function() {
        if (this.map[0] == this.map[1] == this.map[2])
    }
}
game = Game
console.log(game)