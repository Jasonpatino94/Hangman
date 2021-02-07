class PlayersController < ApplicationController

    def index
        @players = Player.all
        render json: @players, include: [:scores]
    end

    def show
        @player = Player.find_by(id: params[:id])
        render json: @player, include: [:scores]
    end

    def create
        @player = Player.create(player_params)
        # if doesnt create
        # if creates
        render json: @player, include: [:scores]
    end


    private

    def player_params
        params.require(:player).permit(:name)
    end

end
