import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class Skills {
    private readonly skills = [];

    create(skill) {
        const newSkill = { ...skill, id: uuidv4() };
        this.skills.push(newSkill);
        return newSkill;
    }

    findAll() {
        return this.skills;
    }

    findOne(id) {
        return this.skills.find(skill => skill.id === id);
    }

    update(id, skill) {
        const index = this.skills.findIndex(skill => skill.id === id);
        if (index === -1) {
            return false;
        }
        let skillUpdated = { ...this.skills[index], ...skill };
        this.skills[index] = skillUpdated;
        return skillUpdated;
    }

    delete(id) {
        const index = this.skills.findIndex(skill => skill.id === id);
        if (index === -1) {
            return false;
        }

        this.skills.splice(index, 1);
        return true;
    }
}
