class Api::VehicleController < ApplicationController

    def create 
        @vehicle = Vehicle.new(vehicle_params)
        @vehicle.views_count = 1
        if @vehicle.save
            render :show
        else 
            render json: @vehicle.errors.full_messages, status: 401
        end 
    end 

    def show
        @vehicle = Vehicle.find_by(VIN: params[:id])
        if @vehicle
            @vehicle.increment!(:views_count)
            render :show
        else 
            # raise "Error"
            render json: ["Vehicle not found"], status: 404
        end 
    end 

    def update
        @vehicle = Vehicle.find(params[:id])
        if @vehicle.update_attributes(vehicle_params)
            render :show
        else 
            render json: @vehicle.errors.full_messages, status: 401
        end 
    end 

    private
    def vehicle_params
        params.require(:vehicle).permit(:VIN)
    end 
end 