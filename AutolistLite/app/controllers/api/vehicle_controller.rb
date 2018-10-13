class Api::VehicleController < ApplicationController

    def create 
        @vehicle = Vehicle.new(vehicle_params)
        if @vehicle.save
            render :show
        else 
            render json: @vehicle.errors.full_messages, status: 401
        end 
    end 

    def show
        @vehicle = Vehicle.find(params[:id])
        render :show
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
        params.require(:vehicle).permit(:views_count)
    end 
end 