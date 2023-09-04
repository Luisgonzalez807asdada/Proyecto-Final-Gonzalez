import { TestBed } from '@angular/core/testing';
import { MiServicioService } from './mi-servicio.service';

describe('MiServicioService', () => {
    let service: MiServicioService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MiServicioService);
    });

    it('debería ser creado', () => {
        expect(service).toBeTruthy();
    });

    it('debería retornar la lista de usuarios', () => {
        const users = service.getUsers();
        expect(users.length).toBe(4);
    });

    it('debería eliminar un usuario', () => {
        const initialUsers = service.getUsers();
        const userIdToDelete = 1; 

        service.deleteUser(userIdToDelete);

        const updatedUsers = service.getUsers();
        expect(updatedUsers.length).toBe(initialUsers.length - 1);
        expect(updatedUsers.some(user => user.id === userIdToDelete)).toBe(false);
    });
});
