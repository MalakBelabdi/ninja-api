import { Injectable } from '@nestjs/common';
import { Ninja } from './entities/coffee.entity';

@Injectable()
export class NinjasService {
    private ninjas: Ninja[] = [
        {
            id: 1,
            name: 'Malak',
            age: 24,
            skills: ['Jumping', 'Swimming']
        }
    ];

    findAll() {
        return this.ninjas;
    };

    findOne(id: string) {
        return this.ninjas.find(item => item.id === +id);
    };

    create(createNinja: any) {
        this.ninjas.push(createNinja);
        return this.ninjas;
    };

    update(id: string, updateNinja: any) {
        const existingNinja = this.findOne(id);
        if(existingNinja) {

        };
    };

    remove(id: string) {
        const ninjaIndex = this.ninjas.findIndex(item => item.id === +id);
        if(ninjaIndex >=0) {
            this.ninjas.splice(ninjaIndex, 1);
        };
    };
}
