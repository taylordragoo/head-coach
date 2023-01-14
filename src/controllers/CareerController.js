import { CareerService } from '@/service/index';

export default class CareerController {

    constructor() {
        this.careerService = new CareerService();
    }

    create(request) {
        console.log(request.type);
        const x = request.type
        this.careerService.handleGenerateSchedule(request)
        switch(x) {
            case (x == 'new'):
                this.careerService.handleCreateNewCareer(request)
                break;
            case (x == 'default'):
                this.careerService.handleCreateDefaultDatabase(request)
                break;
            case (x == 'generate'):
                console.log("called this")
                this.careerService.handleGenerateSchedule(request)
                break;
            default:
                return;
        }
    }

    update(request)
    {
        this.careerService.handleSaveCareer(request).then(function() {
            console.log("Saving...")
        })
    }

    delete(db) {
        this.careerService.handleDeleteCareer(db)
    }
}
