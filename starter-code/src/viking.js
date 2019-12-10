// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    recieveDamage(theDamage){
        this.health = this.health - theDamage;
    }

}

// Viking
class Viking extends Soldier {
        constructor() {
    this.attack() {

    }
    this.recieveDamage() {

    }
    battlecry() {
        
    }
        }
}

// Saxon
class Saxon {}

// War
class War {}
