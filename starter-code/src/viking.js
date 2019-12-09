// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    recieveDamage(damage) {
        this.health = this.health - this.damage;
    }
}

// Viking
class Viking extends Soldier {
    
}

// Saxon
class Saxon {}

// War
class War {}
