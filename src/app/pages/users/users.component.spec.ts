import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './users.component';
import { MiServicioService } from '../../services/mi-servicio.service';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UsersComponent],
            imports: [MatTableModule],
            providers: [MiServicioService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('debería ser creado', () => {
        expect(component).toBeTruthy();
    });

    it('debería cargar los usuarios al iniciar', () => {
        const service = TestBed.inject(MiServicioService);
        spyOn(service, 'getUsers').and.returnValue([
            { id: 1, name: 'Usuario de Prueba', email: 'test@example.com', age: 30 }
        ]);

        component.ngOnInit();
        expect(component.dataSource.data.length).toBe(1);
        
    });

    it('debería eliminar un usuario', () => {
        const service = TestBed.inject(MiServicioService);
        spyOn(service, 'getUsers').and.returnValue([
            { id: 1, name: 'Usuario a eliminar', email: 'test@example.com', age: 30 },
        ]);

        component.deleteUser(1);
        expect(service.getUsers).toHaveBeenCalled();
        expect(component.dataSource.data.length).toBe(1);
    });
});
