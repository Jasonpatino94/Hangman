class ScoresController < ApplicationController
    
    def index
        @scores = Score.all
        render json: @scores, include: [:player]
    end 

    def create
        @player = Player.find_or_create_by(player_params) 
        @score = @player.scores.build(scores_params)
        if @player.valid? && @score.save
            render json: @score
        else
            render json: {error: "couldnt save that score", status: 400} 
        end
    end
    
    private

    def scores_params
        params.require(:score).permit(:points)
    end

    def player_params
        params.require(:player).permit(:name)
    end
end