module API
  class DrinksController < ApplicationController
    before_action :set_drink, only: [:show, :edit, :update, :destroy]

    def index
      # @drinks = Drink.all
      render json: Drink.all
    end

    def show
      render json: Drink.find(params[:id])
    end

    # GET /drinks/new
    def new
      @drink = Drink.new
    end

    def create
      @drink = Drink.new(drink_params)

      if @drink.save
        render json: @drink, status: 201
      else
        render json: {errors: @drink.errors}, status: 422
      end
    end

    def update
      @drink = Drink.find(params[:id])

      if @drink.update(drink_params)
        render json: @drink, status: 200
      else
        render json: {errors: @drink.errors}, status: 422
      end
    end

    # DELETE /drinks/1
    # DELETE /drinks/1.json
    def destroy
      @drink.destroy
      respond_to do |format|
        format.html { redirect_to drinks_url, notice: 'Drink was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_drink
        @drink = Drink.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def drink_params
        params.require(:drink).permit(:name, :recipe, :price)
      end
  end
end