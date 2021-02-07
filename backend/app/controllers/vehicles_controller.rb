class VehiclesController < ApplicationController

    def index
        @vehicles = Vehicle.all
        render json: @vehicles
    end

    def create
        @vehicle = Vehicle.create(vehicle_params)
        render json: @vehicle
    end
    

    private

    def vehicle_params
        params.require(:vehicle).permit(:kind, :name)
    end

end
